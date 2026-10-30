// ============================================
// NAVBAR
// ============================================
// Desktop:  Logo | Products · Categories ▾ · About Us | ☎ number | Get A Quote
// Mobile:   Logo | ☎ | Quote | ☰  → slide-in drawer
//
// • Transparent over the dark page heroes, turns to frosted
//   navy once you scroll, and shrinks slightly.
// • Blue progress line under the bar shows how far down the
//   page you are.
// • "Categories" opens a mega-menu (hover, click or keyboard).

import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  NgZone,
  afterNextRender,
  inject,
  signal,
  viewChild
} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { environment } from '../../../../environments/environment';
import { ProductService } from '../../../services/product.service';
import { EnquiryService } from '../../../services/enquiry.service';
import { CategoryArtComponent } from '../category-art/category-art';
import { LogoMarkComponent } from '../logo-mark/logo-mark';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CategoryArtComponent, LogoMarkComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  host: {
    '(document:keydown.escape)': 'closeAll(true)',
    '(document:click)': 'onDocumentClick($event)'
  }
})
export class NavbarComponent {
  private readonly doc = inject(DOCUMENT);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly router = inject(Router);
  protected readonly enquiry = inject(EnquiryService);

  protected readonly company = environment.company;
  protected readonly categories = inject(ProductService).getAllCategories();
  protected readonly totalProducts = inject(ProductService).getTotalProductCount();

  protected readonly scrolled = signal(false);
  protected readonly megaOpen = signal(false);
  protected readonly drawerOpen = signal(false);
  protected readonly drawerCategoriesOpen = signal(false);
  protected readonly onCategories = signal(false);

  private readonly megaTrigger = viewChild<ElementRef<HTMLButtonElement>>('megaTrigger');
  private readonly burger = viewChild<ElementRef<HTMLButtonElement>>('burger');
  private readonly progress = viewChild<ElementRef<HTMLElement>>('progress');
  private hoverTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    const zone = inject(NgZone);

    // Close everything after any navigation
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd), takeUntilDestroyed())
      .subscribe(e => {
        this.onCategories.set((e as NavigationEnd).urlAfterRedirects.startsWith('/categories'));
        this.closeAll(false);
      });

    // Scroll listener runs outside Angular: it only touches the DOM
    // directly (progress bar) and flips a signal when crossing 24px.
    afterNextRender(() => {
      const win = this.doc.defaultView!;
      const onScroll = () => {
        const y = win.scrollY;
        const max = this.doc.documentElement.scrollHeight - win.innerHeight;
        this.progress()?.nativeElement.style.setProperty('--progress', String(max > 0 ? Math.min(y / max, 1) : 0));
        const isScrolled = y > 24;
        if (isScrolled !== this.scrolled()) zone.run(() => this.scrolled.set(isScrolled));
      };
      zone.runOutsideAngular(() => {
        win.addEventListener('scroll', onScroll, { passive: true });
        win.addEventListener('resize', onScroll, { passive: true });
      });
      onScroll();
    });

    inject(DestroyRef).onDestroy(() => this.lockScroll(false));
  }

  // ── Mega menu ────────────────────────────

  protected openMegaSoon(): void {
    clearTimeout(this.hoverTimer);
    this.hoverTimer = setTimeout(() => this.megaOpen.set(true), 90);
  }

  protected closeMegaSoon(): void {
    clearTimeout(this.hoverTimer);
    this.hoverTimer = setTimeout(() => this.megaOpen.set(false), 180);
  }

  protected toggleMega(): void {
    clearTimeout(this.hoverTimer);
    this.megaOpen.update(v => !v);
  }

  // ── Mobile drawer ────────────────────────

  protected toggleDrawer(): void {
    const open = !this.drawerOpen();
    this.drawerOpen.set(open);
    this.lockScroll(open);
    if (open) {
      setTimeout(() => this.host.querySelector<HTMLElement>('.drawer a, .drawer button')?.focus(), 60);
    }
  }

  protected closeAll(restoreFocus: boolean): void {
    const wasMega = this.megaOpen();
    const wasDrawer = this.drawerOpen();
    clearTimeout(this.hoverTimer);
    this.megaOpen.set(false);
    if (wasDrawer) {
      this.drawerOpen.set(false);
      this.drawerCategoriesOpen.set(false);
      this.lockScroll(false);
    }
    if (restoreFocus) {
      if (wasMega) this.megaTrigger()?.nativeElement.focus();
      if (wasDrawer) this.burger()?.nativeElement.focus();
    }
  }

  protected onDocumentClick(event: MouseEvent): void {
    if (this.megaOpen() && !(event.target as HTMLElement).closest('.nav__item--mega')) {
      this.megaOpen.set(false);
    }
  }

  private lockScroll(lock: boolean): void {
    this.doc.documentElement.style.overflow = lock ? 'hidden' : '';
  }
}
