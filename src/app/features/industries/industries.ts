// ============================================
// INDUSTRIES PAGE COMPONENT
// ============================================
// Showcases all 11 industries we serve.
// Each industry card shows:
//   - Icon, name, description
//   - Products used in that industry
//   - Link to relevant products

import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  signal,
  computed
} from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { WhatsappService } from '../../services/whatsapp.service';
import { ProductService } from '../../services/product.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { INDUSTRIES } from '../../data/industries.data';
import { Industry } from '../../models/industry.model';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent, TitleCasePipe],
  animations: [
    trigger('cardStagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(32px)' }),
          stagger('70ms', [
            animate(
              '0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ], { optional: true })
      ])
    ])
  ],
  templateUrl: './industries.html',
  styleUrl: './industries.scss'
})
export class IndustriesComponent implements OnInit, AfterViewInit, OnDestroy {

  // ── State ──────────────────────────────────
  heroVisible      = signal(false);
  gridVisible      = signal(false);
  statsVisible     = signal(false);
  activeIndustry   = signal<Industry | null>(null);

  // ── Data ───────────────────────────────────
  industries: Industry[] = [];
  totalProductCount = 0;

  // ── Computed ───────────────────────────────
  selectedProducts = computed(() => {
    const ind = this.activeIndustry();
    if (!ind) return [];
    return ind.productsUsed
      .map(id => this.productService.getProductBySlug(id))
      .filter(Boolean) as ReturnType<typeof this.productService.getProductBySlug>[];
  });

  // Key stats about our industrial reach
  readonly industrialStats = [
    { value: '11',   label: 'Industries Served',   icon: 'fa-industry'       },
    { value: '44+',  label: 'Product Lines',        icon: 'fa-boxes-stacked'  },
    { value: '21',   label: 'Product Categories',   icon: 'fa-list'           },
    { value: '25+',  label: 'Years of Experience',  icon: 'fa-calendar-check' }
  ];

  // Why choose us — shown in CTA section
  readonly whyChooseUs = [
    {
      icon: 'fa-certificate',
      title: 'Industry-Grade Standards',
      text: 'API, ISO, DIN, ASME, FDA — we supply products certified for your industry\'s requirements.'
    },
    {
      icon: 'fa-headset',
      title: 'Application Engineering',
      text: 'Our team analyses your operating conditions and recommends the optimal sealing solution.'
    },
    {
      icon: 'fa-truck-fast',
      title: 'Reliable Supply Chain',
      text: 'Strong manufacturer relationships ensure stock availability and fast delivery across India.'
    }
  ];

  private observers: IntersectionObserver[] = [];

  constructor(
    private seoService: SeoService,
    private whatsappService: WhatsappService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.seoService.setIndustriesSeo();
    this.industries = [...INDUSTRIES].sort((a, b) => a.sortOrder - b.sortOrder);
    this.totalProductCount = this.productService.getTotalProductCount();
    setTimeout(() => this.heroVisible.set(true), 100);
  }

  ngAfterViewInit(): void {
    this.observeSection('industries-grid',  this.gridVisible);
    this.observeSection('industries-stats', this.statsVisible);
  }

  ngOnDestroy(): void {
    this.observers.forEach(o => o.disconnect());
  }

  private observeSection(
    id: string,
    sig: ReturnType<typeof signal<boolean>>
  ): void {
    const el = document.getElementById(id);
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sig.set(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    this.observers.push(observer);
  }

  openIndustryDetail(industry: Industry): void {
    // Toggle: click same card again to close
    if (this.activeIndustry()?.id === industry.id) {
      this.activeIndustry.set(null);
    } else {
      this.activeIndustry.set(industry);
    }
  }

  closeDetail(): void {
    this.activeIndustry.set(null);
  }

  openWhatsApp(industryName?: string): void {
    if (industryName) {
      const message =
        `Hello Burhani Seal Centre! 👋\n\n` +
        `I am looking for sealing solutions for the *${industryName}*.\n\n` +
        `Please share relevant product recommendations and pricing.\n\n` +
        `Thank you.`;
      this.whatsappService.openProductEnquiry(industryName, message);
    } else {
      this.whatsappService.openGeneralEnquiry();
    }
  }

  trackById(_i: number, item: Industry | { value: string }): string {
    return (item as Industry).id || (item as { value: string }).value;
  }
}
