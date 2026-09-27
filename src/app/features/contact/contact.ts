// ============================================
// CONTACT PAGE COMPONENT
// ============================================
// Full contact page with:
//   - Hero section
//   - Contact form (submits via WhatsApp)
//   - Company info cards
//   - Google Maps embed placeholder
//   - FAQ section

import {
  Component,
  OnInit,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../services/seo.service';
import { WhatsappService } from '../../services/whatsapp.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { environment } from '../../../environments/environments';

interface ContactForm {
  name:    string;
  mobile:  string;
  email:   string;
  company: string;
  subject: string;
  message: string;
}

interface FaqItem {
  question: string;
  answer:   string;
  open:     boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, SectionHeaderComponent],
  templateUrl: './contact.html',
  styleUrl:    './contact.scss'
})
export class ContactComponent implements OnInit {

  readonly company  = environment.company;

  // ── Form state ─────────────────────────────
  isSubmitting = signal(false);
  isSubmitted  = signal(false);
  formError    = signal('');

  form: ContactForm = {
    name:    '',
    mobile:  '',
    email:   '',
    company: '',
    subject: '',
    message: ''
  };

  // ── Subject options ────────────────────────
  readonly subjectOptions = [
    'General Enquiry',
    'Product Quotation',
    'Bulk Order',
    'Technical Support',
    'Custom Product Request',
    'Other'
  ];

  // ── Contact info cards ─────────────────────
  readonly contactCards = [
    {
      icon:    'fa-location-dot',
      title:   'Visit Us',
      lines:   [
        this.company.address.line1 + ',',
        this.company.address.line2 + ',',
        this.company.address.city + ' – ' + this.company.address.pincode + ',',
        this.company.address.state + ', ' + this.company.address.country
      ],
      action:  {
        label: 'Get Directions',
        url:   `https://maps.google.com/?q=${encodeURIComponent(this.company.address.full)}`,
        icon:  'fa-map'
      },
      color:   'gold'
    },
    {
      icon:    'fab fa-whatsapp',
      title:   'WhatsApp / Call',
      lines:   [
        this.company.whatsappDisplay,
        'Mon–Sat: 9:00 AM – 6:00 PM',
        'Fastest way to reach us'
      ],
      action:  null,
      color:   'green'
    },
    {
      icon:    'fa-envelope',
      title:   'Email Us',
      lines:   [
        this.company.email,
        'Response within 24 hours',
        'For detailed enquiries'
      ],
      action:  {
        label: 'Send Email',
        url:   `mailto:${this.company.email}`,
        icon:  'fa-paper-plane'
      },
      color:   'gold'
    },
    {
      icon:    'fa-clock',
      title:   'Business Hours',
      lines:   [
        'Monday – Friday: 9:00 AM – 6:00 PM',
        'Saturday: 9:00 AM – 5:00 PM',
        'Sunday: Closed'
      ],
      action:  null,
      color:   'gold'
    }
  ];

  // ── FAQ items ──────────────────────────────
  faqItems: FaqItem[] = [
    {
      question: 'What is the minimum order quantity?',
      answer:   'We cater to both small and large orders. There is no strict minimum for standard products. For custom products or bulk orders, please contact us for terms.',
      open:     false
    },
    {
      question: 'Do you supply products across India?',
      answer:   'Yes, we supply our products across India. We work with reliable logistics partners to ensure safe and timely delivery to your location.',
      open:     false
    },
    {
      question: 'Can you supply custom-size seals or gaskets?',
      answer:   'Absolutely. We specialise in custom-sized and special-profile products. Share your drawing or specifications with us and we will arrange manufacture through our network.',
      open:     false
    },
    {
      question: 'Do your products come with quality certifications?',
      answer:   'Yes. We supply products from certified manufacturers and can provide material test certificates, inspection certificates, and other quality documentation upon request.',
      open:     false
    },
    {
      question: 'How quickly can I get a price quotation?',
      answer:   'For standard products, we typically provide pricing within the same business day. For custom or imported products, it may take 24–48 hours. WhatsApp is the fastest way to get a quote.',
      open:     false
    },
    {
      question: 'Do you offer technical support for product selection?',
      answer:   'Yes. Our team has decades of application experience. Share your operating conditions — media, temperature, pressure, speed — and we will recommend the most suitable product.',
      open:     false
    }
  ];

  constructor(
    private seoService:      SeoService,
    private whatsappService: WhatsappService
  ) {}

  ngOnInit(): void {
    this.seoService.setContactSeo();
  }

  // ── Form submit ─────────────────────────────
  onSubmit(): void {
    if (!this.form.name || !this.form.mobile || !this.form.message) {
      this.formError.set('Please fill in all required fields.');
      return;
    }

    this.formError.set('');
    this.isSubmitting.set(true);

    // Build the WhatsApp message from form data
    const waMsg =
      `Hello Burhani Seal Centre! 👋\n\n` +
      `*New Contact Form Enquiry*\n\n` +
      `*Name:* ${this.form.name}\n` +
      `*Mobile:* ${this.form.mobile}\n` +
      `*Email:* ${this.form.email   || 'Not provided'}\n` +
      `*Company:* ${this.form.company || 'Not provided'}\n` +
      `*Subject:* ${this.form.subject || 'General Enquiry'}\n\n` +
      `*Message:*\n${this.form.message}\n\n` +
      `Thank you.`;

    // Simulate brief processing, then open WhatsApp
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.whatsappService.openContactMessage(
        this.form.name,
        this.form.company,
        waMsg
      );
    }, 700);
  }

  resetForm(): void {
    this.form = {
      name: '', mobile: '', email: '',
      company: '', subject: '', message: ''
    };
    this.isSubmitted.set(false);
    this.formError.set('');
  }

  openWhatsApp(): void {
    this.whatsappService.openGeneralEnquiry();
  }

  toggleFaq(index: number): void {
    this.faqItems = this.faqItems.map((item, i) => ({
      ...item,
      open: i === index ? !item.open : false
    }));
  }

  trackByQuestion(_i: number, item: FaqItem): string { return item.question; }
  trackByTitle(_i: number, item: { title: string }): string { return item.title; }
}
