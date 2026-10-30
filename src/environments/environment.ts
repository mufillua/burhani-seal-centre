// ============================================
// SITE CONFIGURATION — single source of truth
// ============================================
// Every phone number, address, opening hour and
// social link on the website is read from here.
// Change a value once and the whole site updates.

const FOUNDED = 1988;

export const environment = {
  company: {
    name: 'Burhani Seal Centre',
    owner: 'Qutubuddin Palanpurwala',
    tagline: 'Trusted Industrial Sealing Solutions',
    gst: '19AADFB7017P1Z3',

    // Contact details
    whatsapp: '+917679679044',       // digits used for wa.me links
    phone: '+917679679044',          // used for tel: links
    phoneDisplay: '+91 76796 79044', // what visitors see
    // IMPORTANT: make sure this inbox exists before going live —
    // every "Enquire by email" button sends mail here.
    email: 'info@burhanisealcentre.com',

    address: {
      line1: 'Ground Floor, 37, Strand Road',
      line2: 'Burra Bazar',
      city: 'Kolkata',
      state: 'West Bengal',
      pincode: '700001',
      country: 'India',
      full: 'Ground Floor, 37, Strand Road, Burra Bazar, Kolkata - 700001, West Bengal, India',
      lat: 22.57974,
      lng: 88.34903
    },

    hours: [
      { days: 'Monday – Friday', time: '10:00 AM – 6:00 PM', open: true },
      { days: 'Saturday', time: '10:00 AM – 5:00 PM', open: true },
      { days: 'Sunday', time: 'Closed', open: false }
    ],
    hoursShort: 'Mon–Sat, 10 AM – 6 PM',

    // Leave a link empty ('') to hide that icon in the footer.
    social: {
      linkedin: '',
      facebook: '',
      instagram: '',
      indiamart: ''
    },

    // Year the business started (shown in the logo: "Since 1988").
    // "Years in the trade" on the home and about pages is worked out
    // from this, so it goes up by itself every year.
    founded: FOUNDED,

    // Headline numbers shown on the home and about pages.
    // Confirm "clients" with the owner before launch.
    stats: {
      years: new Date().getFullYear() - FOUNDED,
      clients: 500
    }
  },

  seo: {
    // The address the site is live on (no trailing slash). Used for
    // canonical/OG tags, the sitemap and the product links inside
    // WhatsApp/email enquiries. When the domain is connected, change
    // this one line and rebuild — `npm run build` updates
    // index.html, sitemap.xml and robots.txt to match.
    siteUrl: 'https://burhani-seal-centre.vercel.app',
    defaultTitle: 'Burhani Seal Centre | Oil Seals, Hydraulic Seals & Couplings in Kolkata',
    defaultDescription:
      'Burhani Seal Centre, Burra Bazar, Kolkata — oil seals (SKF, IVR, J K Pioneer), hydraulic seals, seal kits, pump seals, O-ring kits, PU coupling spiders, rubber sheets and SKF bearings. Enquire on WhatsApp or email.',
    ogImage: '/assets/images/og-image.jpg'
  }
};
