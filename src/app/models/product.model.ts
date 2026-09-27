// ============================================
// PRODUCT MODEL
// ============================================
// Every single product in our catalog follows
// this exact structure. No exceptions.

export interface ProductSpec {
  label: string;   // e.g., 'Temperature Range'
  value: string;   // e.g., '-40°C to +200°C'
}

export interface Product {
  id: string;                   // Unique ID: 'single-spring-mechanical-seal'
  name: string;                 // Display name
  slug: string;                 // URL slug: same as id
  categoryId: string;           // Links to Category.id
  categoryName: string;         // Denormalized for easy display

  // Content
  shortDescription: string;     // 1-2 sentences for cards
  fullDescription: string;      // Detailed paragraph for product page

  // Detail Page Sections
  features: string[];           // Bullet points of key features
  specifications: ProductSpec[]; // Technical specs table
  applications: string[];        // Where this product is used
  industriesServed: string[];    // Which industries use this

  // Media
  imageUrl: string;             // Product image path
  imageAlt: string;             // SEO alt text for image

  // Commerce
  whatsappMessage: string;      // Pre-filled WhatsApp message

  // Metadata
  featured?: boolean;           // Show on homepage?
  isNew?: boolean;              // Show "New" badge?
  sortOrder: number;            // Controls display order

  // SEO
  metaTitle?: string;           // Custom page title
  metaDescription?: string;     // Custom meta description
}
