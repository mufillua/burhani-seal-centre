// ============================================
// COUNT-UP DIRECTIVE
// ============================================
// <span [appCountUp]="44"></span> → counts 0 → 44 when visible.
// The final number is rendered first, so search engines and
// people with reduced motion always see the real value.

import { Directive, ElementRef, NgZone, afterNextRender, inject, input } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  host: { '[textContent]': 'format(appCountUp())' }
})
export class CountUpDirective {
  readonly appCountUp = input.required<number>();
  readonly countDuration = input(1800);

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const zone = inject(NgZone);

    afterNextRender(() => {
      const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      if (reduce || typeof IntersectionObserver === 'undefined') return;

      const target = this.appCountUp();
      el.textContent = this.format(0);

      zone.runOutsideAngular(() => {
        const io = new IntersectionObserver(entries => {
          if (!entries[0].isIntersecting) return;
          io.disconnect();
          const start = performance.now();
          const duration = this.countDuration();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 4); // ease-out quart
            el.textContent = this.format(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }, { threshold: 0.4 });
        io.observe(el);
      });
    });
  }

  protected format(n: number): string {
    return n.toLocaleString('en-IN');
  }
}
