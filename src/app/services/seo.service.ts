// ============================================
// SEO SERVICE
// ============================================
// Each page calls seo.set({...}) once. This keeps the
// <title>, meta description, canonical URL, social preview
// tags and JSON-LD structured data in sync with the page.

import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

export interface SeoConfig {
  title: string;              // page title (brand is appended)
  description: string;
  path: string;               // '/products/skf-oil-seals'
  image?: string;             // absolute or site-relative
  type?: 'website' | 'product' | 'article';
  jsonLd?: object | object[]; // page-specific structured data
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
    const fullTitle = config.title.includes(this.brand) ? config.title : `${config.title} | ${this.brand}`;
    const url = this.absolute(config.path);
    const image = this.absolute(config.image ?? environment.seo.ogImage);

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'robots', content: config.noindex ? 'noindex, follow' : 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: config.type === 'product' ? 'product' : 'website' });
    this.meta.updateTag({ property: 'og:image', content: image });

    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonical(url);
    this.setJsonLd(config.jsonLd);
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

  absolute(pathOrUrl: string): string {
    if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
    return `${this.site}/${pathOrUrl.replace(/^\/+/, '')}`.replace(/\/$/, '') || this.site;
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

  private setJsonLd(data?: object | object[]): void {
    this.doc.head.querySelectorAll('script[data-page-jsonld]').forEach(s => s.remove());
    if (!data) return;
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page-jsonld', '');
    script.textContent = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}
