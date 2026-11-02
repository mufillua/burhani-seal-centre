// ============================================
// SEO SERVICE
// ============================================
// Each page calls seo.set({...}) once. This keeps the
// <title>, meta description, canonical URL, social preview
// tags and JSON-LD structured data in sync with the page.
// Pages are pre-rendered at build time, so all of this is in
// the HTML that Google, Bing and WhatsApp read.

import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { CATEGORIES } from '../data/products.data';

export interface SeoConfig {
  title: string;              // page title (brand is appended)
  description: string;
  path: string;               // '/products/tc-oil-seal'
  image?: string;             // absolute or site-relative
  imageAlt?: string;
  type?: 'website' | 'product' | 'article';
  jsonLd?: object | object[]; // page-specific structured data
  business?: boolean;         // add the business + website details (home, about, contact)
  noindex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);
  private readonly site = environment.seo.siteUrl;
  private readonly brand = environment.company.name;

  set(config: SeoConfig): void {
    // Add the brand when it fits; Google shows only ~60–65 characters and
    // already prints the site name above each result.
    const branded = `${config.title} | ${this.brand}`;
    const fullTitle = config.title.includes(this.brand) || branded.length > 65 ? config.title : branded;
    const url = this.absolute(config.path);
    const image = this.absolute(config.image ?? environment.seo.ogImage);

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'robots', content: config.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' });

    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: config.type === 'product' ? 'product' : 'website' });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:image:alt', content: config.imageAlt ?? fullTitle });

    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setVerification();
    this.setCanonical(url);
    const page = config.jsonLd ? (Array.isArray(config.jsonLd) ? config.jsonLd : [config.jsonLd]) : [];
    this.setJsonLd(config.business ? [this.website(), this.business(), ...page] : page);
  }

  /**
   * A search snippet that ends with a reason to click: the WhatsApp number
   * for a price. Keeps the whole thing within the ~160 characters Google shows.
   */
  snippet(text: string): string {
    const phone = environment.company.phoneDisplay;
    const t = text.trim().replace(/\s+/g, ' ');
    for (const cta of [
      ` In stock in Kolkata — WhatsApp ${phone} for price.`,
      ` WhatsApp ${phone} for price.`,
      ' Price on WhatsApp.'
    ]) {
      if ((t + cta).length <= 160) return t + cta;
    }
    return t.length <= 160 ? t : t.slice(0, 157).replace(/\s+\S*$/, '') + '…';
  }

  /** Breadcrumb structured data helper */
  breadcrumb(items: { name: string; path: string }[]): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: this.absolute(item.path)
      }))
    };
  }

  /** The business, as Google's local results read it (built from environment.ts) */
  business(): object {
    const c = environment.company;
    const sameAs = Object.values(c.social).filter(Boolean);
    const maps = c.social.googleBusiness || `https://www.google.com/maps?q=${c.address.lat},${c.address.lng}`;
    return {
      '@context': 'https://schema.org',
      '@type': 'Store',
      '@id': `${this.site}/#business`,
      name: c.name,
      alternateName: 'B.S.C',
      description: environment.seo.defaultDescription,
      url: `${this.site}/`,
      logo: `${this.site}/assets/icons/icon-512.png`,
      image: this.absolute(environment.seo.ogImage),
      telephone: c.phone,
      email: c.email,
      foundingDate: String(c.founded),
      currenciesAccepted: 'INR',
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${c.address.line1}, ${c.address.line2}`,
        addressLocality: c.address.city,
        addressRegion: c.address.state,
        postalCode: c.address.pincode,
        addressCountry: 'IN'
      },
      geo: { '@type': 'GeoCoordinates', latitude: c.address.lat, longitude: c.address.lng },
      hasMap: maps,
      openingHoursSpecification: c.hoursSchema.map(h => ({
        '@type': 'OpeningHoursSpecification', dayOfWeek: h.days, opens: h.opens, closes: h.closes
      })),
      areaServed: [
        { '@type': 'City', name: 'Kolkata' },
        { '@type': 'State', name: 'West Bengal' },
        { '@type': 'Country', name: 'India' }
      ],
      contactPoint: { '@type': 'ContactPoint', telephone: c.phone, contactType: 'sales', areaServed: 'IN' },
      knowsAbout: CATEGORIES.map(cat => cat.name),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Seals, gaskets and rubber products',
        itemListElement: CATEGORIES.map(cat => ({
          '@type': 'OfferCatalog', name: cat.name, url: this.absolute(`/categories/${cat.id}`)
        }))
      },
      ...(sameAs.length ? { sameAs } : {})
    };
  }

  /** Site name for search results ("Burhani Seal Centre" instead of the bare domain) */
  website(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${this.site}/#website`,
      name: environment.company.name,
      alternateName: ['B.S.C', 'Burhani Seal Centre Kolkata'],
      url: `${this.site}/`,
      inLanguage: 'en-IN',
      publisher: { '@id': `${this.site}/#business` }
    };
  }

  absolute(pathOrUrl: string): string {
    if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
    return `${this.site}/${pathOrUrl.replace(/^\/+/, '')}`.replace(/\/$/, '') || this.site;
  }

  private setVerification(): void {
    const { googleVerification, bingVerification } = environment.seo;
    if (googleVerification) this.meta.updateTag({ name: 'google-site-verification', content: googleVerification });
    if (bingVerification) this.meta.updateTag({ name: 'msvalidate.01', content: bingVerification });
  }

  private setCanonical(url: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.rel = 'canonical';
      this.doc.head.appendChild(link);
    }
    link.href = url;
  }

  private setJsonLd(data: object[]): void {
    this.doc.head.querySelectorAll('script[data-page-jsonld]').forEach(s => s.remove());
    if (!data.length) return;
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page-jsonld', '');
    script.textContent = JSON.stringify(data.length === 1 ? data[0] : data);
    this.doc.head.appendChild(script);
  }
}
