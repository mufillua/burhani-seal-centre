// ============================================
// PRODUCT CARD COMPONENT
// ============================================
// Reusable card displayed in the product grid.
// Shows product image, name, description,
// and two action buttons.
//
// Usage:
// <app-product-card [product]="product" />

import {
  Component,
  Input,
  signal,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../../models/product.model';
import { WhatsappService } from '../../../services/whatsapp.service';
import { cardHover } from '../../../animations/app.animations';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: [cardHover],

  // OnPush means Angular only re-renders this component
  // when its @Input() changes — much better performance
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  /** Track hover state for card animation */
  isHovered = signal(false);

  /** Track if image failed to load */
  imageError = signal(false);

  constructor(private whatsappService: WhatsappService) {}

  onMouseEnter(): void { this.isHovered.set(true); }
  onMouseLeave(): void { this.isHovered.set(false); }

  onImageError(): void { this.imageError.set(true); }

  onWhatsAppClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.whatsappService.openProductEnquiry(
      this.product.name,
      this.product.whatsappMessage
    );
  }
}
