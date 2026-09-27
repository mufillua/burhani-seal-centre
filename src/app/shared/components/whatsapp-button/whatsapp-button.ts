// ============================================
// WHATSAPP FLOATING BUTTON COMPONENT
// ============================================
// Fixed-position button always visible in the
// bottom-right corner of every page.
// Pulses gently to attract attention.

import {
  Component,
  signal,
  OnInit,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../../services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="wa-float" [class.wa-float--visible]="isVisible()">

      <!-- Tooltip label -->
      <div class="wa-float__tooltip" role="tooltip" id="wa-tooltip">
        Chat with us!
      </div>

      <!-- Pulse rings -->
      <div class="wa-float__rings" aria-hidden="true">
        <span class="wa-ring wa-ring--1"></span>
        <span class="wa-ring wa-ring--2"></span>
      </div>

      <!-- Main button -->
      <button class="wa-float__btn"
              (click)="openWhatsApp()"
              aria-label="Open WhatsApp chat with Burhani Seal Centre"
              aria-describedby="wa-tooltip">
        <i class="fab fa-whatsapp wa-float__icon" aria-hidden="true"></i>
      </button>

    </div>
  `,
  styles: [`
    @use '../../../../styles/variables' as *;

    .wa-float {
      position: fixed;
      bottom: 32px;
      right: 32px;
      z-index: $z-toast;
      opacity: 0;
      transform: scale(0.5);
      transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      pointer-events: none;

      &--visible {
        opacity: 1;
        transform: scale(1);
        pointer-events: all;
      }

      @media (max-width: 576px) {
        bottom: 20px;
        right: 20px;
      }
    }

    // ── Tooltip ──────────────────────────────────
    .wa-float__tooltip {
      position: absolute;
      right: calc(100% + 12px);
      top: 50%;
      transform: translateY(-50%);
      background: $charcoal;
      color: $white;
      font-family: $font-accent;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.04em;
      white-space: nowrap;
      padding: 8px 14px;
      border-radius: $radius-sm;
      opacity: 0;
      transition: opacity 0.2s ease;
      pointer-events: none;

      // Arrow pointing right
      &::after {
        content: '';
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border: 6px solid transparent;
        border-left-color: $charcoal;
      }
    }

    .wa-float:hover .wa-float__tooltip {
      opacity: 1;
    }

    // ── Pulse rings ───────────────────────────────
    .wa-float__rings {
      position: absolute;
      inset: 0;
      border-radius: 50%;
    }

    .wa-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: rgba($whatsapp-green, 0.3);
      animation: waPulse 2.5s ease-out infinite;

      &--2 {
        animation-delay: 0.8s;
      }
    }

    @keyframes waPulse {
      0%   { transform: scale(1); opacity: 0.6; }
      100% { transform: scale(2); opacity: 0; }
    }

    // ── Main button ───────────────────────────────
    .wa-float__btn {
      position: relative;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: $whatsapp-green;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow:
        0 4px 20px rgba($whatsapp-green, 0.5),
        0 2px 8px rgba(0, 0, 0, 0.2);
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

      &:hover {
        background: $whatsapp-dark;
        transform: scale(1.12) rotate(-5deg);
        box-shadow:
          0 8px 32px rgba($whatsapp-green, 0.6),
          0 4px 16px rgba(0, 0, 0, 0.3);
      }

      &:active {
        transform: scale(0.95);
      }
    }

    .wa-float__icon {
      font-size: 28px;
      color: $white;
    }
  `]
})
export class WhatsappButtonComponent implements OnInit, OnDestroy {

  isVisible = signal(false);
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor(private whatsappService: WhatsappService) {}

  ngOnInit(): void {
    // Show the button after a short delay
    // (prevents it from appearing during page load animation)
    this.timer = setTimeout(() => {
      this.isVisible.set(true);
    }, 1500);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  openWhatsApp(): void {
    this.whatsappService.openGeneralEnquiry();
  }
}
