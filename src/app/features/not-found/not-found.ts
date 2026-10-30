// ============================================
// 404 — page not found
// ============================================

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ProductService } from '../../services/product.service';
import { EnquiryService } from '../../services/enquiry.service';
import { CategoryArtComponent } from '../../shared/components/category-art/category-art';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, CategoryArtComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page-hero nf">
      <div class="container-custom nf__grid">
        <div>
          <p class="nf__code">Error 404</p>
          <h1 class="page-hero__title">This page has <em>slipped its seal</em></h1>
          <p class="page-hero__subtitle">
            The link may be old or mistyped. Search the catalogue or jump to a category below.
          </p>
          <form class="nf__search" role="search" (submit)="$event.preventDefault(); search(q.value)">
            <label for="nf-q" class="visually-hidden">Search products</label>
            <input #q id="nf-q" type="search" placeholder="Search products…" autocomplete="off" />
            <button type="submit" class="btn btn--primary">Search</button>
          </form>
          <div class="nf__links">
            @for (c of categories; track c.id) {
              <a routerLink="/products" [queryParams]="{ category: c.id }">{{ c.name }}</a>
            }
          </div>
          <div class="nf__ctas">
            <a class="btn btn--outline-light" routerLink="/">Go to home page</a>
            <a class="btn btn--whatsapp" [href]="enquiry.generalWhatsappHref" target="_blank" rel="noopener">
              <i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Ask us
            </a>
          </div>
        </div>
        <div class="nf__art" aria-hidden="true"><app-category-art type="oil-seal" /></div>
      </div>
    </section>
  `,
  styles: `
    @use 'variables' as *;
    @use 'mixins' as *;
    .nf { min-height: 80vh; }
    .nf__grid { display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: center;
      @include respond-to('max-tablet') { grid-template-columns: 1fr; } }
    .nf__code { font-family: $font-accent; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: $blue-light; margin-bottom: 14px; font-size: .75rem; }
    .nf__search { display: flex; gap: 10px; max-width: 520px; margin-top: 28px;
      input { flex: 1; min-width: 0; height: 52px; padding: 0 20px; border-radius: $radius-full; border: 1px solid rgba($white, .2);
        background: rgba($white, .08); color: $white; font-size: 16px; outline: none;
        &::placeholder { color: rgba($white, .5); } &:focus { border-color: $blue-light; } } }
    .nf__links { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 22px;
      a { padding: 6px 14px; border-radius: $radius-full; border: 1px solid rgba($white, .14); color: rgba($white, .85); font-size: .8125rem;
        &:hover { border-color: $blue-light; color: $white; } } }
    .nf__ctas { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
    .nf__art { width: 260px; height: 260px; color: rgba($white, .8); --art-accent: #{$blue-light}; animation: spin 40s linear infinite;
      @include respond-to('max-tablet') { display: none; } }
  `
})
export class NotFoundComponent {
  private readonly router = inject(Router);
  protected readonly enquiry = inject(EnquiryService);
  protected readonly categories = inject(ProductService).getAllCategories();

  constructor() {
    inject(SeoService).set({
      title: 'Page not found',
      description: 'The page you were looking for could not be found.',
      path: this.router.url,
      noindex: true
    });
  }

  protected search(q: string): void {
    this.router.navigate(['/products'], { queryParams: q.trim() ? { q: q.trim() } : {} });
  }
}
