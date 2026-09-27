// ============================================
// CTA SECTION COMPONENT
// ============================================
// Full-width call-to-action banner at the
// bottom of the homepage.

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../../../services/whatsapp.service';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="cta" aria-label="Call to action">

      <!-- Background -->
      <div class="cta__bg" aria-hidden="true">
        <div class="cta__gradient"></div>
        <div class="cta__pattern"></div>
        <div class="cta__glow"></div>
      </div>

      <div class="container-custom cta__container">

        <!-- Left: text content -->
        <div class="cta__content">

          <!-- Gold badge -->
          <div class="cta__badge">
            <i class="fa fa-bolt" aria-hidden="true"></i>
            <span>Ready to Source?</span>
          </div>

          <h2 class="cta__title">
            Need Quality Sealing Solutions<br>
            <span class="cta__title-gold">At Competitive Prices?</span>
          </h2>

          <p class="cta__subtitle">
            Speak directly with our sealing experts. We help you identify the right product for your exact application, operating conditions, and budget — fast.
          </p>

          <!-- Trust chips -->
          <div class="cta__chips">
            <div class="cta__chip">
              <i class="fa fa-check" aria-hidden="true"></i>
              Same-Day Response
            </div>
            <div class="cta__chip">
              <i class="fa fa-check" aria-hidden="true"></i>
              Competitive Pricing
            </div>
            <div class="cta__chip">
              <i class="fa fa-check" aria-hidden="true"></i>
              Expert Guidance
            </div>
          </div>

        </div>

        <!-- Right: action buttons -->
        <div class="cta__actions">

          <button class="cta__btn cta__btn--whatsapp" (click)="openWhatsApp()">
            <div class="cta__btn-icon" aria-hidden="true">
              <i class="fab fa-whatsapp"></i>
            </div>
            <div class="cta__btn-text">
              <span class="cta__btn-label">Instant Response</span>
              <span class="cta__btn-main">Chat on WhatsApp</span>
            </div>
          </button>

          <a routerLink="/contact" class="cta__btn cta__btn--quote">
            <div class="cta__btn-icon" aria-hidden="true">
              <i class="fa fa-file-invoice"></i>
            </div>
            <div class="cta__btn-text">
              <span class="cta__btn-label">Free Consultation</span>
              <span class="cta__btn-main">Get a Quote</span>
            </div>
          </a>

          <a routerLink="/products" class="cta__btn cta__btn--catalog">
            <div class="cta__btn-icon" aria-hidden="true">
              <i class="fa fa-book-open"></i>
            </div>
            <div class="cta__btn-text">
              <span class="cta__btn-label">Browse 34+ Lines</span>
              <span class="cta__btn-main">View Catalog</span>
            </div>
          </a>

        </div>

      </div>

    </section>
  `,
  styleUrls: ['./cta-section.scss']
})
export class CtaSectionComponent {

  constructor(private whatsappService: WhatsappService) {}

  openWhatsApp(): void {
    this.whatsappService.openGeneralEnquiry();
  }
}
