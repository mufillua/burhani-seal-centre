// ============================================
// HERO SECTION COMPONENT
// ============================================

import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  signal
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, sequence, query, stagger } from '@angular/animations';
import { WhatsappService } from '../../../../services/whatsapp.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: [
    // Hero content reveals sequentially
    trigger('heroReveal', [
      transition(':enter', [
        query('.hero__animate', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger('120ms', [
            animate(
              '0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ], { optional: true })
      ])
    ]),
    // Visual slides in from right
    trigger('visualReveal', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(60px)' }),
        animate(
          '1s 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          style({ opacity: 1, transform: 'translateX(0)' })
        )
      ])
    ])
  ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSectionComponent implements OnInit, AfterViewInit, OnDestroy {

  /** Controls whether the component has entered the DOM for animations */
  isVisible = signal(false);

  /** Trust indicators shown below the CTA buttons */
  readonly trustItems = [
    { icon: 'fa-certificate',    label: 'Quality Assured' },
    { icon: 'fa-industry',       label: '11+ Industries'  },
    { icon: 'fa-boxes-stacked',  label: '34+ Products'    }
  ];

  /** Floating info cards around the visual ring */
  readonly floatCards = [
    { icon: 'fa-certificate',   label: 'ISO Compliant',    position: 'top-right'    },
    { icon: 'fa-shield-halved', label: 'Premium Quality',  position: 'middle-left'  },
    { icon: 'fa-truck-fast',    label: 'Fast Delivery',    position: 'bottom-right' }
  ];

  constructor(private whatsappService: WhatsappService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Small delay so animation fires after initial render
    setTimeout(() => this.isVisible.set(true), 100);
  }

  ngOnDestroy(): void {}

  openWhatsApp(): void {
    this.whatsappService.openGeneralEnquiry();
  }

  /** Smooth scroll to the next section */
  scrollToNext(): void {
    const next = document.getElementById('stats-section');
    next?.scrollIntoView({ behavior: 'smooth' });
  }

  trackByLabel(_i: number, item: { label: string }): string {
    return item.label;
  }
}
