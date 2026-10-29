// ============================================
// SCROLL REVEAL DIRECTIVE
// ============================================
// <div appReveal>               → fades up when scrolled into view
// <div appReveal="left">        → slides in from the left
// <div appReveal="zoom" [revealDelay]="120">
//
// Variants: up | down | left | right | zoom | blur | fade
// One shared IntersectionObserver watches every element,
// and each element is revealed once, then forgotten.

import {
  DestroyRef,
  Directive,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  input
} from '@angular/core';

export type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'blur' | 'fade';

let observer: IntersectionObserver | null = null;

function sharedObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === 'undefined') return null;
  observer ??= new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer!.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.01, rootMargin: '0px 0px -8% 0px' }
  );
  return observer;
}

@Directive({
  selector: '[appReveal]',
  host: {
    '[attr.data-reveal]': 'variant()',
    '[style.--reveal-delay]': 'revealDelay() + "ms"'
  }
})
export class RevealDirective {
  readonly appReveal = input<RevealVariant | ''>('');
  readonly revealDelay = input<number>(0);

  protected readonly variant = computed(() => this.appReveal() || 'up');

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

    afterNextRender(() => {
      const io = sharedObserver();
      if (!io) {
        el.classList.add('is-revealed');
        return;
      }
      io.observe(el);
    });

    inject(DestroyRef).onDestroy(() => observer?.unobserve(el));
  }
}
