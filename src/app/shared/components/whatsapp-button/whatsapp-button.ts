// ============================================
// FLOATING WHATSAPP BUTTON
// ============================================
// Appears after a moment on every page. On product pages
// (phones) it steps aside for the sticky enquiry bar.

import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { EnquiryService } from '../../../services/enquiry.service';

@Component({
  selector: 'app-whatsapp-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'no-print' },
  template: `
    <a class="fab"
       [class.fab--visible]="visible()"
       [class.fab--hide-mobile]="onProductPage()"
       [href]="enquiry.generalWhatsappHref"
       target="_blank" rel="noopener"
       aria-label="Chat with Burhani Seal Centre on WhatsApp">
      <span class="fab__ring" aria-hidden="true"></span>
      <span class="fab__ring fab__ring--late" aria-hidden="true"></span>
      <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
      <span class="fab__label">Chat on WhatsApp</span>
    </a>
  `,
  styleUrl: './whatsapp-button.scss'
})
export class WhatsappButtonComponent {
  protected readonly enquiry = inject(EnquiryService);
  protected readonly visible = signal(false);
  protected readonly onProductPage = signal(false);

  constructor() {
    setTimeout(() => this.visible.set(true), 1200);
    inject(Router).events
      .pipe(filter(e => e instanceof NavigationEnd), takeUntilDestroyed())
      .subscribe(e => this.onProductPage.set(/^\/products\/[^/?#]+/.test((e as NavigationEnd).urlAfterRedirects)));
  }
}
