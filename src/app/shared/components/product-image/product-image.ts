// ============================================
// PRODUCT IMAGE
// ============================================
// Shows the product photo, or — when there isn't one yet,
// or it fails to load — a branded tile with the category's
// line illustration. No broken-image icons, no 404s.

import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { CategoryArtComponent } from '../category-art/category-art';

@Component({
  selector: 'app-product-image',
  imports: [CategoryArtComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'product-image', '[class.product-image--art]': '!showPhoto()' },
  template: `
    @if (showPhoto()) {
      <img [src]="src() || product().imageUrl"
           [alt]="product().imageAlt || product().name"
           [attr.width]="width()" [attr.height]="height()"
           [attr.loading]="priority() ? 'eager' : 'lazy'"
           [attr.fetchpriority]="priority() ? 'high' : null"
           decoding="async"
           [class.is-loaded]="loaded()"
           (load)="loaded.set(true)"
           (error)="failed.set(true)" />
    } @else {
      <div class="art-tile">
        <app-category-art class="art-tile__art" [type]="art()" />
        <span class="art-tile__label">{{ product().categoryName }}</span>
      </div>
    }
  `,
  styleUrl: './product-image.scss'
})
export class ProductImageComponent {
  readonly product = input.required<Product>();
  /** Show this photo instead of the main one (product page gallery) */
  readonly src = input<string | null>(null);
  readonly priority = input(false);
  readonly width = input(800);
  readonly height = input(600);

  private readonly products = inject(ProductService);

  protected readonly failed = signal(false);
  protected readonly loaded = signal(false);
  protected readonly showPhoto = computed(() => !!this.product().imageUrl && !this.failed());
  protected readonly art = computed(() => this.products.getCategoryById(this.product().categoryId)?.art);
}
