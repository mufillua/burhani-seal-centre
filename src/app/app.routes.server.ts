// ============================================
// PRE-RENDERED PAGES
// ============================================
// Every page below is turned into its own HTML file at build time,
// with its own <title>, description, canonical link, social preview
// and structured data. New products and categories are picked up
// automatically from products.data.ts.

import { RenderMode, ServerRoute } from '@angular/ssr';
import { CATEGORIES, PRODUCTS } from './data/products.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'products/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => PRODUCTS.map(p => ({ slug: p.slug }))
  },
  {
    path: 'categories/:category',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => CATEGORIES.map(c => ({ category: c.id }))
  },
  // Redirects and unknown addresses are handled in the browser
  { path: 'quote', renderMode: RenderMode.Client },
  { path: 'get-a-quote', renderMode: RenderMode.Client },
  // Home, Products, Categories, About, Industries, Contact
  { path: '**', renderMode: RenderMode.Prerender }
];
