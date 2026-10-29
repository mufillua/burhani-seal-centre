// ============================================
// PRODUCT SERVICE
// ============================================
// Every page asks this service for catalogue data —
// filtering, search, sorting and pagination live here
// so the logic is written (and tested) once.

import { Injectable } from '@angular/core';
import { CATEGORIES, PRODUCTS } from '../data/products.data';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

export type ProductSort = 'featured' | 'name-asc' | 'name-desc';

export interface ProductQuery {
  category?: string | null;
  search?: string | null;
  sort?: ProductSort;
  page?: number;
  pageSize?: number;
}

export interface ProductPage {
  items: Product[];
  total: number;       // matching products (all pages)
  page: number;        // current page, 1-based, clamped to range
  pageSize: number;
  totalPages: number;
  from: number;        // 1-based index of first item on this page
  to: number;          // 1-based index of last item on this page
}

export const PAGE_SIZE = 12;

/** Lower-case, strip punctuation, collapse spaces — so "o-ring" finds "O Ring" */
function normalise(text: string): string {
  return text
    .toLowerCase()
    .replace(/(\d)\s*[×x]\s*(?=\d)/g, '$1 ')   // 35x62x7 → 35 62 7
    .replace(/(\d)([a-z])/g, '$1 $2')            // 20mm → 20 mm
    .replace(/([a-z])(\d)/g, '$1 $2')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

@Injectable({ providedIn: 'root' })
export class ProductService {

  private readonly products = [...PRODUCTS].sort((a, b) => a.sortOrder - b.sortOrder);

  private readonly categories: Category[] = CATEGORIES
    .map(c => ({ ...c, productCount: PRODUCTS.filter(p => p.categoryId === c.id).length }))
    .sort((a, b) => a.sortOrder - b.sortOrder);

  /** Pre-computed search text per product (name weighted separately) */
  private readonly index = new Map(this.products.map(p => [p.id, {
    name: normalise(p.name),
    rest: normalise([
      p.categoryName, p.shortDescription,
      ...p.specifications.map(s => s.value),
      ...p.applications, ...p.industriesServed
    ].join(' '))
  }]));

  // ── Categories ───────────────────────────

  getAllCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: string | null | undefined): Category | undefined {
    return id ? this.categories.find(c => c.id === id) : undefined;
  }

  // ── Products ─────────────────────────────

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductBySlug(slug: string): Product | undefined {
    return this.products.find(p => p.slug === slug);
  }

  getProductsByCategory(categoryId: string): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  /** Featured products, photographed ones first */
  getFeaturedProducts(limit = 8): Product[] {
    return this.products
      .filter(p => p.featured)
      .sort((a, b) => Number(!!b.imageUrl) - Number(!!a.imageUrl))
      .slice(0, limit);
  }

  /** Same category first, then neighbours, never the product itself */
  getRelatedProducts(product: Product, limit = 4): Product[] {
    const same = this.products.filter(p => p.categoryId === product.categoryId && p.id !== product.id);
    const others = this.products.filter(p => p.categoryId !== product.categoryId && p.featured);
    return [...same, ...others].slice(0, limit);
  }

  /** Up to 3 photographed products per category — used for previews */
  getCategoryPreviewImages(categoryId: string, limit = 3): Product[] {
    return this.getProductsByCategory(categoryId).filter(p => p.imageUrl).slice(0, limit);
  }

  /**
   * Search: every word typed must appear somewhere.
   * Name matches rank above description matches.
   */
  search(term: string | null | undefined, source: Product[] = this.products): Product[] {
    const words = normalise(term ?? '').split(' ').filter(Boolean);
    if (!words.length) return source;

    const scored: { p: Product; score: number }[] = [];
    for (const p of source) {
      const idx = this.index.get(p.id)!;
      let score = 0;
      let all = true;
      for (const w of words) {
        if (idx.name.includes(w)) score += idx.name.startsWith(w) ? 6 : 4;
        else if (idx.rest.includes(w)) score += 1;
        else { all = false; break; }
      }
      if (all) scored.push({ p, score });
    }
    return scored.sort((a, b) => b.score - a.score || a.p.sortOrder - b.p.sortOrder).map(s => s.p);
  }

  /** Quick suggestions for the search boxes */
  suggest(term: string, limit = 6): Product[] {
    return term.trim().length < 2 ? [] : this.search(term).slice(0, limit);
  }

  /** Filter → search → sort → paginate, in one call */
  query(q: ProductQuery): ProductPage {
    const pageSize = q.pageSize ?? PAGE_SIZE;
    let list = q.category ? this.products.filter(p => p.categoryId === q.category) : this.products;

    const hasSearch = !!q.search?.trim();
    list = this.search(q.search, list);

    const sort = q.sort ?? 'featured';
    if (sort === 'name-asc') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === 'name-desc') list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    else if (!hasSearch) list = [...list].sort((a, b) =>
      Number(!!b.featured) - Number(!!a.featured) || a.sortOrder - b.sortOrder);

    const total = list.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const page = Math.min(Math.max(1, Math.floor(q.page ?? 1) || 1), totalPages);
    const start = (page - 1) * pageSize;
    const items = list.slice(start, start + pageSize);

    return {
      items, total, page, pageSize, totalPages,
      from: total ? start + 1 : 0,
      to: start + items.length
    };
  }

  getTotalProductCount(): number {
    return this.products.length;
  }

  getTotalCategoryCount(): number {
    return this.categories.length;
  }
}
