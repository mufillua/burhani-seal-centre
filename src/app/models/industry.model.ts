// ============================================
// INDUSTRY MODEL
// ============================================
// Represents each industry we serve.
// Used on the Industries page and product detail pages.

export interface Industry {
  id: string;              // 'chemical-industry'
  name: string;            // 'Chemical Industry'
  slug: string;            // URL slug
  icon: string;            // Font Awesome icon class
  description: string;     // What products/solutions we offer them
  productsUsed: string[];  // Product IDs used in this industry
  imageUrl?: string;       // Optional industry image
  sortOrder: number;
}
