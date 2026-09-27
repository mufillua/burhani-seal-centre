// ============================================
// SEO SERVICE
// ============================================
// Dynamically updates page title and meta tags
// for every page. This is critical for Google ranking.

import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private readonly seo = environment.seo;
  private readonly company = environment.company;

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  /**
   * Update all SEO tags for a page
   * Call this in ngOnInit() of each page component
   */
  updateSeo(config: {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    url?: string;
  }): void {
    // Set document title
    const fullTitle = `${config.title} | ${this.company.name}`;
    this.title.setTitle(fullTitle);

    // Update meta description
    this.meta.updateTag({
      name: 'description',
      content: config.description
    });

    // Update keywords
    if (config.keywords) {
      this.meta.updateTag({
        name: 'keywords',
        content: config.keywords
      });
    }

    // Update Open Graph tags (social media sharing)
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({
      property: 'og:image',
      content: config.ogImage || this.seo.ogImage
    });
    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }

    // Update Twitter card tags
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
  }

  /** Set SEO for the Home page */
  setHomeSeo(): void {
    this.updateSeo({
      title: 'Industrial Sealing Solutions Kolkata',
      description: `${this.company.name} — Trusted supplier of Mechanical Seals, Gaskets, O Rings, PTFE Products and Industrial Sealing Solutions in Kolkata, West Bengal. Contact us for bulk enquiries.`,
      keywords: this.seo.defaultKeywords,
      url: this.seo.siteUrl
    });
  }

  /** Set SEO for a product page */
  setProductSeo(productName: string, description: string, slug: string): void {
    this.updateSeo({
      title: productName,
      description: description,
      keywords: `${productName.toLowerCase()}, industrial seals, kolkata, burhani seal centre`,
      url: `${this.seo.siteUrl}/products/${slug}`
    });
  }

  /** Set SEO for the Products listing page */
  setProductsSeo(): void {
    this.updateSeo({
      title: 'Products — Mechanical Seals, Gaskets, O Rings',
      description: 'Browse our complete range: Oil Seals, Hydraulic Seals, PU Coupling Spiders, Seal Kits, Pump Seals, O Ring Kits, SKF Ball Bearings and more. Burhani Seal Centre, Kolkata.',
      url: `${this.seo.siteUrl}/products`
    });
  }

  /** Set SEO for the Industries page */
  setIndustriesSeo(): void {
    this.updateSeo({
      title: 'Industries We Serve',
      description: 'Burhani Seal Centre serves Chemical, Pharmaceutical, Food, Oil & Gas, Petrochemical, Water Treatment, Power, Textile, Cement, Steel and Paper industries.',
      url: `${this.seo.siteUrl}/industries`
    });
  }

  /** Set SEO for the About page */
  setAboutSeo(): void {
    this.updateSeo({
      title: 'About Us — Burhani Seal Centre',
      description: `Learn about Burhani Seal Centre, Kolkata's trusted industrial sealing solutions provider. Owner: ${this.company.owner}. Located at ${this.company.address.full}.`,
      url: `${this.seo.siteUrl}/about`
    });
  }

  /** Set SEO for the Contact page */
  setContactSeo(): void {
    this.updateSeo({
      title: 'Contact Us',
      description: `Contact Burhani Seal Centre in Kolkata. Address: ${this.company.address.full}. Phone: ${this.company.whatsappDisplay}. Get a quote for industrial sealing products.`,
      url: `${this.seo.siteUrl}/contact`
    });
  }
}
