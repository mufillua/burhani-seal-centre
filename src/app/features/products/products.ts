// ============================================
// PRODUCTS — catalogue with filters + pagination
// ============================================
// Everything lives in the URL so any view can be shared,
// bookmarked or refreshed:
//   /products?category=oil-seals&q=viton&sort=name-asc&page=2
// 12 products per page.

import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  computed,
  effect,
  inject,
  linkedSignal,
  viewChild
} from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { PAGE_SIZE, ProductService, ProductSort } from '../../services/product.service';
import { SeoService } from '../../services/seo.service';
import { EnquiryService } from '../../services/enquiry.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { PaginationComponent } from '../../shared/components/pagination/pagination';
import { CategoryArtComponent } from '../../shared/components/category-art/category-art';

const SORTS: { value: ProductSort; label: string }[] = [
  { value: 'featured', label: 'Featured first' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' }
];

@Component({
  selector: 'app-products',
  imports: [RouterLink, ProductCardComponent, PaginationComponent, CategoryArtComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class ProductsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly products = inject(ProductService);
  private readonly seo = inject(SeoService);
  protected readonly enquiry = inject(EnquiryService);

  protected readonly categories = this.products.getAllCategories();
  protected readonly totalProducts = this.products.getTotalProductCount();
  protected readonly sorts = SORTS;
  protected readonly pageSize = PAGE_SIZE;

  private readonly results = viewChild<ElementRef<HTMLElement>>('results');
  private readonly chips = viewChild<ElementRef<HTMLElement>>('chips');

  // ── State, read from the URL ─────────────
  private readonly params = toSignal(this.route.queryParamMap, { requireSync: true });

  protected readonly category = computed(() => {
    const id = this.params().get('category');
    return this.products.getCategoryById(id) ? id : null;
  });
  protected readonly activeCategory = computed(() => this.products.getCategoryById(this.category()));
  protected readonly search = computed(() => (this.params().get('q') ?? '').slice(0, 80));
  protected readonly sort = computed<ProductSort>(() => {
    const s = this.params().get('sort') as ProductSort;
    return SORTS.some(o => o.value === s) ? s : 'featured';
  });
  protected readonly requestedPage = computed(() => Number(this.params().get('page')) || 1);

  protected readonly result = computed(() =>
    this.products.query({
      category: this.category(),
      search: this.search(),
      sort: this.sort(),
      page: this.requestedPage()
    })
  );

  /** What's in the search box right now (updates the URL after a pause) */
  protected readonly searchInput = linkedSignal(() => this.search());
  private searchTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    // Page title / description follow the selected category
    effect(() => {
      const cat = this.activeCategory();
      this.seo.set({
        title: cat ? `${cat.name} — buy in Kolkata` : 'Product catalogue — seals, kits, couplings & bearings',
        description: cat
          ? `${cat.description} Browse ${cat.productCount} products and enquire on WhatsApp or email — Burhani Seal Centre, Burra Bazar, Kolkata.`
          : `Browse ${this.totalProducts} industrial products: oil seals, hydraulic seals, seal kits, pump seals, O-rings, couplings, rubber sheets and SKF bearings. Enquire on WhatsApp or email.`,
        path: cat ? `/products?category=${cat.id}` : '/products'
      });
    });

    // Keep the selected category chip in view on phones
    effect(() => {
      const id = this.category() ?? 'all';
      queueMicrotask(() => {
        const chip = this.chips()?.nativeElement.querySelector<HTMLElement>(`[data-chip="${id}"]`);
        chip?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
      });
    });

    inject(DestroyRef).onDestroy(() => clearTimeout(this.searchTimer));
  }

  // ── Actions ──────────────────────────────

  protected setCategory(id: string | null): void {
    if (id === this.category()) return;
    this.navigate({ category: id, page: null });
    this.scrollToResults();
  }

  protected setPage(page: number): void {
    this.navigate({ page: page > 1 ? page : null });
    this.scrollToResults(true);
  }

  protected setSort(value: string): void {
    this.navigate({ sort: value === 'featured' ? null : value, page: null });
  }

  protected onSearchInput(value: string): void {
    this.searchInput.set(value);
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.navigate({ q: value.trim() || null, page: null }, true);
    }, 280);
  }

  protected clearSearch(): void {
    this.searchInput.set('');
    clearTimeout(this.searchTimer);
    this.navigate({ q: null, page: null }, true);
  }

  protected clearAll(): void {
    this.searchInput.set('');
    this.navigate({ q: null, page: null, category: null, sort: null });
  }

  private navigate(params: Params, replaceUrl = false): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
      replaceUrl
    });
  }

  /** Bring the top of the results into view if it's off-screen */
  private scrollToResults(always = false): void {
    setTimeout(() => {
      const el = this.results()?.nativeElement;
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (always ? top < 0 || top > window.innerHeight * 0.6 : top < 0) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 30);
  }
}
