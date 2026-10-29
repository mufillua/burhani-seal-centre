// ============================================
// BLUEPRINT BACKDROP
// ============================================
// One fixed layer behind the whole site. Light sections are
// transparent, so they all sit on the same "drafting table":
// a fine engineering grid, two technical drawings (an oil seal
// and a ball bearing) that slowly turn — and turn a little more
// as you scroll — and two soft pools of light that drift.
// Dark sections simply cover it.
//
// Everything animates with transform/opacity only, so it stays
// on the compositor. Reduced-motion visitors get a still image.

import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  NgZone,
  afterNextRender,
  inject
} from '@angular/core';

const ticks = (count: number, inner: number, longInner: number, outer: number, every: number) =>
  Array.from({ length: count }, (_, i) => {
    const a = (i * 2 * Math.PI) / count;
    const long = i % every === 0;
    const r1 = long ? longInner : inner;
    const f = (n: number) => +n.toFixed(2);
    return {
      i, long,
      x1: f(300 + r1 * Math.cos(a)), y1: f(300 + r1 * Math.sin(a)),
      x2: f(300 + outer * Math.cos(a)), y2: f(300 + outer * Math.sin(a))
    };
  });

@Component({
  selector: 'app-backdrop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
  template: `
    <div class="grid"></div>
    <div class="glow glow--gold"></div>
    <div class="glow glow--steel"></div>

    <!-- Oil seal, 35 × 62 × 7 -->
    <div class="piece piece--seal">
      <svg class="spin" viewBox="0 0 600 600" fill="none">
        <g class="ink">
          @for (t of sealTicks; track t.i) {
            <line [attr.x1]="t.x1" [attr.y1]="t.y1" [attr.x2]="t.x2" [attr.y2]="t.y2" [class.long]="t.long" />
          }
          <circle cx="300" cy="300" r="270" />
          <circle cx="300" cy="300" r="256" class="faint" />
          <circle cx="300" cy="300" r="182" />
          <circle cx="300" cy="300" r="152" class="faint" />
          <circle cx="300" cy="300" r="120" class="dashdot" />
          <line x1="300" y1="10" x2="300" y2="590" class="dashdot" />
          <line x1="10" y1="300" x2="590" y2="300" class="dashdot" />
          <line x1="30" y1="300" x2="30" y2="0" class="faint" />
          <line x1="570" y1="300" x2="570" y2="0" class="faint" />
          <line x1="36" y1="14" x2="564" y2="14" />
          <path d="M36 14l12 -4v8z M564 14l-12 -4v8z" class="fill" />
        </g>
        <circle cx="300" cy="300" r="214" class="gold spring" />
        <path d="M300 30 A270 270 0 0 1 570 300" class="gold arc" />
      </svg>
    </div>

    <!-- Deep-groove ball bearing -->
    <div class="piece piece--bearing">
      <svg class="spin spin--rev" viewBox="0 0 600 600" fill="none">
        <g class="ink">
          @for (t of bearingTicks; track t.i) {
            <line [attr.x1]="t.x1" [attr.y1]="t.y1" [attr.x2]="t.x2" [attr.y2]="t.y2" [class.long]="t.long" />
          }
          <circle cx="300" cy="300" r="262" />
          <circle cx="300" cy="300" r="232" class="faint" />
          <circle cx="300" cy="300" r="150" class="faint" />
          <circle cx="300" cy="300" r="122" />
          <circle cx="300" cy="300" r="76" class="dashdot" />
          @for (b of balls; track b.i) {
            <circle [attr.cx]="b.x" [attr.cy]="b.y" r="30" />
          }
          <line x1="300" y1="20" x2="300" y2="580" class="dashdot" />
          <line x1="20" y1="300" x2="580" y2="300" class="dashdot" />
        </g>
        <circle cx="300" cy="300" r="191" class="gold cage" />
      </svg>
    </div>
  `,
  styles: `
    @use 'variables' as *;
    @use 'mixins' as *;

    :host {
      --sy: 0;
      position: fixed;
      inset: 0;
      z-index: -1;
      overflow: hidden;
      pointer-events: none;
      contain: strict;
    }

    // ── Grid: 24px minor, 120px major ──
    .grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba($navy, 0.075) 1px, transparent 1px),
        linear-gradient(90deg, rgba($navy, 0.075) 1px, transparent 1px),
        linear-gradient(rgba($navy, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba($navy, 0.04) 1px, transparent 1px);
      background-size: 120px 120px, 120px 120px, 24px 24px, 24px 24px;
      background-position: -1px -1px;
      mask-image: radial-gradient(ellipse 110% 90% at 50% 45%, #000 35%, rgba(0, 0, 0, 0.45) 100%);
    }

    // ── Drifting light ──
    .glow {
      position: absolute;
      border-radius: 50%;
      will-change: transform;

      &--gold {
        top: -18vh;
        left: -12vw;
        width: 70vw;
        height: 70vw;
        max-width: 900px;
        max-height: 900px;
        background: radial-gradient(circle, rgba($gold, 0.2), rgba($gold, 0.06) 40%, transparent 68%);
        animation: drift-a 26s ease-in-out infinite alternate;
      }

      &--steel {
        right: -16vw;
        bottom: -26vh;
        width: 80vw;
        height: 80vw;
        max-width: 1100px;
        max-height: 1100px;
        background: radial-gradient(circle, rgba(#5b7bb4, 0.22), rgba(#5b7bb4, 0.06) 42%, transparent 68%);
        animation: drift-b 32s ease-in-out infinite alternate;
      }
    }

    @keyframes drift-a {
      to { transform: translate3d(18vw, 22vh, 0) scale(1.15); }
    }
    @keyframes drift-b {
      to { transform: translate3d(-22vw, -16vh, 0) scale(0.9); }
    }

    // ── Technical drawings ──
    .piece {
      position: absolute;
      aspect-ratio: 1;
      will-change: transform;

      svg { display: block; width: 100%; height: 100%; overflow: visible; }

      &--seal {
        top: 8vh;
        right: -14vw;
        width: min(62vw, 760px);
        transform: rotate(calc(var(--sy) * 0.035deg));
      }

      &--bearing {
        bottom: -14vh;
        left: -12vw;
        width: min(46vw, 560px);
        transform: rotate(calc(var(--sy) * -0.05deg));
      }

      @include respond-to('max-tablet') {
        &--seal { width: 118vw; right: -58vw; top: 14vh; }
        &--bearing { width: 92vw; left: -46vw; bottom: -10vh; }
      }
    }

    .spin {
      will-change: transform;
      animation: turn 160s linear infinite;
      &--rev { animation-duration: 200s; animation-direction: reverse; }
    }

    @keyframes turn { to { transform: rotate(360deg); } }

    .ink {
      stroke: rgba($navy, 0.13);
      stroke-width: 1.2;

      .faint { stroke: rgba($navy, 0.08); }
      .dashdot { stroke: rgba($navy, 0.1); stroke-dasharray: 16 6 3 6; }
      line.long { stroke: rgba($navy, 0.19); }
      .fill { fill: rgba($navy, 0.16); stroke: none; }
    }

    .gold { stroke: rgba($gold-dark, 0.26); }
    .spring { stroke-width: 9; stroke-dasharray: 2.5 4; }
    .arc { stroke-width: 2.5; stroke-linecap: round; stroke: rgba($gold, 0.42); }
    .cage { stroke-width: 1.5; stroke-dasharray: 4 6; }

    @media (prefers-reduced-motion: reduce) {
      .glow, .spin { animation: none !important; }
      .piece { transform: none !important; }
    }

    @media print { :host { display: none; } }
  `
})
export class BackdropComponent {
  protected readonly sealTicks = ticks(120, 284, 276, 296, 10);
  protected readonly bearingTicks = ticks(72, 274, 266, 284, 6);
  protected readonly balls = Array.from({ length: 10 }, (_, i) => {
    const a = (i * 2 * Math.PI) / 10;
    return { i, x: +(300 + 191 * Math.cos(a)).toFixed(2), y: +(300 + 191 * Math.sin(a)).toFixed(2) };
  });

  constructor() {
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const zone = inject(NgZone);
    const doc = inject(DOCUMENT);
    const destroyRef = inject(DestroyRef);

    // Turn the drawings a little as the page scrolls
    afterNextRender(() => {
      const win = doc.defaultView!;
      if (win.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      zone.runOutsideAngular(() => {
        let queued = false;
        const update = () => {
          host.style.setProperty('--sy', String(Math.round(win.scrollY)));
          queued = false;
        };
        const onScroll = () => {
          if (queued) return;
          queued = true;
          requestAnimationFrame(update);
        };
        win.addEventListener('scroll', onScroll, { passive: true });
        update();
        destroyRef.onDestroy(() => win.removeEventListener('scroll', onScroll));
      });
    });
  }
}
