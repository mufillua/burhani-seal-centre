// ============================================
// MAIN.SERVER.TS — build-time entry point
// ============================================
// Used only by `npm run build` to pre-render every page to plain
// HTML (see app.routes.server.ts). Visitors still get the normal
// app; search engines and link previews get finished pages.

import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context);

export default bootstrap;
