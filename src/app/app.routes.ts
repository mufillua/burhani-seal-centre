// ============================================
// APP ROUTES
// ============================================
// This file defines every URL in the application
// and maps it to a component.
//
// KEY CONCEPT: Lazy Loading
// Instead of loading ALL pages at once (slow),
// Angular loads each page only when the user
// navigates to it. This makes the initial load FAST.

import { Routes } from '@angular/router';

export const routes: Routes = [
  // ─── Home (Eager loaded — always needed first) ───
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then(m => m.HomeComponent),
    title: 'Burhani Seal Centre | Industrial Sealing Solutions Kolkata'
    // title: sets the document <title> automatically
  },

  // ─── About ───────────────────────────────────────
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about').then(m => m.AboutComponent),
    title: 'About Us | Burhani Seal Centre'
  },

  // ─── Products Listing ────────────────────────────
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products').then(m => m.ProductsComponent),
    title: 'Products | Burhani Seal Centre'
  },

  // ─── Product Detail Page ─────────────────────────
  // The :slug part is a URL parameter
  // Example: /products/single-spring-mechanical-seal
  {
    path: 'products/:slug',
    loadComponent: () =>
      import('./features/product-detail/product-detail')
        .then(m => m.ProductDetailComponent),
    title: 'Product Detail | Burhani Seal Centre'
  },

  // ─── Industries ──────────────────────────────────
  {
    path: 'industries',
    loadComponent: () =>
      import('./features/industries/industries')
        .then(m => m.IndustriesComponent),
    title: 'Industries We Serve | Burhani Seal Centre'
  },

  // ─── Contact ─────────────────────────────────────
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact').then(m => m.ContactComponent),
    title: 'Contact Us | Burhani Seal Centre'
  },

  // ─── 404 Redirect ────────────────────────────────
  // Any unknown URL goes back to home
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
