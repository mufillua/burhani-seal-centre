// ============================================
// SECTION HEADER COMPONENT
// ============================================
// Reusable component for consistent section headers.
// Used on every section of every page.
//
// Usage in template:
// <app-section-header
//   label="Our Products"
//   title="Premium Sealing Solutions"
//   subtitle="We supply..."
//   [centered]="true"
//   [light]="false">
// </app-section-header>

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-header-comp"
         [class.section-header-comp--centered]="centered"
         [class.section-header-comp--light]="light">

      <!-- Small uppercase label above title -->
      @if (label) {
        <span class="sh-label">{{ label }}</span>
      }

      <!-- Main heading -->
      <h2 class="sh-title" [innerHTML]="title"></h2>

      <!-- Gold divider line -->
      <div class="sh-divider" [class.sh-divider--centered]="centered"></div>

      <!-- Optional subtitle paragraph -->
      @if (subtitle) {
        <p class="sh-subtitle">{{ subtitle }}</p>
      }

    </div>
  `,
  styles: [`
    @use '../../../../styles/variables' as *;
    @use '../../../../styles/mixins' as *;

    .section-header-comp {
      margin-bottom: $space-8;

      // Centered variant
      &--centered {
        text-align: center;

        .sh-subtitle {
          margin-left: auto;
          margin-right: auto;
        }
      }

      // Light variant (for dark backgrounds)
      &--light {
        .sh-label { color: $gold-light; }
        .sh-title { color: $white; }
        .sh-subtitle { color: rgba($white, 0.7); }
      }
    }

    .sh-label {
      display: block;
      font-family: $font-accent;
      font-size: $text-xs;
      font-weight: $weight-bold;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: $gold;
      margin-bottom: $space-2;
    }

    .sh-title {
      font-family: $font-primary;
      font-size: clamp($text-3xl, 4vw, $text-5xl);
      font-weight: $weight-bold;
      color: $charcoal;
      line-height: 1.15;
      margin: 0 0 $space-3;

      // Allow HTML in title for italic/gold spans
      em {
        font-style: italic;
        @include gold-text;
      }
    }

    .sh-divider {
      width: 60px;
      height: 3px;
      @include gold-gradient;
      border-radius: $radius-full;
      margin-bottom: $space-3;
      transition: width 0.6s ease;

      &--centered {
        margin-left: auto;
        margin-right: auto;
      }
    }

    .sh-subtitle {
      font-family: $font-secondary;
      font-size: $text-lg;
      color: #666;
      line-height: 1.8;
      max-width: 600px;
      margin: 0;
    }
  `]
})
export class SectionHeaderComponent {
  /** Small label above the title — e.g. "Our Products" */
  @Input() label = '';

  /** Main heading — supports HTML like <em> for italic gold text */
  @Input() title = '';

  /** Optional subtitle paragraph */
  @Input() subtitle = '';

  /** Center align everything */
  @Input() centered = false;

  /** Light mode — white text for dark backgrounds */
  @Input() light = false;
}
