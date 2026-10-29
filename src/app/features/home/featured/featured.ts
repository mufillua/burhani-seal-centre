// ============================================
// FEATURED PRODUCTS CAROUSEL
// ============================================
// Native horizontal scrolling (swipe on phones, trackpad on
// laptops) with arrow buttons and a progress line.

import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  afterNextRender,
  inject,
  signal,
  viewChild
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-featured',
  imports: [RouterLink, ProductCardComponent, SectionHeaderComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="featured">
      <div class="container-custom">
        <div class="featured__head">
          <app-section-header eyebrow="Most enquired" title="Popular" accent="products"
                              subtitle="The parts workshops and plant buyers ask us for most often." />
          <div class="featured__nav" appReveal="fade">
            <button type="button" class="icon-btn" (click)="scrollBy(-1)" [disabled]="atStart()" aria-label="Previous products">
              <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
            </button>
            <button type="button" class="icon-btn" (click)="scrollBy(1)" [disabled]="atEnd()" aria-label="Next products">
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <ul class="track" #track role="list" tabindex="0" aria-label="Popular products — scroll sideways">
        @for (p of items; track p.id; let i = $index) {
          <li class="track__item" appReveal="right" [revealDelay]="i < 4 ? i * 90 : 0">
            <app-product-card [product]="p" />
          </li>
        }
        <li class="track__item track__item--more">
          <a routerLink="/products" class="more-card">
            <span class="more-card__count">{{ total }}</span>
            <span class="more-card__label">products in the full catalogue</span>
            <span class="more-card__cta">Browse all <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
          </a>
        </li>
      </ul>

      <div class="container-custom">
        <div class="progress" aria-hidden="true"><span [style.--p]="progress()"></span></div>
      </div>
    </section>
  `,
  styleUrl: './featured.scss'
})
export class FeaturedComponent {
  private readonly products = inject(ProductService);
  protected readonly items = this.products.getFeaturedProducts(8);
  protected readonly total = this.products.getTotalProductCount();

  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');
  protected readonly progress = signal(0);
  protected readonly atStart = signal(true);
  protected readonly atEnd = signal(false);

  constructor() {
    const zone = inject(NgZone);
    afterNextRender(() => {
      const el = this.track().nativeElement;
      const update = () => {
        const max = el.scrollWidth - el.clientWidth;
        const p = max > 0 ? el.scrollLeft / max : 0;
        zone.run(() => {
          this.progress.set(Math.max(0.12, Math.min(1, p)));
          this.atStart.set(el.scrollLeft < 8);
          this.atEnd.set(el.scrollLeft > max - 8);
        });
      };
      zone.runOutsideAngular(() => el.addEventListener('scroll', update, { passive: true }));
      update();
    });
  }

  protected scrollBy(dir: 1 | -1): void {
    const el = this.track().nativeElement;
    const card = el.querySelector<HTMLElement>('.track__item');
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step * (el.clientWidth > 900 ? 2 : 1), behavior: 'smooth' });
  }
}
