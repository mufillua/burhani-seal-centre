// ============================================
// ABOUT PAGE COMPONENT
// ============================================
// Full company story, owner profile, values,
// timeline, and team section.

import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChildren,
  QueryList,
  ElementRef,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { WhatsappService } from '../../services/whatsapp.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { environment } from '../../../environments/environments';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  side: 'left' | 'right';
}

interface ValueCard {
  icon: string;
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren('revealEl') revealElements!: QueryList<ElementRef>;

  readonly company = environment.company;
  private observers: IntersectionObserver[] = [];

  // Track visibility of each animated section
  heroVisible    = signal(false);
  storyVisible   = signal(false);
  valuesVisible  = signal(false);
  timelineVisible = signal(false);
  teamVisible    = signal(false);
  ctaVisible     = signal(false);

  readonly values: ValueCard[] = [
    {
      icon: 'fa-gem',
      title: 'Premium Quality',
      description: 'Every product we supply undergoes strict quality verification. We partner only with manufacturers who meet international standards — DIN, ISO, API, and ASME.',
      color: '#C9A84C'
    },
    {
      icon: 'fa-handshake',
      title: 'Customer Trust',
      description: 'Relationships built on honesty and reliability. Our clients trust us to recommend the right product for their application — not the most expensive one.',
      color: '#C9A84C'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Technical Expertise',
      description: 'Decades of hands-on experience across 11 industries means we understand your sealing challenges — and can recommend solutions that work.',
      color: '#C9A84C'
    },
    {
      icon: 'fa-truck-fast',
      title: 'Reliable Delivery',
      description: 'Strong supplier relationships and strategic stocking ensure we can fulfil orders quickly, minimising your plant downtime and procurement lead times.',
      color: '#C9A84C'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Integrity First',
      description: 'No shortcuts. No counterfeit products. We supply only genuine, traceable materials with full documentation and certifications when required.',
      color: '#C9A84C'
    },
    {
      icon: 'fa-chart-line',
      title: 'Continuous Growth',
      description: 'We continuously expand our product range and technical knowledge to serve new industries and meet evolving customer requirements.',
      color: '#C9A84C'
    }
  ];

  readonly timeline: TimelineEvent[] = [
    {
      year: 'Establishment',
      title: 'Burhani Seal Centre Founded',
      description: 'Qutubuddin Palanpurwala established Burhani Seal Centre at the heart of Kolkata\'s industrial hub in Burra Bazar, Strand Road — starting with a focused range of mechanical seals and gaskets.',
      icon: 'fa-flag',
      side: 'left'
    },
    {
      year: 'Expansion',
      title: 'Product Range Expanded',
      description: 'Responding to customer demand, we expanded into O Rings, PTFE Products, Packing Materials, and Oil Seals — becoming a comprehensive one-stop sealing solutions provider.',
      icon: 'fa-boxes-stacked',
      side: 'right'
    },
    {
      year: 'Industry Growth',
      title: 'Cross-Industry Penetration',
      description: 'Built strong supply relationships with Chemical, Pharmaceutical, Oil & Gas, Power Plant, and Textile industries across West Bengal and beyond.',
      icon: 'fa-industry',
      side: 'left'
    },
    {
      year: 'Portfolio',
      title: '11 Product Categories',
      description: 'Added Rubber Products, Expansion Joints, Industrial Hoses, Engineering Plastics, and Industrial Insulation Materials, reaching 34+ product lines.',
      icon: 'fa-chart-line',
      side: 'right'
    },
    {
      year: 'Today',
      title: 'Trusted Industrial Partner',
      description: 'Today, Burhani Seal Centre serves 500+ clients across 11 industrial sectors, supplying quality-assured sealing solutions with expert technical support and reliable delivery.',
      icon: 'fa-star',
      side: 'left'
    }
  ];

  readonly stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '34+', label: 'Product Lines'    },
    { value: '11',  label: 'Industries'       },
    { value: '500+',label: 'Happy Clients'    }
  ];

  constructor(
    private seoService: SeoService,
    private whatsappService: WhatsappService
  ) {}

  ngOnInit(): void {
    this.seoService.setAboutSeo();
    setTimeout(() => this.heroVisible.set(true), 100);
  }

  ngAfterViewInit(): void {
    this.setupScrollReveal();
  }

  ngOnDestroy(): void {
    this.observers.forEach(o => o.disconnect());
  }

  private setupScrollReveal(): void {
    // We observe named section IDs to trigger animations
    const sections: Array<{ id: string; signal: ReturnType<typeof signal<boolean>> }> = [
      { id: 'about-story',    signal: this.storyVisible    },
      { id: 'about-values',   signal: this.valuesVisible   },
      { id: 'about-timeline', signal: this.timelineVisible },
      { id: 'about-team',     signal: this.teamVisible     },
      { id: 'about-cta',      signal: this.ctaVisible      }
    ];

    sections.forEach(({ id, signal: sig }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            sig.set(true);
            observer.disconnect();
          }
        },
        { threshold: 0.12 }
      );

      observer.observe(el);
      this.observers.push(observer);
    });
  }

  openWhatsApp(): void {
    this.whatsappService.openGeneralEnquiry();
  }

  trackByTitle(_i: number, item: { title: string }): string { return item.title; }
  trackByYear(_i: number, item: TimelineEvent): string { return item.year; }
  trackByValue(_i: number, item: { value: string }): string { return item.value; }
}
