// ============================================
// ABOUT US
// ============================================

import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  NgZone,
  afterNextRender,
  inject,
  viewChild
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { SeoService } from '../../services/seo.service';
import { ProductService } from '../../services/product.service';
import { EnquiryService } from '../../services/enquiry.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CountUpDirective } from '../../shared/directives/count-up.directive';

@Component({
  selector: 'app-about',
  imports: [RouterLink, SectionHeaderComponent, RevealDirective, CountUpDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  protected readonly company = environment.company;
  protected readonly enquiry = inject(EnquiryService);
  private readonly products = inject(ProductService);

  protected readonly mapsUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(environment.company.address.full)}`;

  protected readonly stats = [
    { value: this.company.stats.years, suffix: '+', label: 'Years in the trade' },
    { value: this.products.getTotalProductCount(), suffix: '', label: 'Products listed' },
    { value: this.products.getTotalCategoryCount(), suffix: '', label: 'Categories' },
    { value: this.company.stats.clients, suffix: '+', label: 'Repeat customers' }
  ];

  protected readonly values = [
    {
      icon: 'fa-solid fa-bullseye',
      title: 'The right part, not the priciest',
      text: 'We ask about the machine, the media and the temperature before we recommend anything — so the seal fits and lasts.'
    },
    {
      icon: 'fa-solid fa-tags',
      title: 'Brands you already trust',
      text: 'SKF, IVR, J K Pioneer and Gold Super oil seals alongside PU, nitrile and Viton seals, kits and couplings.'
    },
    {
      icon: 'fa-solid fa-comments',
      title: 'Straight answers',
      text: 'Price, stock and lead time up front, on WhatsApp, email or phone — whichever you prefer.'
    },
    {
      icon: 'fa-solid fa-store',
      title: 'A real counter you can visit',
      text: `Walk in at ${environment.company.address.line1}, ${environment.company.address.line2} with your old part and we'll match it.`
    }
  ];

  /** What happens after you get in touch — a real sequence, so it's numbered */
  protected readonly journey = [
    { icon: 'fa-solid fa-camera', title: 'You share the part', text: 'A product name, the size printed on the old seal, or simply a photo on WhatsApp.' },
    { icon: 'fa-solid fa-magnifying-glass', title: 'We identify it', text: 'We match the size, material and type, and check what is in stock right now.' },
    { icon: 'fa-solid fa-indian-rupee-sign', title: 'You get a clear quote', text: 'Price, quantity and availability — usually the same working day for stocked items.' },
    { icon: 'fa-solid fa-file-invoice', title: 'We pack and invoice', text: `Every order is billed with a GST invoice (GSTIN ${environment.company.gst}).` },
    { icon: 'fa-solid fa-truck-ramp-box', title: 'Pickup or dispatch', text: 'Collect from our Burra Bazar counter, or tell us where to send it and we will arrange it.' }
  ];

  private readonly timeline = viewChild<ElementRef<HTMLElement>>('timeline');

  constructor() {
    inject(SeoService).set({
      title: 'About us',
      description: `Burhani Seal Centre, ${environment.company.address.line2}, Kolkata — led by ${environment.company.owner}. Oil seals, hydraulic seals, seal kits, couplings and bearings with help matching the right part.`,
      path: '/about'
    });

    // The blue line in the timeline fills as you scroll through it
    const zone = inject(NgZone);
    const doc = inject(DOCUMENT);
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const win = doc.defaultView!;
      zone.runOutsideAngular(() => {
        const update = () => {
          const el = this.timeline()?.nativeElement;
          if (!el) return;
          const r = el.getBoundingClientRect();
          const p = (win.innerHeight * 0.6 - r.top) / r.height;
          el.style.setProperty('--fill', String(Math.max(0, Math.min(1, p))));
        };
        win.addEventListener('scroll', update, { passive: true });
        update();
        destroyRef.onDestroy(() => win.removeEventListener('scroll', update));
      });
    });
  }
}
