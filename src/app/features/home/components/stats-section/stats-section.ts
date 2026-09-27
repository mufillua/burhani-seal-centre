// ============================================
// STATS SECTION COMPONENT
// ============================================
// Shows 4 animated counters that count up
// from 0 when the section enters the viewport.
//
// KEY TECHNOLOGY: IntersectionObserver
// The browser watches when this section
// becomes visible (enters the viewport).
// When it does, the animation triggers.

import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatItem {
  target: number;     // Final value to count to
  current: ReturnType<typeof signal<number>>; // Current displayed value (signal)
  prefix: string;     // Text before number e.g. ''
  suffix: string;     // Text after number e.g. '+'
  label: string;      // Main label e.g. 'Years of Experience'
  sublabel: string;   // Secondary text
  icon: string;       // Font Awesome icon class
}

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-section.html',
  styleUrl: './stats-section.scss'
})
export class StatsSectionComponent implements AfterViewInit, OnDestroy {

  // Reference to the section DOM element
  // @ViewChild links this to #statsSection in the HTML
  @ViewChild('statsSection') statsSection!: ElementRef<HTMLElement>;

  private observer: IntersectionObserver | null = null;
  private hasAnimated = false; // Ensure animation only runs once

  // Each stat has a signal() for its current displayed value
  // When we call signal.set(), the template re-renders automatically
  readonly stats: StatItem[] = [
    {
      target: 25,
      current: signal(0),
      prefix: '',
      suffix: '+',
      label: 'Years Experience',
      sublabel: 'Serving industries since decades',
      icon: 'fa-calendar-check'
    },
    {
      target: 44,           // ← Updated from 34 to 44 (real product count)
      current: signal(0),
      prefix: '',
      suffix: '+',
      label: 'Product Lines',
      sublabel: 'Across 21 product categories',
      icon: 'fa-boxes-stacked'
    },
    {
      target: 11,
      current: signal(0),
      prefix: '',
      suffix: '',
      label: 'Industries Served',
      sublabel: 'Chemical to steel processing',
      icon: 'fa-industry'
    },
    {
      target: 500,
      current: signal(0),
      prefix: '',
      suffix: '+',
      label: 'Happy Clients',
      sublabel: 'Trusted partners across India',
      icon: 'fa-handshake'
    }
  ];

  ngAfterViewInit(): void {
    // Create the IntersectionObserver
    // It fires when the observed element becomes visible
    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        // Only animate once — when section first enters viewport
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.runCounters();

          // Disconnect after first trigger — no need to keep watching
          this.observer?.disconnect();
        }
      },
      {
        threshold: 0.35 // Fires when 35% of section is visible
      }
    );

    // Start observing the section element
    this.observer.observe(this.statsSection.nativeElement);
  }

  ngOnDestroy(): void {
    // Clean up to prevent memory leaks
    this.observer?.disconnect();
  }

  private runCounters(): void {
    const DURATION = 2200; // Total animation duration in ms
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(elapsed / DURATION, 1);

      // Ease-out cubic: starts fast, slows at the end
      // This feels more natural than linear counting
      const eased = 1 - Math.pow(1 - rawProgress, 3);

      // Update each stat's current displayed value
      this.stats.forEach(stat => {
        stat.current.set(Math.round(stat.target * eased));
      });

      if (rawProgress < 1) {
        // Continue animation
        requestAnimationFrame(tick);
      } else {
        // Ensure exact final values
        this.stats.forEach(stat => stat.current.set(stat.target));
      }
    };

    requestAnimationFrame(tick);
  }

  trackById(_i: number, stat: StatItem): string {
    return stat.label;
  }
}
