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
  metaDescription?: string; // search-result snippet for the category page (≤155 characters)
  productCount?: number; // Calculated at runtime
  featured?: boolean;
  sortOrder: number;
}
