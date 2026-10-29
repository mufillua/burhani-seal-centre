// ============================================
// PAGINATION
// ============================================
// ‹ Prev  1 … 4 [5] 6 … 9  Next ›
// Emits the page number; the parent decides what happens.

import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

type PageItem = { kind: 'page'; n: number } | { kind: 'gap'; key: string };

@Component({
  selector: 'app-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (totalPages() > 1) {
      <nav class="pager" aria-label="Product pages">
        <button type="button" class="pager__step"
                [disabled]="page() <= 1"
                (click)="go(page() - 1)"
                aria-label="Previous page">
          <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
          <span class="pager__step-label">Prev</span>
        </button>

        <ol class="pager__list" role="list">
          @for (item of items(); track item.kind === 'page' ? item.n : item.key) {
            @if (item.kind === 'page') {
              <li>
                <button type="button" class="pager__num"
                        [class.is-current]="item.n === page()"
                        [attr.aria-current]="item.n === page() ? 'page' : null"
                        [attr.aria-label]="'Page ' + item.n"
                        (click)="go(item.n)">{{ item.n }}</button>
              </li>
            } @else {
              <li class="pager__gap" aria-hidden="true">…</li>
            }
          }
        </ol>

        <span class="pager__mobile" aria-hidden="true">Page {{ page() }} of {{ totalPages() }}</span>

        <button type="button" class="pager__step"
                [disabled]="page() >= totalPages()"
                (click)="go(page() + 1)"
                aria-label="Next page">
          <span class="pager__step-label">Next</span>
          <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      </nav>
    }
  `,
  styleUrl: './pagination.scss'
})
export class PaginationComponent {
  readonly page = input.required<number>();
  readonly totalPages = input.required<number>();
  readonly pageChange = output<number>();

  protected readonly items = computed<PageItem[]>(() => {
    const total = this.totalPages();
    const current = this.page();
    const pages = new Set<number>([1, total, current - 1, current, current + 1]);
    if (current <= 3) [2, 3, 4].forEach(n => pages.add(n));
    if (current >= total - 2) [total - 1, total - 2, total - 3].forEach(n => pages.add(n));

    const sorted = [...pages].filter(n => n >= 1 && n <= total).sort((a, b) => a - b);
    const out: PageItem[] = [];
    sorted.forEach((n, i) => {
      if (i > 0 && n - sorted[i - 1] > 1) out.push({ kind: 'gap', key: `gap-${n}` });
      out.push({ kind: 'page', n });
    });
    return out;
  });

  protected go(n: number): void {
    if (n >= 1 && n <= this.totalPages() && n !== this.page()) this.pageChange.emit(n);
  }
}
