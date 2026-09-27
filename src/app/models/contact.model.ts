// ============================================
// CONTACT MODEL
// ============================================
// Defines the shape of the contact form data.

export interface ContactForm {
  name: string;
  mobile: string;
  email: string;
  company: string;
  message: string;
}

export interface ContactSubmission extends ContactForm {
  submittedAt: Date;
  status: 'pending' | 'sent' | 'failed';
}

// Company info model (used in footer and contact page)
export interface CompanyInfo {
  name: string;
  owner: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  phone: string;
  whatsapp: string;
  email: string;
  social: {
    linkedin: string;
    facebook: string;
    instagram: string;
    youtube: string;
    twitter: string;
  };
}
