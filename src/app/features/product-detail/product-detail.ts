// ============================================
// PRODUCT DETAIL PAGE COMPONENT
// ============================================
// Displays full product information for a
// single product based on the URL slug.
// URL format: /products/:slug

import {
  Component,
  OnInit,
  OnDestroy,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { SeoService } from '../../services/seo.service';
import { WhatsappService } from '../../services/whatsapp.service';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { Subscription } from 'rxjs';

interface EnquiryForm {
  name: string;
  mobile: string;
  email: string;
  company: string;
  message: string;
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ProductCardComponent],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product      = signal<Product | null>(null);
  relatedProducts: Product[] = [];
  activeTab    = signal<'overview' | 'specs' | 'applications'>('overview');
  isSubmitting = signal(false);
  isSubmitted  = signal(false);
  imageError   = signal(false);

  form: EnquiryForm = {
    name: '', mobile: '', email: '', company: '', message: ''
  };

  private routeSub: Subscription | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private seoService: SeoService,
    private whatsappService: WhatsappService
  ) {}

  ngOnInit(): void {
    // Subscribe to route param changes
    // This fires when user navigates between products
    this.routeSub = this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.loadProduct(slug);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  private loadProduct(slug: string): void {
    const found = this.productService.getProductBySlug(slug);

    if (!found) {
      // Product not found → redirect to products page
      this.router.navigate(['/products']);
      return;
    }

    this.product.set(found);
    this.imageError.set(false);
    this.activeTab.set('overview');

    // Load related products from same category
    this.relatedProducts = this.productService
      .getRelatedProducts(found.id, found.categoryId, 3);

    // Update SEO for this product page
    this.seoService.setProductSeo(
      found.name,
      found.metaDescription || found.shortDescription,
      found.slug
    );

    // Pre-fill the enquiry message
    this.form.message = `I am interested in ${found.name}. Please share product details and pricing.`;
  }

  setTab(tab: 'overview' | 'specs' | 'applications'): void {
    this.activeTab.set(tab);
  }

  openWhatsApp(): void {
    const p = this.product();
    if (!p) return;
    this.whatsappService.openProductEnquiry(p.name, p.whatsappMessage);
  }

  onImageError(): void {
    this.imageError.set(true);
  }

  // Form submission → sends via WhatsApp
  onSubmitEnquiry(): void {
    const p = this.product();
    if (!p || !this.form.name || !this.form.mobile) return;

    this.isSubmitting.set(true);

    // Build WhatsApp message from form data
    const message =
      `Hello Burhani Seal Centre! 👋\n\n` +
      `*Product Enquiry*\n` +
      `Product: *${p.name}*\n\n` +
      `*Contact Details*\n` +
      `Name: ${this.form.name}\n` +
      `Mobile: ${this.form.mobile}\n` +
      `Email: ${this.form.email || 'Not provided'}\n` +
      `Company: ${this.form.company || 'Not provided'}\n\n` +
      `*Message:*\n${this.form.message}\n\n` +
      `Thank you.`;

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.whatsappService.openProductEnquiry(p.name, message);
    }, 600);
  }

  resetForm(): void {
    const p = this.product();
    this.form = {
      name: '', mobile: '', email: '', company: '',
      message: p ? `I am interested in ${p.name}. Please share product details and pricing.` : ''
    };
    this.isSubmitted.set(false);
  }

  trackByLabel(_i: number, item: { label?: string; text?: string }): string {
    return item.label || item.text || '';
  }
}
