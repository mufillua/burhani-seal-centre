// ============================================
// APP CONFIG — global providers
// ============================================

import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions
} from '@angular/router';

import { routes } from './app.routes';

/** Deepest active route in a snapshot tree */
function leaf(snapshot: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
  let s = snapshot;
  while (s.firstChild) s = s.firstChild;
  return s;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      // Smooth cross-fade between pages. Skipped when only the
      // query string changes (filters, search, pagination) so the
      // catalogue stays snappy while you browse it.
      withViewTransitions({
        skipInitialTransition: true,
        onViewTransitionCreated: ({ transition, from, to }) => {
          const a = leaf(from);
          const b = leaf(to);
          const sameRoute =
            a.routeConfig === b.routeConfig &&
            JSON.stringify(a.params) === JSON.stringify(b.params);
          if (sameRoute) transition.skipTransition();
        }
      }),
      // Scroll handling is done in AppComponent (see there) so that
      // changing a filter never throws you back to the top of the page.
      withInMemoryScrolling({ scrollPositionRestoration: 'disabled', anchorScrolling: 'enabled' })
    )
  ]
};
