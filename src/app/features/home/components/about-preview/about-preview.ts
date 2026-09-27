// ============================================
// ABOUT PREVIEW COMPONENT
// ============================================
// A teaser of the About page shown on Homepage.
// The full story is on /about.

import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  signal
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface FeaturePoint {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-preview.html',
  styleUrl: './about-preview.scss'
})
export class AboutPreviewComponent implements AfterViewInit, OnDestroy {

  @ViewChild('aboutSection') aboutSection!: ElementRef<HTMLElement>;

  isVisible = signal(false);
  private observer: IntersectionObserver | null = null;

  readonly features: FeaturePoint[] = [
    {
      icon: 'fa-medal',
      title: 'Premium Quality Products',
      description: 'Every product we supply meets stringent quality standards from leading global manufacturers.'
    },
    {
      icon: 'fa-industry',
      title: 'Cross-Industry Expertise',
      description: 'Decades of experience serving Chemical, Pharma, Oil & Gas, Power, Textile, and 7 more industries.'
    },
    {
      icon: 'fa-headset',
      title: 'Expert Technical Support',
      description: 'Our team helps you select the right sealing solution for your exact application and operating conditions.'
    },
    {
      icon: 'fa-truck-fast',
      title: 'Reliable & Fast Supply',
      description: 'Extensive stock availability and strong supplier relationships ensure prompt delivery across India.'
    }
  ];

  readonly timelineItems = [
    { year: 'Founded', text: 'Established at Burra Bazar, Strand Road, Kolkata', icon: 'fa-flag' },
    { year: 'Growth',  text: 'Expanded to 21 product categories',   icon: 'fa-chart-line' },
    { year: 'Today',   text: '44+ product lines, 500+ satisfied clients', icon: 'fa-star' }
  ];

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.isVisible.set(true);
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    this.observer.observe(this.aboutSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  trackByTitle(_i: number, item: FeaturePoint): string { return item.title; }
  trackByYear(_i: number, item: { year: string }): string { return item.year; }
}
