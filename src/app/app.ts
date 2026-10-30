// ============================================
// APP SHELL
// ============================================
// Blueprint backdrop + navbar + page + footer + floating WhatsApp button.
// Also owns scroll behaviour between pages:
//  • new page            → start at the top
//  • back / forward      → return to where you were
//  • only filters change → stay put (the page handles it)

import { Component, DOCUMENT, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { FooterComponent } from './shared/components/footer/footer';
import { WhatsappButtonComponent } from './shared/components/whatsapp-button/whatsapp-button';
import { BackdropComponent } from './shared/components/backdrop/backdrop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackdropComponent, NavbarComponent, FooterComponent, WhatsappButtonComponent],
  template: `
    <a class="skip-link" href="#main">Skip to content</a>
    <app-backdrop />
    <app-navbar />
    <main id="main" tabindex="-1">
      <router-outlet />
    </main>
    <app-footer />
    <app-whatsapp-button />
  `,
  styles: `
    :host { display: block; }
    main { display: block; min-height: 70vh; outline: none; }
    .skip-link {
      position: fixed; left: 12px; top: -60px; z-index: 1000;
      padding: 10px 16px; border-radius: 8px;
      background: #0155B1; color: #FFFFFF; font-weight: 700;
      transition: top .2s ease;
    }
    .skip-link:focus { top: 12px; }
  `
})
export class AppComponent {
  constructor() {
    const doc = inject(DOCUMENT);
    const scroller = inject(ViewportScroller);
    const router = inject(Router);

    // Turn on scroll-reveal animations (CSS hides [data-reveal] only after this)
    if ('IntersectionObserver' in (doc.defaultView ?? {})) {
      doc.documentElement.classList.add('reveal-ready');
    }

    let lastPath = '';
    router.events
      .pipe(filter((e): e is Scroll => e instanceof Scroll))
      .subscribe(e => {
        const url = (e.routerEvent as NavigationEnd).urlAfterRedirects ?? '';
        const path = url.split(/[?#]/)[0];
        const pathChanged = path !== lastPath;
        lastPath = path;

        if (e.position) {
          // Back/forward: wait a frame for the page to render, then restore
          setTimeout(() => scroller.scrollToPosition(e.position!, { behavior: 'instant' }), 0);
        } else if (e.anchor) {
          setTimeout(() => scroller.scrollToAnchor(e.anchor!), 0);
        } else if (pathChanged) {
          doc.defaultView?.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      });
  }
}
