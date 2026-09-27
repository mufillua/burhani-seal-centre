// ============================================
// WHATSAPP SERVICE
// ============================================
// Centralises all WhatsApp-related logic.
// Components call this service — they never
// build URLs themselves.

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
  // providedIn: 'root' means Angular creates ONE instance
  // and shares it with every component that needs it.
  // This is called a Singleton pattern.
})
export class WhatsappService {

  private readonly phoneNumber = environment.company.whatsapp.replace(/\D/g, '');
  // Remove all non-digit characters from phone number
  // +917679679044 → 917679679044

  /**
   * Opens WhatsApp with a pre-filled product enquiry message
   * @param productName - The name of the product
   * @param customMessage - Optional custom message (uses default if not provided)
   */
  openProductEnquiry(productName: string, customMessage?: string): void {
    const message = customMessage || this.buildProductMessage(productName);
    this.openWhatsApp(message);
  }

  /**
   * Opens WhatsApp with a general enquiry message
   */
  openGeneralEnquiry(): void {
    const message = `Hello Burhani Seal Centre! 👋\n\nI would like to enquire about your products and services.\n\nPlease get in touch with me.\n\nThank you.`;
    this.openWhatsApp(message);
  }

  /**
   * Opens WhatsApp with a contact form submission message
   */
  openContactMessage(name: string, company: string, message: string): void {
    const waMessage = `Hello Burhani Seal Centre! 👋\n\n*Name:* ${name}\n*Company:* ${company}\n\n*Message:*\n${message}\n\nThank you.`;
    this.openWhatsApp(waMessage);
  }

  /**
   * Generates the WhatsApp web URL
   * Works on both mobile (opens app) and desktop (opens web)
   */
  private openWhatsApp(message: string): void {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }

  /**
   * Builds the standard product enquiry message
   */
  private buildProductMessage(productName: string): string {
    return `Hello Burhani Seal Centre! 👋\n\nI am interested in: *${productName}*\n\nPlease share:\n• Product details\n• Specifications\n• Pricing & availability\n\nThank you.`;
  }

  /**
   * Returns the WhatsApp URL for use in href attributes
   * (for cases where we want a direct link, not onclick)
   */
  getWhatsAppUrl(message: string): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }

  /**
   * Returns the display phone number
   */
  getDisplayNumber(): string {
    return environment.company.whatsappDisplay;
  }
}
