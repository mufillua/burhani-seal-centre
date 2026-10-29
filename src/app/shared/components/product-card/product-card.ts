// ============================================
// PRODUCT CARD
// ============================================
// The whole card links to the product page. WhatsApp and
// email buttons sit on top and send a pre-filled enquiry
// for this exact product.

import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../models/product.model';
import { EnquiryService } from '../../../services/enquiry.service';
import { ProductImageComponent } from '../product-image/product-image';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, ProductImageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCardComponent {
  readonly product = input.required<Product>();
  /** Load the image immediately (first row of a grid) */
  readonly priority = input(false);
  /** Heading level for the product name — keeps the outline valid */
  readonly headingLevel = input<2 | 3>(3);

  private readonly enquiry = inject(EnquiryService);

  protected readonly whatsappHref = computed(() => this.enquiry.productWhatsappHref(this.product()));
  protected readonly emailHref = computed(() => this.enquiry.productEmailHref(this.product()));
  protected readonly keySpec = computed(() => {
    const specs = this.product().specifications;
    return specs.find(s => /size|diameter|bore|thickness|brand/i.test(s.label)) ?? specs[0];
  });
}
