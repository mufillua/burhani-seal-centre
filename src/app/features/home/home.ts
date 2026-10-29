// ============================================
// HOME PAGE
// ============================================

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { SeoService } from '../../services/seo.service';
import { ProductService } from '../../services/product.service';
import { EnquiryService } from '../../services/enquiry.service';
import { INDUSTRIES } from '../../data/industries.data';
import { HeroComponent } from './hero/hero';
import { FeaturedComponent } from './featured/featured';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { CategoryArtComponent } from '../../shared/components/category-art/category-art';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CountUpDirective } from '../../shared/directives/count-up.directive';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink, HeroComponent, FeaturedComponent, SectionHeaderComponent,
    CategoryArtComponent, RevealDirective, CountUpDirective
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  private readonly products = inject(ProductService);
  protected readonly enquiry = inject(EnquiryService);
  protected readonly company = environment.company;

  protected readonly categories = this.products.getAllCategories();
  protected readonly totalProducts = this.products.getTotalProductCount();
  protected readonly industries = [...INDUSTRIES].sort((a, b) => a.sortOrder - b.sortOrder);

  /** Brands and materials we stock — shown in the moving ribbon */
  protected readonly ribbon = [
    'SKF', 'Nitrile (NBR)', 'IVR', 'Viton (FKM)', 'J K Pioneer', 'Polyurethane',
    'Gold Super', 'Silicone', 'Double-lip', 'PTFE-loaded', 'Stainless steel'
  ];

  protected readonly stats = [
    { value: this.company.stats.years, suffix: '+', label: 'Years in the trade' },
    { value: this.totalProducts, suffix: '', label: 'Products listed' },
    { value: this.products.getTotalCategoryCount(), suffix: '', label: 'Categories' },
    { value: this.company.stats.clients, suffix: '+', label: 'Repeat customers' }
  ];

  protected readonly steps = [
    {
      icon: 'fa-solid fa-magnifying-glass',
      title: 'Find your part',
      text: 'Search by name, size or material, or browse a category. Every product lists its sizes and specs.'
    },
    {
      icon: 'fa-brands fa-whatsapp',
      title: 'Enquire in one tap',
      text: 'Press WhatsApp or Email on the product. The message is pre-filled with the product and quantity.'
    },
    {
      icon: 'fa-solid fa-file-invoice',
      title: 'Get price & collect',
      text: 'We reply with price and stock. Collect from our Burra Bazar counter or ask us to arrange dispatch.'
    }
  ];

  constructor() {
    inject(SeoService).set({
      title: environment.seo.defaultTitle,
      description: environment.seo.defaultDescription,
      path: '/'
    });
  }
}
