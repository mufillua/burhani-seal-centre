// ============================================
// NAVBAR COMPONENT
// ============================================
// Standalone sticky navigation bar.
// Detects scroll position to change appearance.
// Handles mobile menu open/close state.

import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  signal,
  computed
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { slideDown } from '../../../animations/app.animations';
import { WhatsappService } from '../../../services/whatsapp.service';
import { environment } from '../../../../environments/environments';

// Defines the shape of each nav link
interface NavLink {
  label: string;
  path: string;
  exact?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  animations: [slideDown],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {

  // ── Signals (Angular 20's reactive state) ─────────────────────────
  // A signal is like a variable that automatically
  // updates the template when its value changes.

  /** Is the mobile menu currently open? */
  isMobileMenuOpen = signal(false);

  /** Has the user scrolled more than 80px? */
  isScrolled = signal(false);

  /** Current scroll position in pixels */
  scrollY = signal(0);

  // ── Computed values ───────────────────────────────────────────────
  /** CSS class applied to navbar based on scroll state */
  navbarClass = computed(() => ({
    'navbar--scrolled': this.isScrolled(),
    'navbar--menu-open': this.isMobileMenuOpen()
  }));

  // ── Static data ───────────────────────────────────────────────────
  readonly company = environment.company;

  readonly navLinks: NavLink[] = [
    { label: 'Home',       path: '/',           exact: true  },
    { label: 'About',      path: '/about'                    },
    { label: 'Products',   path: '/products'                 },
    { label: 'Industries', path: '/industries'               },
    { label: 'Contact',    path: '/contact'                  }
  ];

  constructor(private whatsappService: WhatsappService) {}

  ngOnInit(): void {
    // Check initial scroll position
    // (handles page refresh when already scrolled)
    this.checkScroll(window.scrollY);
  }

  ngOnDestroy(): void {
    // Cleanup — ensure body scroll is restored
    // if component is destroyed while menu is open
    document.body.style.overflow = '';
  }

  // ── HostListener ──────────────────────────────────────────────────
  // @HostListener listens to browser window events.
  // This fires every time the user scrolls.
  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.checkScroll(window.scrollY);
  }

  // Close mobile menu if user resizes to desktop width
  @HostListener('window:resize')
  onWindowResize(): void {
    if (window.innerWidth >= 992 && this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  // ── Methods ───────────────────────────────────────────────────────

  private checkScroll(scrollPosition: number): void {
    this.scrollY.set(scrollPosition);
    this.isScrolled.set(scrollPosition > 80);
  }

  toggleMobileMenu(): void {
    const newState = !this.isMobileMenuOpen();
    this.isMobileMenuOpen.set(newState);

    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = newState ? 'hidden' : '';
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    document.body.style.overflow = '';
  }

  openWhatsApp(): void {
    this.whatsappService.openGeneralEnquiry();
  }

  /** TrackBy function for *ngFor performance */
  trackByPath(_index: number, link: NavLink): string {
    return link.path;
  }
}
