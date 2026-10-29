// ============================================
// ENQUIRY SERVICE — WhatsApp, email and phone
// ============================================
// Builds ready-to-send links. Components render them as
// normal <a href> links, which:
//  • open the WhatsApp app on phones and WhatsApp Web on desktop
//  • are never blocked as pop-ups (unlike window.open after a delay)
//  • work with keyboard, long-press and "open in new tab"

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Product } from '../models/product.model';

export interface EnquiryDetails {
  name?: string;
  mobile?: string;
  email?: string;
  company?: string;
  product?: string;
  quantity?: string | number | null;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export class EnquiryService {

  private readonly company = environment.company;
  private readonly waNumber = environment.company.whatsapp.replace(/\D/g, '');
  private readonly site = environment.seo.siteUrl;

  readonly email = environment.company.email;
  readonly phoneDisplay = environment.company.phoneDisplay;
  readonly telHref = `tel:${environment.company.phone}`;

  // ── Low level ────────────────────────────

  whatsappHref(message: string): string {
    return `https://wa.me/${this.waNumber}?text=${encodeURIComponent(message)}`;
  }

  emailHref(subject: string, body: string): string {
    return `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  // ── General enquiry (floating button, navbar, footer) ──

  readonly generalWhatsappHref = this.whatsappHref(
    `Hello ${this.company.name},\n\nI would like to know more about your products. Please get in touch.\n\nThank you.`
  );

  readonly generalEmailHref = this.emailHref(
    `Enquiry — ${this.company.name}`,
    `Hello ${this.company.name},\n\nI would like to know more about your products.\n\nName:\nCompany:\nPhone:\n\nThank you.`
  );

  // ── Product enquiry ──────────────────────

  productWhatsappHref(product: Product, details: EnquiryDetails = {}): string {
    return this.whatsappHref(this.productMessage(product, details, true));
  }

  productEmailHref(product: Product, details: EnquiryDetails = {}): string {
    return this.emailHref(
      `Enquiry: ${product.name}`,
      this.productMessage(product, details, false)
    );
  }

  private productMessage(product: Product, d: EnquiryDetails, whatsapp: boolean): string {
    const bold = (t: string) => (whatsapp ? `*${t}*` : t);
    const lines = [
      `Hello ${this.company.name},`,
      '',
      `I am interested in: ${bold(product.name)}`,
      `Category: ${product.categoryName}`
    ];
    if (d.quantity) lines.push(`Quantity required: ${d.quantity}`);
    if (d.message?.trim()) lines.push('', d.message.trim());
    lines.push(
      '',
      'Please share the price, availability and specifications.',
      '',
      `Product page: ${this.site}/products/${product.slug}`
    );
    this.appendContact(lines, d);
    lines.push('', 'Thank you.');
    return lines.join('\n');
  }

  // ── Quote form (contact page) ────────────

  quoteWhatsappHref(d: EnquiryDetails): string {
    return this.whatsappHref(this.quoteMessage(d, true));
  }

  quoteEmailHref(d: EnquiryDetails): string {
    const subject = d.product ? `Quote request: ${d.product}` : `Quote request — ${d.name || 'website enquiry'}`;
    return this.emailHref(subject, this.quoteMessage(d, false));
  }

  private quoteMessage(d: EnquiryDetails, whatsapp: boolean): string {
    const bold = (t: string) => (whatsapp ? `*${t}*` : t);
    const lines = [`Hello ${this.company.name},`, '', bold('Request for quotation')];
    if (d.product) lines.push(`Product: ${d.product}`);
    if (d.quantity) lines.push(`Quantity: ${d.quantity}`);
    if (d.message?.trim()) lines.push('', d.message.trim());
    this.appendContact(lines, d);
    lines.push('', 'Thank you.');
    return lines.join('\n');
  }

  private appendContact(lines: string[], d: EnquiryDetails): void {
    const contact = [
      d.name && `Name: ${d.name}`,
      d.company && `Company: ${d.company}`,
      d.mobile && `Mobile: ${d.mobile}`,
      d.email && `Email: ${d.email}`
    ].filter(Boolean) as string[];
    if (contact.length) lines.push('', ...contact);
  }
}
