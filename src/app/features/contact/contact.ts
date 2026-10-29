// ============================================
// CONTACT / GET A QUOTE
// ============================================
// One form, two ways to send it: WhatsApp or email.
// Arriving from a product page (?product=slug) pre-selects
// that product. Validation runs when a field loses focus,
// and errors clear as soon as they're fixed.

import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ProductService } from '../../services/product.service';
import { EnquiryService } from '../../services/enquiry.service';
import { SeoService } from '../../services/seo.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { ProductImageComponent } from '../../shared/components/product-image/product-image';
import { RevealDirective } from '../../shared/directives/reveal.directive';

type Field = 'name' | 'mobile' | 'email' | 'company' | 'product' | 'quantity' | 'message';
type Channel = 'whatsapp' | 'email';

const EMPTY: Record<Field, string> = { name: '', mobile: '', email: '', company: '', product: '', quantity: '', message: '' };

@Component({
  selector: 'app-contact',
  imports: [RouterLink, SectionHeaderComponent, ProductImageComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  private readonly products = inject(ProductService);
  protected readonly enquiry = inject(EnquiryService);
  protected readonly company = environment.company;
  protected readonly productNames = this.products.getAllProducts().map(p => p.name);
  protected readonly mapsUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(environment.company.address.full)}`;

  private readonly formEl = viewChild<ElementRef<HTMLFormElement>>('formEl');

  protected readonly form = signal<Record<Field, string>>({ ...EMPTY });
  protected readonly touched = signal<Partial<Record<Field, boolean>>>({});
  protected readonly sent = signal<{ channel: Channel; href: string } | null>(null);
  protected readonly showSummary = signal(false);

  /** Product the visitor came from, if any */
  protected readonly fromProduct = computed(() =>
    this.products.getAllProducts().find(p => p.name === this.form().product));

  protected readonly errors = computed(() => {
    const f = this.form();
    const e: Partial<Record<Field, string>> = {};
    if (f.name.trim().length < 2) e.name = 'Enter your name so we know who to reply to.';
    const digits = f.mobile.replace(/\D/g, '');
    if (!digits) e.mobile = 'Enter a mobile number — we reply on WhatsApp or call.';
    else if (digits.length < 10 || digits.length > 13) e.mobile = 'Mobile numbers have 10 digits, e.g. 98300 12345.';
    if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = 'This email looks incomplete — check for a missing @ or domain.';
    if (!f.product.trim() && !f.message.trim()) e.message = 'Tell us what you need — pick a product above or describe it here.';
    return e;
  });

  protected readonly errorCount = computed(() => Object.keys(this.errors()).length);

  protected readonly faqs = [
    {
      q: 'What is the minimum order quantity?',
      a: 'Most items can be bought in workshop quantities. A few lines, such as coupling spiders, have a minimum of 10 pieces. Ask us for bulk pricing on larger orders.'
    },
    {
      q: 'I only have the old seal — can you match it?',
      a: 'Yes. Send a clear photo and the numbers printed on it (for oil seals that is usually inner × outer × width, e.g. 35×62×7). We will identify the replacement and confirm price and stock.'
    },
    {
      q: 'Can I collect from your shop?',
      a: `Yes — our counter is at ${environment.company.address.line1}, ${environment.company.address.line2}, Kolkata. Call ahead and we will keep your order ready.`
    },
    {
      q: 'Do you give a GST invoice?',
      a: `Yes, every order is billed with a GST invoice (GSTIN ${environment.company.gst}).`
    },
    {
      q: 'How quickly will I get a price?',
      a: 'For stocked items we usually reply with a price the same working day. WhatsApp is the fastest way to reach us.'
    }
  ];
  protected readonly openFaq = signal<number | null>(0);

  constructor() {
    const slug = inject(ActivatedRoute).snapshot.queryParamMap.get('product');
    const product = slug ? this.products.getProductBySlug(slug) : undefined;
    if (product) this.form.update(f => ({ ...f, product: product.name, quantity: '10 pcs' }));

    inject(SeoService).set({
      title: 'Get a quote — contact us',
      description: `Request a quote from Burhani Seal Centre, ${environment.company.address.full}. Call or WhatsApp ${environment.company.phoneDisplay}, or email ${environment.company.email}.`,
      path: '/contact'
    });
  }

  protected update(field: Field, value: string): void {
    this.form.update(f => ({ ...f, [field]: value }));
  }

  protected touch(field: Field): void {
    this.touched.update(t => ({ ...t, [field]: true }));
  }

  protected showError(field: Field): string | null {
    return this.touched()[field] ? this.errors()[field] ?? null : null;
  }

  protected send(channel: Channel): void {
    this.touched.set({ name: true, mobile: true, email: true, message: true });
    if (this.errorCount()) {
      this.showSummary.set(true);
      setTimeout(() => this.formEl()?.nativeElement.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(), 0);
      return;
    }
    this.showSummary.set(false);

    const f = this.form();
    const details = { ...f, quantity: f.quantity || null };
    const href = channel === 'whatsapp' ? this.enquiry.quoteWhatsappHref(details) : this.enquiry.quoteEmailHref(details);

    // Open straight from the click so browsers don't block it
    if (channel === 'whatsapp') window.open(href, '_blank', 'noopener');
    else window.location.href = href;

    this.sent.set({ channel, href });
  }

  protected reset(): void {
    this.form.set({ ...EMPTY });
    this.touched.set({});
    this.sent.set(null);
  }
}
