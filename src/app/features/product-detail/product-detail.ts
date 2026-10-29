// ============================================
// PRODUCT DETAIL
// ============================================
// Photo, key specs and an enquiry box. Visitors pick a
// quantity, optionally add a note, then send the enquiry
// on WhatsApp or by email — the message is pre-filled with
// the product name, quantity and a link back to this page.

import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  computed,
  effect,
  inject,
  linkedSignal,
  signal,
  viewChild
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { SeoService } from '../../services/seo.service';
import { EnquiryService } from '../../services/enquiry.service';
import { environment } from '../../../environments/environment';
import { ProductImageComponent } from '../../shared/components/product-image/product-image';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { CategoryArtComponent } from '../../shared/components/category-art/category-art';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal.directive';

type Tab = 'overview' | 'specs' | 'applications';

@Component({
  selector: 'app-product-detail',
  imports: [
    RouterLink, ProductImageComponent, ProductCardComponent, CategoryArtComponent,
    SectionHeaderComponent, RevealDirective
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetailComponent {
  private readonly products = inject(ProductService);
  private readonly seo = inject(SeoService);
  protected readonly enquiry = inject(EnquiryService);
  protected readonly company = environment.company;

  private readonly slug = toSignal(inject(ActivatedRoute).paramMap.pipe(map(p => p.get('slug') ?? '')), { initialValue: '' });

  protected readonly product = computed(() => this.products.getProductBySlug(this.slug()));
  protected readonly category = computed(() => this.products.getCategoryById(this.product()?.categoryId));
  protected readonly related = computed(() => {
    const p = this.product();
    return p ? this.products.getRelatedProducts(p, 4) : [];
  });
  protected readonly keySpecs = computed(() => this.product()?.specifications.slice(0, 4) ?? []);
  protected readonly paragraphs = computed(() =>
    (this.product()?.fullDescription ?? '').split(/\n\n+/).map(s => s.trim()).filter(Boolean));

  // ── Enquiry box state (resets when the product changes) ──
  protected readonly quantity = linkedSignal<string, number>({ source: this.slug, computation: () => 10 });
  protected readonly unit = linkedSignal<string, string>({ source: this.slug, computation: () => 'pcs' });
  protected readonly note = linkedSignal<string, string>({ source: this.slug, computation: () => '' });
  protected readonly showNote = linkedSignal<string, boolean>({ source: this.slug, computation: () => false });
  protected readonly tab = linkedSignal<string, Tab>({ source: this.slug, computation: () => 'overview' });

  private readonly details = computed(() => ({
    quantity: this.quantity() > 0 ? `${this.quantity()} ${this.unit()}` : null,
    message: this.note()
  }));
  protected readonly whatsappHref = computed(() => {
    const p = this.product();
    return p ? this.enquiry.productWhatsappHref(p, this.details()) : '';
  });
  protected readonly emailHref = computed(() => {
    const p = this.product();
    return p ? this.enquiry.productEmailHref(p, this.details()) : '';
  });

  // ── Image zoom (desktop, photos only) ────
  protected readonly zoom = signal<{ x: number; y: number } | null>(null);
  private readonly tabsEl = viewChild<ElementRef<HTMLElement>>('tablist');

  protected readonly tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'overview', label: 'Overview', icon: 'fa-regular fa-file-lines' },
    { id: 'specs', label: 'Specifications', icon: 'fa-solid fa-ruler-combined' },
    { id: 'applications', label: 'Applications', icon: 'fa-solid fa-industry' }
  ];

  constructor() {
    // Leave room under the footer for the phone sticky bar
    const body = inject(DOCUMENT).body;
    body.classList.add('has-sticky-bar');
    inject(DestroyRef).onDestroy(() => body.classList.remove('has-sticky-bar'));

    effect(() => {
      const p = this.product();
      const slug = this.slug();
      if (!slug) return;
      if (!p) {
        this.seo.set({
          title: 'Product not found',
          description: 'This product is not in our online catalogue. Browse all products or ask us on WhatsApp.',
          path: `/products/${slug}`,
          noindex: true
        });
        return;
      }
      const brand = p.specifications.find(s => /^brand$/i.test(s.label))?.value;
      this.seo.set({
        title: p.metaTitle?.replace(/\s*\|.*$/, '') || `${p.name} — ${p.categoryName}`,
        description: p.metaDescription || `${p.shortDescription} Enquire on WhatsApp or email — Burhani Seal Centre, Kolkata.`,
        path: `/products/${p.slug}`,
        image: p.imageUrl || undefined,
        type: 'product',
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: p.name,
            sku: p.id,
            description: p.shortDescription,
            category: p.categoryName,
            ...(p.imageUrl ? { image: this.seo.absolute(p.imageUrl) } : {}),
            ...(brand ? { brand: { '@type': 'Brand', name: brand } } : {}),
            additionalProperty: p.specifications.map(s => ({ '@type': 'PropertyValue', name: s.label, value: s.value }))
          },
          this.seo.breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/products' },
            { name: p.categoryName, path: `/products?category=${p.categoryId}` },
            { name: p.name, path: `/products/${p.slug}` }
          ])
        ]
      });
    });
  }

  protected changeQty(delta: number): void {
    this.quantity.update(q => Math.min(99999, Math.max(1, (q || 0) + delta)));
  }

  protected setQty(value: string): void {
    const n = parseInt(value.replace(/\D/g, ''), 10);
    this.quantity.set(Number.isFinite(n) ? Math.min(99999, n) : 0);
  }

  protected selectTab(tab: Tab, focus = false): void {
    this.tab.set(tab);
    if (focus) this.tabsEl()?.nativeElement.querySelector<HTMLElement>(`#tab-${tab}`)?.focus();
  }

  /** Arrow keys move between tabs (WAI-ARIA tabs pattern) */
  protected onTabKey(event: KeyboardEvent): void {
    const ids = this.tabs.map(t => t.id);
    const i = ids.indexOf(this.tab());
    if (event.key === 'ArrowRight') { event.preventDefault(); this.selectTab(ids[(i + 1) % ids.length], true); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); this.selectTab(ids[(i - 1 + ids.length) % ids.length], true); }
  }

  protected onZoomMove(event: MouseEvent): void {
    if (!this.product()?.imageUrl) return;
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.zoom.set({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100
    });
  }
}
