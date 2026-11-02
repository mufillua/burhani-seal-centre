// ============================================
// CATEGORY MODEL
// ============================================
// A category groups related products, e.g. "Oil Seals".

/** Which line illustration to draw for a category (see CategoryArtComponent) */
export type CategoryArt =
  | 'oil-seal' | 'hydraulic' | 'pneumatic' | 'wiper' | 'kit' | 'pump'
  | 'o-ring' | 'coupling' | 'bellows' | 'diaphragm' | 'gasket'
  | 'sheet' | 'profile' | 'mount' | 'custom' | 'bearing';

export interface Category {
  id: string;            // 'oil-seals' — also the page address /categories/oil-seals
  name: string;          // 'Oil Seals'
  slug: string;
  icon: string;          // Font Awesome icon (small UI places)
  art: CategoryArt;      // Line illustration (cards, placeholders)
  description: string;
  metaTitle?: string;       // search-result title for the category page (brand is added)
  metaDescription?: string; // search-result snippet; the site adds the WhatsApp line
  intro?: string[];         // "About" paragraphs shown under the products
  faqs?: { q: string; a: string }[]; // questions shown under the products (and as FAQ data)
  productCount?: number; // Calculated at runtime
  featured?: boolean;
  sortOrder: number;
}
