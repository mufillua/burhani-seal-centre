// ============================================
// SECTION HEADER
// ============================================
// <app-section-header eyebrow="Our range" title="Browse by" accent="category"
//                     subtitle="…" [centered]="true" [light]="false" />
// `accent` is set in gold italics after the title.

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-section-header',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'sh',
    '[class.sh--centered]': 'centered()',
    '[class.sh--light]': 'light()'
  },
  template: `
    @if (eyebrow()) {
      <p class="sh__eyebrow" appReveal="fade">{{ eyebrow() }}</p>
    }
    <h2 class="sh__title" appReveal="up" [revealDelay]="60">
      {{ title() }}@if (accent()) {<em> {{ accent() }}</em>}
    </h2>
    <span class="sh__rule draw-line" appReveal [revealDelay]="200" aria-hidden="true"></span>
    @if (subtitle()) {
      <p class="sh__subtitle" appReveal="up" [revealDelay]="140">{{ subtitle() }}</p>
    }
    <ng-content />
  `,
  styleUrl: './section-header.scss'
})
export class SectionHeaderComponent {
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly accent = input('');
  readonly subtitle = input('');
  readonly centered = input(false);
  readonly light = input(false);
}
