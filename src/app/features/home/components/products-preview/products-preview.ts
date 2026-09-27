// ============================================
// PRODUCTS PREVIEW COMPONENT
// ============================================
// Shows the 6 featured product CATEGORIES
// on the homepage (not individual products).
// Clicking a card navigates to /products.

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
import { ProductService } from '../../../../services/product.service';
import { Category } from '../../../../models/category.model';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header';

@Component({
  selector: 'app-products-preview',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent],
  templateUrl: './products-preview.html',
  styleUrl: './products-preview.scss'
})
export class ProductsPreviewComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('productsSection') productsSection!: ElementRef<HTMLElement>;

  isVisible = signal(false);
  featuredCategories: Category[] = [];

  private observer: IntersectionObserver | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.featuredCategories = this.productService.getFeaturedCategories();
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
    this.observer.observe(this.productsSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  trackById(_i: number, cat: Category): string { return cat.id; }
}
