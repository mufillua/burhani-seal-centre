// ============================================
// INDUSTRIES WE SERVE
// ============================================

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INDUSTRIES } from '../../data/industries.data';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { SeoService } from '../../services/seo.service';
import { EnquiryService } from '../../services/enquiry.service';
import { ProductImageComponent } from '../../shared/components/product-image/product-image';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-industries',
  imports: [RouterLink, ProductImageComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './industries.html',
  styleUrl: './industries.scss'
})
export class IndustriesComponent {
  private readonly products = inject(ProductService);
  protected readonly enquiry = inject(EnquiryService);

  protected readonly industries = [...INDUSTRIES]
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map(ind => ({
      ...ind,
      products: ind.productsUsed
        .map(slug => this.products.getProductBySlug(slug))
        .filter((p): p is Product => !!p),
      whatsappHref: this.enquiry.whatsappHref(
        `Hello Burhani Seal Centre,\n\nWe are in the ${ind.name.toLowerCase()} and need sealing parts. Please suggest suitable products and share prices.\n\nThank you.`
      )
    }));

  constructor() {
    const seo = inject(SeoService);
    seo.set({
      title: 'Seals & Rubber Parts by Industry',
      description: seo.snippet('Seals, gaskets, bellows and diaphragms for chemical, pharma, food, oil & gas, power, water, cement and steel plants.'),
      path: '/industries'
    });
  }
}
