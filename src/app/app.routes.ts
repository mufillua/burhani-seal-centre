// ============================================
// APP ROUTES — every page is lazy-loaded
// ============================================
// Page titles and meta tags are set by SeoService inside
// each page, so routes intentionally have no `title`.

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products').then(m => m.ProductsComponent)
  },
  {
    path: 'products/:slug',
    loadComponent: () =>
      import('./features/product-detail/product-detail').then(m => m.ProductDetailComponent)
  },
  {
    path: 'categories',
    loadComponent: () => import('./features/categories/categories').then(m => m.CategoriesComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then(m => m.AboutComponent)
  },
  {
    path: 'industries',
    loadComponent: () => import('./features/industries/industries').then(m => m.IndustriesComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then(m => m.ContactComponent)
  },
  { path: 'quote', redirectTo: 'contact' },
  { path: 'get-a-quote', redirectTo: 'contact' },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFoundComponent)
  }
];
