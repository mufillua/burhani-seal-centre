// ============================================
// PRODUCT SERVICE
// ============================================
// All product-related data operations.
// Components ask this service for data —
// they never import data files directly.

import { Injectable } from '@angular/core';
import {
  PRODUCTS,
  CATEGORIES,
  getProductsByCategory,
  getProductBySlug,
  getFeaturedProducts,
  getCategoriesWithCount
} from '../data/products.data';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // ─── Categories ───────────────────────────

  /** Get all categories with their product counts */
  getAllCategories(): Category[] {
    return getCategoriesWithCount();
  }

  /** Get only featured categories */
  getFeaturedCategories(): Category[] {
    return getCategoriesWithCount().filter(c => c.featured);
  }

  /** Get a category by its ID */
  getCategoryById(id: string): Category | undefined {
    return CATEGORIES.find(c => c.id === id);
  }

  // ─── Products ─────────────────────────────

  /** Get all products */
  getAllProducts(): Product[] {
    return [...PRODUCTS].sort((a, b) => a.sortOrder - b.sortOrder);
  }

  /** Get products for a specific category */
  getProductsByCategory(categoryId: string): Product[] {
    return getProductsByCategory(categoryId);
  }

  /** Get a single product by its URL slug */
  getProductBySlug(slug: string): Product | undefined {
    return getProductBySlug(slug);
  }

  /** Get featured products for homepage display */
  getFeaturedProducts(): Product[] {
    return getFeaturedProducts();
  }

  /** Get related products (same category, excluding current) */
  getRelatedProducts(currentProductId: string, categoryId: string, limit = 3): Product[] {
    return PRODUCTS
      .filter(p => p.categoryId === categoryId && p.id !== currentProductId)
      .slice(0, limit);
  }

  /** Search products by name or description */
  searchProducts(query: string): Product[] {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    return PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.applications.some(a => a.toLowerCase().includes(q)) ||
      p.industriesServed.some(i => i.toLowerCase().includes(q))
    );
  }

  /** Get total product count */
  getTotalProductCount(): number {
    return PRODUCTS.length;
  }

  /** Get total category count */
  getTotalCategoryCount(): number {
    return CATEGORIES.length;
  }
}
