// ============================================
// MAIN.TS — Application Entry Point
// ============================================
// This is the very first file Angular runs.
// It bootstraps (starts) the application.

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error('Bootstrap error:', err));
