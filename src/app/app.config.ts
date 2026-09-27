// ============================================
// APP CONFIG
// ============================================
// Angular 20 uses this file instead of AppModule.
// This is where we configure all Angular providers:
// - Router
// - Animations
// - HttpClient
// - etc.

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions, withInMemoryScrolling } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Zone.js for change detection (Angular's default)
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Router with extra features:
    provideRouter(
      routes,
      // 1. Smooth view transitions between pages
      withViewTransitions(),
      // 2. Scroll management for navigation
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    ),

    // Animations (async = loaded only when needed, faster startup)
    provideAnimationsAsync(),

    // HTTP client for future API calls
    provideHttpClient()
  ]
};
