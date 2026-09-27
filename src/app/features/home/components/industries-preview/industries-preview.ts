// ============================================
// INDUSTRIES PREVIEW COMPONENT
// ============================================

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
import { INDUSTRIES } from '../../../../data/industries.data';
import { Industry } from '../../../../models/industry.model';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header';

@Component({
  selector: 'app-industries-preview',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent],
  templateUrl: './industries-preview.html',
  styleUrl: './industries-preview.scss'
})
export class IndustriesPreviewComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('industrySection') industrySection!: ElementRef<HTMLElement>;

  isVisible = signal(false);

  // Show first 6 industries on homepage
  displayedIndustries: Industry[] = [];

  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    this.displayedIndustries = [...INDUSTRIES]
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .slice(0, 6);
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.isVisible.set(true);
          this.observer?.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(this.industrySection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  trackById(_i: number, ind: Industry): string { return ind.id; }
}
