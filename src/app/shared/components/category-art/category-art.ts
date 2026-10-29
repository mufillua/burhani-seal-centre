// ============================================
// CATEGORY ART — line illustrations per category
// ============================================
// Drawn in SVG so they stay crisp at any size and take
// their colour from CSS (`color` = lines, `--art-accent` =
// highlight). Used on category cards, the mega-menu and as
// the stand-in image for products that don't have a photo yet.

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CategoryArt } from '../../../models/category.model';

@Component({
  selector: 'app-category-art',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true', class: 'category-art' },
  template: `
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      @switch (type()) {
        @case ('oil-seal') {
          <circle cx="60" cy="60" r="48" />
          <circle cx="60" cy="60" r="43" stroke-opacity=".45" />
          <circle cx="60" cy="60" r="35" class="accent" stroke-width="4" stroke-dasharray="2.5 3.2" />
          <circle cx="60" cy="60" r="27" />
          <path d="M60 33 a27 27 0 0 1 27 27" class="accent" stroke-width="3" />
          <circle cx="60" cy="60" r="16" stroke-opacity=".35" stroke-dasharray="1 5" />
        }
        @case ('hydraulic') {
          <rect x="10" y="40" width="64" height="40" rx="7" />
          <line x1="22" y1="40" x2="22" y2="80" stroke-opacity=".45" />
          <rect x="40" y="46" width="8" height="28" rx="2" stroke-opacity=".7" />
          <rect x="74" y="53" width="38" height="14" rx="3" />
          <path d="M70 48 v24" class="accent" stroke-width="5" />
          <path d="M48 52 v16" class="accent" stroke-width="4" />
          <path d="M16 34 h12 M30 86 h14" stroke-opacity=".4" />
        }
        @case ('kit') {
          <path d="M14 46 L60 28 L106 46 L60 64 Z" stroke-opacity=".6" />
          <path d="M14 46 V84 L60 102 L106 84 V46" />
          <path d="M60 64 V102" stroke-opacity=".45" />
          <ellipse cx="38" cy="72" rx="13" ry="9" class="accent" stroke-width="3" />
          <ellipse cx="82" cy="72" rx="10" ry="7" stroke-width="3" />
          <ellipse cx="81" cy="88" rx="6" ry="4" class="accent" />
        }
        @case ('pump') {
          <line x1="6" y1="60" x2="114" y2="60" stroke-opacity=".35" stroke-dasharray="4 4" />
          <rect x="16" y="30" width="14" height="60" rx="3" />
          <rect x="90" y="34" width="12" height="52" rx="3" />
          <path d="M30 60 l5 -18 l7 36 l7 -36 l7 36 l7 -36 l7 36 l7 -36 l6 18" class="accent" stroke-width="2.5" />
          <path d="M84 40 v40" stroke-opacity=".6" />
        }
        @case ('o-ring') {
          <circle cx="50" cy="56" r="34" stroke-width="7" />
          <circle cx="50" cy="56" r="34" stroke-width="2" stroke="var(--art-bg, #fff)" stroke-opacity=".35" />
          <circle cx="88" cy="82" r="20" class="accent" stroke-width="6" />
          <circle cx="92" cy="34" r="10" stroke-width="4" stroke-opacity=".7" />
        }
        @case ('coupling') {
          <path d="M60 14 C68 14 70 30 76 33 C82 36 96 28 101 35 C106 42 93 52 93 60 C93 68 106 78 101 85 C96 92 82 84 76 87 C70 90 68 106 60 106 C52 106 50 90 44 87 C38 84 24 92 19 85 C14 78 27 68 27 60 C27 52 14 42 19 35 C24 28 38 36 44 33 C50 30 52 14 60 14 Z" />
          <circle cx="60" cy="60" r="18" class="accent" stroke-width="3" />
          <circle cx="60" cy="60" r="9" stroke-opacity=".5" />
        }
        @case ('sheet') {
          <path d="M14 30 H82 V96 H14 Z" stroke-opacity=".5" />
          <path d="M24 22 H92 V88 H24 Z" />
          <path d="M92 22 c10 0 14 8 14 16 s-6 12 -11 12 s-8 -4 -8 -8 s3 -6 5 -6" class="accent" stroke-width="2.5" />
          <path d="M34 40 H78 M34 52 H70 M34 64 H74" stroke-opacity=".35" />
          <path d="M8 108 C30 96 46 116 66 104 S100 98 112 106" class="accent" stroke-width="4" />
        }
        @default {
          <circle cx="60" cy="60" r="48" />
          <circle cx="60" cy="60" r="20" />
          <circle cx="60" cy="60" r="12" stroke-opacity=".45" />
          <circle cx="60" cy="60" r="34" stroke-opacity=".3" stroke-dasharray="2 4" />
          @for (a of balls; track a) {
            <circle [attr.cx]="60 + 34 * cos(a)" [attr.cy]="60 + 34 * sin(a)" r="7.5" class="accent" stroke-width="2.5" />
          }
        }
      }
    </svg>
  `,
  styles: `
    :host { display: block; color: inherit; line-height: 0; }
    svg { width: 100%; height: 100%; overflow: visible; }
    .accent { stroke: var(--art-accent, #C9A84C); }
  `
})
export class CategoryArtComponent {
  readonly type = input<CategoryArt | undefined>('oil-seal');

  protected readonly balls = [0, 45, 90, 135, 180, 225, 270, 315].map(d => (d * Math.PI) / 180);
  protected cos = Math.cos;
  protected sin = Math.sin;
}
