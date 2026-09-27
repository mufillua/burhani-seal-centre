// ============================================
// PRODUCTS PAGE COMPONENT
// ============================================
// Full product catalog with:
// - Category filter sidebar/tabs
// - Product grid
// - Search bar
// - Smooth filter transitions

import {
  Component,
  OnInit,
  signal,
  computed
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { SeoService } from '../../services/seo.service';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ProductCardComponent,
    SectionHeaderComponent
  ],
  animations: [
    // Stagger cards as they appear
    trigger('gridAnim', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(24px)' }),
          stagger('60ms', [
            animate(
              '0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ], { optional: true })
      ])
    ])
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class ProductsComponent implements OnInit {

  // ── State ──────────────────────────────────
  selectedCategoryId = signal<string>('all');
  searchQuery        = signal<string>('');
  isGridView         = signal<boolean>(true);

  // ── Data ───────────────────────────────────
  categories: Category[]  = [];
  allProducts: Product[]  = [];

  // ── Computed: filtered product list ────────
  // This recomputes automatically whenever
  // selectedCategoryId or searchQuery changes
  filteredProducts = computed(() => {
    let products = this.allProducts;

    // Filter by category
    const catId = this.selectedCategoryId();
    if (catId !== 'all') {
      products = products.filter(p => p.categoryId === catId);
    }

    // Filter by search
    const query = this.searchQuery().trim().toLowerCase();
    if (query.length >= 2) {
      products = products.filter(p =>
        p.name.toLowerCase().includes(query)               ||
        p.shortDescription.toLowerCase().includes(query)   ||
        p.categoryName.toLowerCase().includes(query)       ||
        p.applications.some(a => a.toLowerCase().includes(query)) ||
        p.industriesServed.some(i => i.toLowerCase().includes(query))
      );
    }

    return products;
  });

  // ── Computed: active category label ────────
  activeCategoryLabel = computed(() => {
    if (this.selectedCategoryId() === 'all') return 'All Products';
    return this.categories.find(c => c.id === this.selectedCategoryId())?.name || 'Products';
  });

  constructor(
    private productService: ProductService,
    private seoService: SeoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.seoService.setProductsSeo();
    this.categories = this.productService.getAllCategories();
    this.allProducts = this.productService.getAllProducts();

    // Check if a category was passed as a query param
    // e.g. /products?category=mechanical-seals
    this.route.queryParams.subscribe(params => {
      const cat = params['category'];
      if (cat) this.selectedCategoryId.set(cat);
    });
  }

  selectCategory(id: string): void {
    this.selectedCategoryId.set(id);
    this.searchQuery.set('');
    // Smooth scroll to grid
    document.getElementById('products-grid')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onSearchInput(value: string): void {
    this.searchQuery.set(value);
    this.selectedCategoryId.set('all');
  }

  clearSearch(): void {
    this.searchQuery.set('');
  }

  toggleView(): void {
    this.isGridView.update(v => !v);
  }

  trackById(_i: number, item: Product | Category): string {
    return (item as Product).id || (item as Category).id;
  }
}
