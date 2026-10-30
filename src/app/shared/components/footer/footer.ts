// ============================================
// FOOTER
// ============================================

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { ProductService } from '../../../services/product.service';
import { EnquiryService } from '../../../services/enquiry.service';
import { RevealDirective } from '../../directives/reveal.directive';
import { LogoMarkComponent } from '../logo-mark/logo-mark';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RevealDirective, LogoMarkComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  protected readonly company = environment.company;
  protected readonly enquiry = inject(EnquiryService);
  protected readonly categories = inject(ProductService).getAllCategories();
  protected readonly year = new Date().getFullYear();

  protected readonly pages = [
    { label: 'All products', path: '/products' },
    { label: 'Categories', path: '/categories' },
    { label: 'About us', path: '/about' },
    { label: 'Industries we serve', path: '/industries' },
    { label: 'Get a quote', path: '/contact' }
  ];

  // Only show social icons that actually have a link
  protected readonly socials = [
    { icon: 'fa-brands fa-linkedin-in', url: this.company.social.linkedin, label: 'LinkedIn' },
    { icon: 'fa-brands fa-facebook-f', url: this.company.social.facebook, label: 'Facebook' },
    { icon: 'fa-brands fa-instagram', url: this.company.social.instagram, label: 'Instagram' },
    { icon: 'fa-solid fa-store', url: this.company.social.indiamart, label: 'IndiaMART' }
  ].filter(s => !!s.url);

  protected readonly mapsUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(environment.company.address.full)}`;

  protected scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
