// ============================================
// HOME HERO
// ============================================
// The signature moment: a technical drawing of a real
// 35 × 62 × 7 oil seal that draws itself on load, turns as
// you scroll and tilts with the mouse — next to a live
// product search with suggestions.

import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  NgZone,
  afterNextRender,
  computed,
  inject,
  signal
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { ProductImageComponent } from '../../../shared/components/product-image/product-image';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, ProductImageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  private readonly router = inject(Router);
  private readonly products = inject(ProductService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  protected readonly totalProducts = this.products.getTotalProductCount();
  protected readonly totalCategories = this.products.getTotalCategoryCount();
  protected readonly popular = ['SKF oil seal', 'Viton', 'Coupling spider', 'O-ring kit', 'Hydraulic seal kit'];

  /** Three real product photos that orbit the drawing */
  protected readonly orbit: Product[] = ['skf-oil-seals', 'pu-hydraulic-seal', 'viton-oil-seal']
    .map(slug => this.products.getProductBySlug(slug))
    .filter((p): p is Product => !!p);

  // Dial ticks every 5°, longer every 30°
  protected readonly ticks = Array.from({ length: 72 }, (_, i) => {
    const a = (i * 5 * Math.PI) / 180;
    const long = i % 6 === 0;
    const r1 = long ? 222 : 228;
    return {
      x1: 250 + r1 * Math.cos(a), y1: 250 + r1 * Math.sin(a),
      x2: 250 + 236 * Math.cos(a), y2: 250 + 236 * Math.sin(a),
      long, i
    };
  });

  // ── Search with suggestions ──────────────
  protected readonly query = signal('');
  protected readonly focused = signal(false);
  protected readonly active = signal(-1);
  protected readonly suggestions = computed(() => this.products.suggest(this.query(), 6));
  protected readonly open = computed(() => this.focused() && this.query().trim().length >= 2);

  // ── Open / closed right now (Kolkata time) ──
  protected readonly status = signal(this.computeStatus());

  constructor() {
    const zone = inject(NgZone);
    const doc = inject(DOCUMENT);
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const win = doc.defaultView!;
      const reduce = win.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const finePointer = win.matchMedia('(hover: hover) and (pointer: fine)').matches;
      if (reduce) return;

      zone.runOutsideAngular(() => {
        // Turn the seal as the page scrolls
        let ticking = false;
        const onScroll = () => {
          if (ticking) return;
          ticking = true;
          requestAnimationFrame(() => {
            this.host.style.setProperty('--sy', String(Math.min(win.scrollY, 1200)));
            ticking = false;
          });
        };
        win.addEventListener('scroll', onScroll, { passive: true });

        // Gentle parallax tilt following the mouse
        const onMove = (e: MouseEvent) => {
          const r = this.host.getBoundingClientRect();
          this.host.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
          this.host.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
        };
        if (finePointer) this.host.addEventListener('mousemove', onMove, { passive: true });

        destroyRef.onDestroy(() => {
          win.removeEventListener('scroll', onScroll);
          this.host.removeEventListener('mousemove', onMove);
        });
      });

      // Refresh "open now" every minute
      const t = setInterval(() => this.status.set(this.computeStatus()), 60_000);
      destroyRef.onDestroy(() => clearInterval(t));
    });
  }

  protected onInput(value: string): void {
    this.query.set(value);
    this.active.set(-1);
  }

  protected onKeydown(event: KeyboardEvent): void {
    const list = this.suggestions();
    if (event.key === 'ArrowDown' && list.length) {
      event.preventDefault();
      this.active.set((this.active() + 1) % list.length);
    } else if (event.key === 'ArrowUp' && list.length) {
      event.preventDefault();
      this.active.set(this.active() <= 0 ? list.length - 1 : this.active() - 1);
    } else if (event.key === 'Escape') {
      this.focused.set(false);
    }
  }

  protected submit(): void {
    const pick = this.suggestions()[this.active()];
    if (this.open() && pick) {
      this.router.navigate(['/products', pick.slug]);
      return;
    }
    const q = this.query().trim();
    this.router.navigate(['/products'], { queryParams: q ? { q } : {} });
  }

  protected searchFor(term: string): void {
    this.router.navigate(['/products'], { queryParams: { q: term } });
  }

  protected onBlur(): void {
    // let a click on a suggestion land first
    setTimeout(() => this.focused.set(false), 150);
  }

  /** "Open now · until 6 PM" / "Closed · opens Mon 10 AM" in Kolkata time */
  private computeStatus(): { open: boolean; text: string } {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kolkata', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false
    }).formatToParts(new Date());
    const get = (t: string) => parts.find(p => p.type === t)?.value ?? '';
    const day = get('weekday');               // Mon … Sun
    const mins = Number(get('hour')) * 60 + Number(get('minute'));
    const close = day === 'Sat' ? 17 * 60 : 18 * 60;
    const workday = day !== 'Sun';

    if (workday && mins >= 600 && mins < close) {
      return { open: true, text: `Open now · until ${close === 1020 ? '5' : '6'} PM` };
    }
    const next = !workday || (day === 'Sat' && mins >= close) ? 'Monday' : mins < 600 ? 'today' : 'tomorrow';
    return { open: false, text: `Closed now · opens ${next} 10 AM` };
  }

  protected readonly hoursShort = environment.company.hoursShort;
}
