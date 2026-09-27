// ============================================
// SAFE IMAGE PIPE
// ============================================
// Returns a placeholder if image src is empty.
// Usage: [src]="product.imageUrl | safeImage"

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeImage',
  standalone: true,
  pure: true  // Pure pipe = only recalculates when input changes
})
export class SafeImagePipe implements PipeTransform {
  private readonly placeholder = 'assets/images/product-placeholder.svg';

  transform(url: string | null | undefined): string {
    if (!url || url.trim() === '') {
      return this.placeholder;
    }
    return url;
  }
}
