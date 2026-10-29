// ============================================
// CATEGORY MODEL
// ============================================
// A category groups related products, e.g. "Oil Seals".

/** Which line illustration to draw for a category (see CategoryArtComponent) */
export type CategoryArt =
  | 'oil-seal' | 'hydraulic' | 'kit' | 'pump'
  | 'o-ring' | 'coupling' | 'sheet' | 'bearing';

export interface Category {
  id: string;            // 'oil-seals' — also used in ?category= URLs
  name: string;          // 'Oil Seals'
  slug: string;
  icon: string;          // Font Awesome icon (small UI places)
  art: CategoryArt;      // Line illustration (cards, placeholders)
  description: string;
  productCount?: number; // Calculated at runtime
  featured?: boolean;
  sortOrder: number;
}
