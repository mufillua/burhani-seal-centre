// ============================================
// CATEGORIES — every category at a glance
// ============================================

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { SeoService } from '../../services/seo.service';
import { CategoryArtComponent } from '../../shared/components/category-art/category-art';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-categories',
  imports: [RouterLink, CategoryArtComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class CategoriesComponent {
  private readonly products = inject(ProductService);
  protected readonly totalProducts = this.products.getTotalProductCount();

  protected readonly categories = this.products.getAllCategories().map(cat => ({
    ...cat,
    top: this.products.getProductsByCategory(cat.id).slice(0, 4),
    photos: this.products.getCategoryPreviewImages(cat.id, 3)
  }));

  constructor() {
    inject(SeoService).set({
      title: 'Product categories',
      description: 'Oil seals, hydraulic seals, seal kits, pump seals, O-rings, couplings, rubber sheets and bearings — browse every category at Burhani Seal Centre, Kolkata.',
      path: '/categories'
    });
  }
}
