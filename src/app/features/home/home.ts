// ============================================
// HOME COMPONENT — Orchestrator
// ============================================
// This component's only job is to:
// 1. Set SEO for the home page
// 2. Import and stack all section components
// It contains NO business logic — sections handle that.

import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { StatsSectionComponent } from './components/stats-section/stats-section';
import { AboutPreviewComponent } from './components/about-preview/about-preview';
import { ProductsPreviewComponent } from './components/products-preview/products-preview';
import { IndustriesPreviewComponent } from './components/industries-preview/industries-preview';
import { CtaSectionComponent } from './components/cta-section/cta-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    StatsSectionComponent,
    AboutPreviewComponent,
    ProductsPreviewComponent,
    IndustriesPreviewComponent,
    CtaSectionComponent
  ],
  template: `
    <div class="home-page">
      <app-hero-section></app-hero-section>
      <app-stats-section></app-stats-section>
      <app-about-preview></app-about-preview>
      <app-products-preview></app-products-preview>
      <app-industries-preview></app-industries-preview>
      <app-cta-section></app-cta-section>
    </div>
  `,
  styles: [`
    .home-page { overflow-x: hidden; }
  `]
})
export class HomeComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    // Set page-specific SEO meta tags
    this.seoService.setHomeSeo();
  }
}
