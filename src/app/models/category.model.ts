// ============================================
// CATEGORY MODEL
// ============================================
// A category groups related products together.
// Example: "Mechanical Seals" is a category
// containing Single Spring, Multi Spring, etc.

export interface Category {
  id: string;           // Unique identifier: 'mechanical-seals'
  name: string;         // Display name: 'Mechanical Seals'
  slug: string;         // URL-friendly: 'mechanical-seals'
  icon: string;         // Font Awesome class: 'fa-gear'
  description: string;  // Short description shown on category card
  productCount?: number; // Auto-calculated, optional
  imageUrl?: string;    // Optional category image
  featured?: boolean;   // Show on homepage preview?
  sortOrder: number;    // Controls display order
}
