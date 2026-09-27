// ============================================
// PRODUCTS DATA FILE — Updated from
// burhanisealcentre.com/our-products.html
// ============================================
// All categories and products match exactly
// what Burhani Seal Centre actually sells.

import { Category } from '../models/category.model';
import { Product }  from '../models/product.model';

// ─────────────────────────────────────────────
// HELPER — WhatsApp message builder
// ─────────────────────────────────────────────
function waMsg(name: string): string {
  return (
    `Hello Burhani Seal Centre! 👋\n\n` +
    `I am interested in: *${name}*\n\n` +
    `Please share:\n` +
    `• Product details & specifications\n` +
    `• Pricing & availability\n\n` +
    `Thank you.`
  );
}

// ─────────────────────────────────────────────
// CATEGORIES  (21 from the live website)
// ─────────────────────────────────────────────
export const CATEGORIES: Category[] = [
  {
    id: 'oil-seal',
    name: 'Oil Seal',
    slug: 'oil-seal',
    icon: 'fa-droplet',
    description: 'Premium oil seals from SKF, IVR, J K Pioneer and other leading brands. NBR, Viton, rubber and nitrile variants for automotive, industrial, pump and gearbox applications.',
    featured: true,
    sortOrder: 1
  },
  {
    id: 'seals',
    name: 'Seals',
    slug: 'seals',
    icon: 'fa-circle-notch',
    description: 'Viton oil seals, double lip seals, PU hydraulic seals, hydraulic cylinder seals and hydraulic jack seals for a wide range of industrial and mobile hydraulic applications.',
    featured: true,
    sortOrder: 2
  },
  {
    id: 'pu-coupling-spider',
    name: 'PU Coupling Spider',
    slug: 'pu-coupling-spider',
    icon: 'fa-gear',
    description: 'Polyurethane coupling spiders in 1 inch, 2 inch and larger sizes for flexible jaw couplings — providing vibration damping, shock absorption and misalignment compensation.',
    featured: true,
    sortOrder: 3
  },
  {
    id: 'seal-kit',
    name: 'Seal Kit',
    slug: 'seal-kit',
    icon: 'fa-box-archive',
    description: 'Complete seal kits including cassette oil seals, hydraulic oil seal kits and hydraulic cylinder seal kits for fast, error-free maintenance and overhaul.',
    featured: true,
    sortOrder: 4
  },
  {
    id: 'rubber-sheet',
    name: 'Rubber Sheet',
    slug: 'rubber-sheet',
    icon: 'fa-layer-group',
    description: 'Black silicone and white silicone rubber sheets available in multiple thicknesses for gasketing, sealing, lining and industrial fabrication applications.',
    featured: true,
    sortOrder: 5
  },
  {
    id: 'pump-seal',
    name: 'Pump Seal',
    slug: 'pump-seal',
    icon: 'fa-arrows-spin',
    description: 'Mechanical pump seals and water pump seals in standard sizes for centrifugal pumps, water pumps and general industrial pump applications.',
    featured: true,
    sortOrder: 6
  },
  {
    id: 'hydraulic-oil-seal',
    name: 'Hydraulic Oil Seal',
    slug: 'hydraulic-oil-seal',
    icon: 'fa-gauge-high',
    description: 'Hydraulic oil seals and hydraulic wiper seals for cylinders, actuators and hydraulic systems — preventing fluid leakage and excluding external contaminants.',
    featured: false,
    sortOrder: 7
  },
  {
    id: 'o-ring-kit',
    name: 'O Ring Kit',
    slug: 'o-ring-kit',
    icon: 'fa-ring',
    description: 'Nitrile rubber and general rubber O Ring assortment kits with hundreds of sizes in a single box — ideal for maintenance workshops, service centres and plant operations.',
    featured: false,
    sortOrder: 8
  },
  {
    id: 'rubber-cord',
    name: 'Rubber Cord',
    slug: 'rubber-cord',
    icon: 'fa-minus',
    description: 'Solid black rubber cords in multiple diameters for door seals, window seals, gasket fabrication and custom sealing strip applications.',
    featured: false,
    sortOrder: 9
  },
  {
    id: 'polypropylene-cylindrical-rod',
    name: 'Polypropylene Cylindrical Rod',
    slug: 'polypropylene-cylindrical-rod',
    icon: 'fa-pipe-section',
    description: 'Polypropylene cylindrical rods for machining into custom plastic components, bushes, bearings and chemical-resistant structural parts.',
    featured: false,
    sortOrder: 10
  },
  {
    id: 'industrial-tyre-couplings',
    name: 'Industrial Tyre Couplings',
    slug: 'industrial-tyre-couplings',
    icon: 'fa-circle',
    description: 'Rubber tyre couplings for connecting misaligned shafts in pumps, motors, compressors and conveyors — offering excellent vibration isolation and torque transmission.',
    featured: false,
    sortOrder: 11
  },
  {
    id: 'stainless-steel-circlips',
    name: 'Stainless Steel Circlips',
    slug: 'stainless-steel-circlips',
    icon: 'fa-circle-dot',
    description: 'Stainless steel internal and external circlips (snap rings) for shaft and bore retention in a wide range of machinery and precision assemblies.',
    featured: false,
    sortOrder: 12
  },
  {
    id: 'polyurethane-tube',
    name: 'Polyurethane Tube',
    slug: 'polyurethane-tube',
    icon: 'fa-grip-lines',
    description: 'Flexible polyurethane pneumatic tubes in blue and other colours for compressed air lines, pneumatic tool connections and automation systems.',
    featured: false,
    sortOrder: 13
  },
  {
    id: 'gear-box-oil-seal',
    name: 'Gear Box Oil Seal',
    slug: 'gear-box-oil-seal',
    icon: 'fa-gears',
    description: 'Precision gearbox oil seals for automotive transmissions, industrial gearboxes and speed reducers — preventing lubricant leakage and contamination ingress.',
    featured: false,
    sortOrder: 14
  },
  {
    id: 'pipe-nipples',
    name: 'Pipe Nipples',
    slug: 'pipe-nipples',
    icon: 'fa-minus',
    description: 'Stainless steel pipe nipples for connecting pipes, fittings and valves in industrial plumbing, chemical processing and general piping systems.',
    featured: false,
    sortOrder: 15
  },
  {
    id: 'skf-ball-bearings',
    name: 'SKF Ball Bearings',
    slug: 'skf-ball-bearings',
    icon: 'fa-sun',
    description: 'Genuine SKF deep groove ball bearings, angular contact bearings and special bearings for electric motors, pumps, fans, gearboxes and precision machinery.',
    featured: false,
    sortOrder: 16
  },
  {
    id: 'rubber-o-ring-and-oil-seal',
    name: 'Rubber O Ring And Oil Seal',
    slug: 'rubber-o-ring-and-oil-seal',
    icon: 'fa-record-vinyl',
    description: 'Standard rubber O Rings and oil seals for static and dynamic sealing applications across industrial equipment, hydraulic systems and general machinery.',
    featured: false,
    sortOrder: 17
  },
  {
    id: 'water-pump-seal',
    name: 'Water Pump Seal',
    slug: 'water-pump-seal',
    icon: 'fa-water',
    description: 'Dedicated water pump mechanical seals for centrifugal water pumps, submersible pumps and irrigation pump systems — providing leak-free long-life performance.',
    featured: false,
    sortOrder: 18
  },
  {
    id: 'spider-coupling',
    name: 'Spider Coupling',
    slug: 'spider-coupling',
    icon: 'fa-asterisk',
    description: 'Rubber spider couplings (jaw couplings) for flexible shaft-to-shaft connection — absorbing shock loads, vibration and angular misalignment in pump-motor assemblies.',
    featured: false,
    sortOrder: 19
  },
  {
    id: 'rod-seal',
    name: 'Rod Seal',
    slug: 'rod-seal',
    icon: 'fa-arrows-up-down',
    description: 'PU and NBR rod seals (U-cups, chevron seals) for hydraulic cylinder piston rods — providing reliable sealing against high-pressure fluid under dynamic conditions.',
    featured: false,
    sortOrder: 20
  },
  {
    id: 'pneumatic-seal',
    name: 'Pneumatic Seal',
    slug: 'pneumatic-seal',
    icon: 'fa-wind',
    description: 'Pneumatic seal kits for air cylinders and pneumatic actuators — low-friction, precise sealing for clean, dry compressed air and inert gas service.',
    featured: false,
    sortOrder: 21
  }
];

// ─────────────────────────────────────────────
// PRODUCTS  (exact names from the live website)
// ─────────────────────────────────────────────
export const PRODUCTS: Product[] = [

  // ══════════════════════════════════════════
  // OIL SEAL  (13 products)
  // ══════════════════════════════════════════

  {
    id: 'skf-oil-seals',
    name: 'SKF Oil Seals',
    slug: 'skf-oil-seals',
    categoryId: 'oil-seal',
    categoryName: 'Oil Seal',
    shortDescription: 'Premium SKF radial shaft oil seals in NBR, Viton and PTFE for automotive gearboxes, industrial pumps and rotating machinery requiring reliable lubricant retention.',
    fullDescription: `SKF Oil Seals (also known as radial shaft seals) are premium-quality sealing components engineered to retain lubricants and exclude dust, dirt and moisture from rotating machinery. Manufactured with SKF's advanced material formulations and precise design standards, these seals deliver outstanding durability, high-speed capability and long service life.\n\nSKF oil seals are widely used in automotive systems, industrial equipment, gearboxes, pumps, motors and heavy-duty machinery where reliable sealing is essential. Burhani Seal Centre stocks a comprehensive range of SKF oil seals covering a wide variety of shaft and bore dimensions.`,
    features: [
      'High-quality materials: available in NBR, Viton (FKM), HNBR and PTFE',
      'Dual-lip and single-lip designs for enhanced contamination protection',
      'Excellent temperature and chemical resistance for demanding industrial environments',
      'Optimised lip geometry for low friction, reduced heat generation and longer seal life',
      'Corrosion-resistant garter spring for consistent radial sealing force',
      'Leak-proof performance even at high rotational speeds',
      'Full range of metric and imperial sizes available',
      'Genuine SKF product — traceable quality assurance'
    ],
    specifications: [
      { label: 'Brand',          value: 'SKF'                          },
      { label: 'Material',       value: 'Viton Rubber / NBR / PTFE'   },
      { label: 'Type',           value: 'Radial Shaft Seal (Oil Seal)' },
      { label: 'Seal Style',     value: 'Single Lip / Double Lip'      },
      { label: 'Inner Diameter', value: '10 mm – 400 mm'              },
      { label: 'Size Example',   value: '35×62×7 mm'                   },
      { label: 'Colour',         value: 'Black'                        },
      { label: 'Country of Origin', value: 'India / Sweden'           }
    ],
    applications: [
      'Automotive gearboxes and transmissions',
      'Industrial electric motors and pumps',
      'Agricultural and earth-moving equipment',
      'Heavy-duty truck axles and wheel hubs',
      'General rotating machinery and drive systems'
    ],
    industriesServed: ['Automotive', 'Chemical Industry', 'Steel Industry', 'Cement Industry', 'Power Plants'],
    imageUrl: 'assets/images/products/skf-oil-seals.png',
    imageAlt: 'SKF Oil Seals — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('SKF Oil Seals'),
    featured: true,
    sortOrder: 1,
    metaTitle: 'SKF Oil Seals | Burhani Seal Centre Kolkata',
    metaDescription: 'Buy genuine SKF oil seals in Kolkata. NBR, Viton, PTFE variants. Automotive, pump and gearbox seals. Contact Burhani Seal Centre for pricing.'
  },

  {
    id: 'ivr-oil-seals',
    name: 'IVR Oil Seals',
    slug: 'ivr-oil-seals',
    categoryId: 'oil-seal',
    categoryName: 'Oil Seal',
    shortDescription: 'IVR brand rotary shaft seals in NBR double-lip TC design for automotive, industrial, agricultural, earthmoving, pump and gearbox applications.',
    fullDescription: `The IVR Oil Seal is a specially designed rotary shaft seal used in industrial machinery, automotive systems, gearboxes, pumps, motors and agricultural equipment. The TC double-lip construction provides superior contamination exclusion, retaining lubricants while keeping out dust, moisture and abrasive particles.\n\nBurhani Seal Centre supplies IVR oil seals across a comprehensive range of bore and shaft dimensions, making them a cost-effective alternative for high-volume maintenance and replacement requirements in industrial plants.`,
    features: [
      'TC (double lip) construction for superior dust and moisture exclusion',
      'Material: Nitrile (NBR) — excellent oil and petroleum resistance',
      'Suitable for automotive, industrial, agricultural and earthmoving equipment',
      'High-pressure rated design for demanding applications',
      'Available in wide range of bore and shaft sizes',
      'Cost-effective alternative to OEM seals',
      'Consistent quality with reliable dimensional accuracy',
      'Applications: pumps, gearboxes, engines, motors'
    ],
    specifications: [
      { label: 'Brand',            value: 'IVR'                              },
      { label: 'Material',         value: 'Nitrile (NBR)'                    },
      { label: 'Type / Style',     value: 'TC (Double Lip)'                  },
      { label: 'Inner Diameter',   value: '45 mm (example)'                  },
      { label: 'Outer Diameter',   value: '72 mm (example)'                  },
      { label: 'Height / Width',   value: '10 mm (example)'                  },
      { label: 'Application',      value: 'Automotive / Industrial / Pumps / Gearbox' },
      { label: 'Special Features', value: 'High Pressure'                    }
    ],
    applications: [
      'Gearboxes and differential housings',
      'Industrial pump shaft sealing',
      'Agricultural tractor and machinery seals',
      'Earthmoving and construction equipment',
      'Engine crankshaft and camshaft sealing'
    ],
    industriesServed: ['Steel Industry', 'Cement Industry', 'Chemical Industry', 'Power Plants'],
    imageUrl: 'assets/images/products/ivr-oil-seals.png',
    imageAlt: 'IVR Oil Seals — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('IVR Oil Seals'),
    featured: false,
    sortOrder: 2
  },

  {
    id: 'jk-pioneer-oil-seal',
    name: 'J K Pioneer Oil Seal',
    slug: 'jk-pioneer-oil-seal',
    categoryId: 'oil-seal',
    categoryName: 'Oil Seal',
    shortDescription: 'J K Pioneer brand oil seals — a trusted Indian manufacturer supplying quality rotary shaft seals for automotive and industrial rotating equipment.',
    fullDescription: `J K Pioneer Oil Seals are manufactured by one of India's well-established seal manufacturers, providing reliable quality for standard oil sealing applications in automotive, industrial and agricultural equipment. Their wide size range and consistent availability make them a popular choice for maintenance and OEM applications across India.\n\nBurhani Seal Centre stocks J K Pioneer oil seals in common sizes for rapid supply to industrial customers in Kolkata and across West Bengal.`,
    features: [
      'Trusted Indian brand with consistent dimensional accuracy',
      'Available in single-lip and double-lip configurations',
      'NBR rubber for petroleum and oil resistance',
      'Carbon steel reinforcing case for stability',
      'Suitable for standard industrial rotating equipment',
      'Wide size range covering common shaft dimensions',
      'Cost-effective for high-volume maintenance requirements',
      'Prompt local availability from stock'
    ],
    specifications: [
      { label: 'Brand',        value: 'J K Pioneer'               },
      { label: 'Material',     value: 'NBR (Nitrile Rubber)'      },
      { label: 'Seal Style',   value: 'Single Lip / Double Lip'   },
      { label: 'Case',         value: 'Carbon Steel'              },
      { label: 'Application',  value: 'Automotive / Industrial'   },
      { label: 'Sizes',        value: 'Standard metric range'     },
      { label: 'Temperature',  value: '-40°C to +120°C'           },
      { label: 'Origin',       value: 'Made in India'             }
    ],
    applications: [
      'Automotive crankshaft and gearbox sealing',
      'Two-wheeler and four-wheeler engine seals',
      'Industrial pump and motor shaft sealing',
      'Agricultural equipment maintenance',
      'General rotating machinery replacement seals'
    ],
    industriesServed: ['Automotive', 'Chemical Industry', 'Textile Industry', 'Cement Industry'],
    imageUrl: 'assets/images/products/jk-pioneer-oil-seal.png',
    imageAlt: 'J K Pioneer Oil Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('J K Pioneer Oil Seal'),
    featured: false,
    sortOrder: 3
  },

  {
    id: '5mm-rubber-oil-seal',
    name: '5 mm Rubber Oil Seal',
    slug: '5mm-rubber-oil-seal',
    categoryId: 'oil-seal',
    categoryName: 'Oil Seal',
    shortDescription: '5 mm rubber oil seals for small-bore rotating shafts in precision instruments, small pumps, miniature motors and light industrial equipment.',
    fullDescription: `The 5 mm Rubber Oil Seal is a small-bore sealing element designed for miniature rotating shafts found in precision instruments, small electric motors, miniature pumps and light-duty machinery. Despite their small size, these seals provide reliable lubricant retention and contamination exclusion.\n\nBurhani Seal Centre supplies 5 mm rubber oil seals in NBR and other elastomer grades to meet various temperature and media compatibility requirements.`,
    features: [
      'Designed for 5 mm shaft diameter applications',
      'Rubber construction for flexibility and sealing performance',
      'Suitable for small pumps, instruments and miniature motors',
      'Single lip design for clean, low-contamination environments',
      'Available in NBR for oil and petroleum resistance',
      'Dimensional accuracy for proper fit and function',
      'Compact design for space-constrained applications',
      'Cost-effective for high-volume replacement requirements'
    ],
    specifications: [
      { label: 'Shaft Diameter', value: '5 mm'          },
      { label: 'Material',       value: 'NBR Rubber'    },
      { label: 'Seal Style',     value: 'Single Lip'    },
      { label: 'Temperature',    value: '-30°C to +100°C' },
      { label: 'Application',    value: 'Small bore rotating shafts' },
      { label: 'Colour',         value: 'Black'         },
      { label: 'Origin',         value: 'Made in India' },
      { label: 'Availability',   value: 'In stock'      }
    ],
    applications: [
      'Miniature electric motors and gearheads',
      'Small precision pumps',
      'Instrumentation and metering equipment',
      'Light-duty industrial machinery',
      'Food and beverage small equipment sealing'
    ],
    industriesServed: ['Chemical Industry', 'Food Industry', 'Pharmaceutical Industry'],
    imageUrl: 'assets/images/products/5mm-rubber-oil-seal.png',
    imageAlt: '5 mm Rubber Oil Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('5 mm Rubber Oil Seal'),
    featured: false,
    sortOrder: 4
  },

  {
    id: '8mm-rubber-oil-seal',
    name: '8 mm Rubber Oil Seal',
    slug: '8mm-rubber-oil-seal',
    categoryId: 'oil-seal',
    categoryName: 'Oil Seal',
    shortDescription: '8 mm rubber oil seals for small shaft rotating equipment including compact gearboxes, small motors and precision mechanical assemblies.',
    fullDescription: `The 8 mm Rubber Oil Seal is engineered for 8 mm shaft diameter applications where reliable lubrication retention is required in compact mechanical assemblies. Used extensively in small gearboxes, compact motors, and light industrial equipment, these seals maintain their sealing integrity across the operational temperature and speed range of the equipment.\n\nBurhani Seal Centre maintains stock of 8 mm oil seals in NBR for prompt supply to customers in Kolkata and across India.`,
    features: [
      'Designed specifically for 8 mm shaft diameter',
      'NBR rubber for oil, fuel and petroleum resistance',
      'Compact design suitable for tight space envelope',
      'Reliable sealing at standard industrial shaft speeds',
      'Single lip design standard, double lip available',
      'Carbon steel reinforcing case',
      'Consistent dimensional accuracy for proper installation',
      'Available in standard quantities from stock'
    ],
    specifications: [
      { label: 'Shaft Diameter', value: '8 mm'          },
      { label: 'Material',       value: 'NBR Rubber'    },
      { label: 'Case',           value: 'Carbon Steel'  },
      { label: 'Seal Style',     value: 'Single Lip'    },
      { label: 'Temperature',    value: '-30°C to +100°C' },
      { label: 'Colour',         value: 'Black'         },
      { label: 'Origin',         value: 'Made in India' },
      { label: 'MOQ',            value: '10 pieces'     }
    ],
    applications: [
      'Small gearboxes and reducers',
      'Compact electric motors',
      'Light-duty pumps and compressors',
      'Precision mechanical assemblies',
      'Consumer and industrial appliance motors'
    ],
    industriesServed: ['Chemical Industry', 'Textile Industry', 'Food Industry'],
    imageUrl: 'assets/images/products/8mm-rubber-oil-seal.png',
    imageAlt: '8 mm Rubber Oil Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('8 mm Rubber Oil Seal'),
    featured: false,
    sortOrder: 5
  },

  {
    id: '4mm-rubber-oil-seal',
    name: '4 mm Rubber Oil Seal',
    slug: '4mm-rubber-oil-seal',
    categoryId: 'oil-seal',
    categoryName: 'Oil Seal',
    shortDescription: '4 mm rubber oil seals for very small shaft diameter applications in precision instruments, micro motors and miniature mechanical devices.',
    fullDescription: `The 4 mm Rubber Oil Seal serves ultra-compact rotating shaft applications where standard oil seals are too large. Used in precision instruments, micro motors and miniature mechanical devices, these tiny seals perform the same critical function as their larger counterparts — retaining lubricant and excluding contamination.\n\nBurhani Seal Centre supplies these in NBR rubber as standard, with other grades available on request.`,
    features: [
      '4 mm shaft diameter — ultra-compact form factor',
      'NBR rubber construction',
      'For precision instruments and micro motor shafts',
      'Reliable sealing at low shaft speeds',
      'Single lip design',
      'Dimensional accuracy for correct fitment',
      'Available in small and bulk quantities',
      'Prompt supply from Kolkata stock'
    ],
    specifications: [
      { label: 'Shaft Diameter', value: '4 mm'        },
      { label: 'Material',       value: 'NBR Rubber'  },
      { label: 'Seal Style',     value: 'Single Lip'  },
      { label: 'Application',    value: 'Precision instruments, micro motors' },
      { label: 'Temperature',    value: '-20°C to +100°C' },
      { label: 'Colour',         value: 'Black'       },
      { label: 'Origin',         value: 'India'       },
      { label: 'MOQ',            value: '10 pieces'   }
    ],
    applications: [
      'Micro and miniature electric motors',
      'Precision measuring instruments',
      'Medical and dental equipment',
      'Miniature gear assemblies',
      'Electronic actuators and positioners'
    ],
    industriesServed: ['Pharmaceutical Industry', 'Chemical Industry'],
    imageUrl: 'assets/images/products/4mm-rubber-oil-seal.png',
    imageAlt: '4 mm Rubber Oil Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('4 mm Rubber Oil Seal'),
    featured: false,
    sortOrder: 6
  },

  {
    id: '2mm-rubber-oil-seal',
    name: '2 mm Rubber Oil Seal',
    slug: '2mm-rubber-oil-seal',
    categoryId: 'oil-seal',
    categoryName: 'Oil Seal',
    shortDescription: '2 mm rubber oil seals for the smallest rotating shaft applications in miniature mechanisms, watches, instruments and micro-machinery.',
    fullDescription: `The 2 mm Rubber Oil Seal is designed for the smallest rotating shaft sealing applications. These seals find use in miniature mechanisms, precision instruments, and specialised micro-machinery where effective sealing is required on very small shafts.\n\nBurhani Seal Centre supplies 2 mm rubber oil seals to customers requiring precision sealing solutions at the micro scale.`,
    features: [
      '2 mm shaft diameter — ultra-miniature sealing solution',
      'Rubber construction for reliable micro-sealing',
      'For miniature mechanisms and precision instruments',
      'Consistent dimensional accuracy',
      'Single lip design',
      'NBR material standard',
      'Available in small quantities',
      'Prompt supply from Kolkata'
    ],
    specifications: [
      { label: 'Shaft Diameter', value: '2 mm'           },
      { label: 'Material',       value: 'NBR Rubber'     },
      { label: 'Seal Style',     value: 'Single Lip'     },
      { label: 'Application',    value: 'Miniature mechanisms' },
      { label: 'Temperature',    value: '-20°C to +100°C' },
      { label: 'Colour',         value: 'Black'          },
      { label: 'Origin',         value: 'India'          },
      { label: 'MOQ',            value: '10 pieces'      }
    ],
    applications: [
      'Miniature precision mechanisms',
      'Specialised instrument shafts',
      'Micro-pump assemblies',
      'Precision timing and drive mechanisms',
      'Custom micro-machinery'
    ],
    industriesServed: ['Pharmaceutical Industry', 'Chemical Industry'],
    imageUrl: 'assets/images/products/2mm-rubber-oil-seal.png',
    imageAlt: '2 mm Rubber Oil Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('2 mm Rubber Oil Seal'),
    featured: false,
    sortOrder: 7
  },

  {
    id: '3mm-rubber-oil-seal',
    name: '3 mm Rubber Oil Seal',
    slug: '3mm-rubber-oil-seal',
    categoryId: 'oil-seal',
    categoryName: 'Oil Seal',
    shortDescription: '3 mm rubber oil seals for miniature shaft sealing in small instruments, precision equipment and compact mechanical assemblies.',
    fullDescription: `The 3 mm Rubber Oil Seal provides effective lubricant retention and contamination exclusion for 3 mm diameter rotating shafts found in miniature instruments, compact equipment and specialised mechanical assemblies.\n\nBurhani Seal Centre supplies this size in NBR rubber with consistent quality and prompt availability from their Kolkata premises.`,
    features: [
      '3 mm shaft diameter sealing solution',
      'NBR rubber for oil resistance',
      'For small instruments and compact equipment',
      'Single lip design',
      'Dimensional accuracy for proper fit',
      'Available in small batch quantities',
      'In-stock at Kolkata',
      'Other elastomers available on request'
    ],
    specifications: [
      { label: 'Shaft Diameter', value: '3 mm'        },
      { label: 'Material',       value: 'NBR Rubber'  },
      { label: 'Seal Style',     value: 'Single Lip'  },
      { label: 'Temperature',    value: '-20°C to +100°C' },
      { label: 'Colour',         value: 'Black'       },
      { label: 'Application',    value: 'Small instruments, compact machinery' },
      { label: 'Origin',         value: 'India'       },
      { label: 'MOQ',            value: '10 pieces'   }
    ],
    applications: [
      'Small instrumentation shafts',
      'Compact gear assemblies',
      'Light industrial miniature equipment',
      'Precision measurement devices',
      'Small-scale automation components'
    ],
    industriesServed: ['Chemical Industry', 'Pharmaceutical Industry'],
    imageUrl: 'assets/images/products/3mm-rubber-oil-seal.png',
    imageAlt: '3 mm Rubber Oil Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('3 mm Rubber Oil Seal'),
    featured: false,
    sortOrder: 8
  },

  {
    id: '20mm-nitrile-oil-seal',
    name: '20 mm Nitrile Oil Seal',
    slug: '20mm-nitrile-oil-seal',
    categoryId: 'oil-seal',
    categoryName: 'Oil Seal',
    shortDescription: '20 mm nitrile (NBR) oil seal for standard rotating shaft applications in pumps, gearboxes, motors and general industrial equipment.',
    fullDescription: `The 20 mm Nitrile Oil Seal is one of the most commonly specified oil seal sizes across the industrial sector. Made from high-quality nitrile (NBR) rubber, it provides excellent resistance to petroleum oils, hydraulic fluids and aliphatic hydrocarbons — making it the standard choice for pump shafts, gearbox output shafts and motor shaft sealing.\n\nBurhani Seal Centre stocks this size in quantity for immediate supply to industrial customers.`,
    features: [
      '20 mm shaft diameter — widely used standard size',
      'Nitrile (NBR) rubber for excellent oil resistance',
      'Suitable for pump, gearbox and motor shafts',
      'Single lip or double lip options available',
      'Carbon steel reinforcing case',
      'Garter spring for consistent lip contact force',
      'Good temperature range for standard applications',
      'In-stock for immediate supply'
    ],
    specifications: [
      { label: 'Shaft Diameter', value: '20 mm'        },
      { label: 'Material',       value: 'Nitrile (NBR)' },
      { label: 'Seal Style',     value: 'Single / Double Lip' },
      { label: 'Case',           value: 'Carbon Steel' },
      { label: 'Temperature',    value: '-40°C to +120°C' },
      { label: 'Media',          value: 'Petroleum oils, hydraulic fluids' },
      { label: 'Colour',         value: 'Black'        },
      { label: 'MOQ',            value: '10 pieces'    }
    ],
    applications: [
      'Centrifugal pump shaft sealing',
      'Industrial gearbox output shafts',
      'Electric motor shaft ends',
      'Hydraulic power unit components',
      'General rotating machinery sealing'
    ],
    industriesServed: ['Chemical Industry', 'Water Treatment', 'Steel Industry', 'Cement Industry', 'Power Plants'],
    imageUrl: 'assets/images/products/20mm-nitrile-oil-seal.png',
    imageAlt: '20 mm Nitrile Oil Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('20 mm Nitrile Oil Seal'),
    featured: false,
    sortOrder: 9
  },

  {
    id: '20mm-viton-oil-seal',
    name: '20 mm Viton Oil Seal',
    slug: '20mm-viton-oil-seal',
    categoryId: 'oil-seal',
    categoryName: 'Oil Seal',
    shortDescription: '20 mm Viton (FKM) oil seal for high-temperature and chemically aggressive rotating shaft applications in industrial processing equipment.',
    fullDescription: `The 20 mm Viton Oil Seal is manufactured from Viton (FKM) fluoroelastomer — the premium choice for rotating shaft sealing in high-temperature, high-chemical-resistance applications where standard NBR seals would fail. Viton seals handle temperatures up to +200°C and resist aggressive chemicals, fuels and solvents.\n\nBurhani Seal Centre supplies Viton oil seals for critical applications in chemical plants, pharmaceutical facilities and high-temperature process equipment.`,
    features: [
      '20 mm shaft diameter in premium Viton (FKM) material',
      'High-temperature capability up to +200°C continuous',
      'Excellent chemical resistance to acids, solvents and fuels',
      'Low compression set for long-term sealing reliability',
      'Suitable for high-speed rotating shafts',
      'Resistant to ozone, UV and weathering',
      'Good resistance to aggressive industrial chemicals',
      'Available in standard and custom dimensions'
    ],
    specifications: [
      { label: 'Shaft Diameter', value: '20 mm'           },
      { label: 'Material',       value: 'Viton (FKM)'     },
      { label: 'Seal Style',     value: 'Single / Double Lip' },
      { label: 'Temperature',    value: '-20°C to +200°C' },
      { label: 'Chemical Resistance', value: 'Acids, solvents, fuels, aromatics' },
      { label: 'Colour',         value: 'Brown / Black'   },
      { label: 'Case',           value: 'Carbon Steel / SS' },
      { label: 'Applications',   value: 'Chemical, pharma, high-temp industrial' }
    ],
    applications: [
      'Chemical process pump shaft sealing',
      'High-temperature industrial equipment',
      'Pharmaceutical manufacturing machinery',
      'Fuel and solvent handling equipment',
      'Hot oil system rotating shafts'
    ],
    industriesServed: ['Chemical Industry', 'Pharmaceutical Industry', 'Oil & Gas', 'Petrochemical', 'Power Plants'],
    imageUrl: 'assets/images/products/20mm-viton-oil-seal.png',
    imageAlt: '20 mm Viton Oil Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('20 mm Viton Oil Seal'),
    featured: false,
    sortOrder: 10
  },

  {
    id: 'gold-super-oil-seal',
    name: 'Gold Super Oil Seal',
    slug: 'gold-super-oil-seal',
    categoryId: 'oil-seal',
    categoryName: 'Oil Seal',
    shortDescription: 'Gold Super oil seal — a high-performance sealing component in premium-grade rubber and reinforced metal for excellent durability, heat resistance and long service life.',
    fullDescription: `The Gold Super Oil Seal is a high-performance sealing component designed to prevent leakage of lubricants and block contaminants from entering mechanical systems. Manufactured using premium-grade rubber and reinforced metal materials, this oil seal ensures excellent durability, heat resistance and long service life even in demanding industrial environments.\n\nBurhani Seal Centre supplies Gold Super Oil Seals as a reliable and durable option for standard and demanding rotating shaft sealing applications.`,
    features: [
      'Premium-grade rubber with reinforced metal construction',
      'Excellent durability in demanding industrial environments',
      'Superior heat resistance for longer service life',
      'Effective contamination exclusion',
      'Reliable lubricant retention under operating conditions',
      'Standard and non-standard sizes available',
      'Suitable for motors, pumps and gearboxes',
      'Competitive pricing for volume requirements'
    ],
    specifications: [
      { label: 'Brand',        value: 'Gold Super'              },
      { label: 'Material',     value: 'Premium Rubber + Metal'  },
      { label: 'Construction', value: 'Reinforced Metal Case'   },
      { label: 'Seal Style',   value: 'Single / Double Lip'     },
      { label: 'Heat Resistance', value: 'High'                 },
      { label: 'Application',  value: 'Motors, pumps, gearboxes' },
      { label: 'Durability',   value: 'Long service life'       },
      { label: 'Origin',       value: 'India'                   }
    ],
    applications: [
      'Electric motors and generators',
      'Industrial and agricultural pumps',
      'Gearboxes and speed reducers',
      'General industrial rotating machinery',
      'OEM and replacement applications'
    ],
    industriesServed: ['Chemical Industry', 'Steel Industry', 'Cement Industry', 'Water Treatment'],
    imageUrl: 'assets/images/products/gold-super-oil-seal.png',
    imageAlt: 'Gold Super Oil Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Gold Super Oil Seal'),
    featured: false,
    sortOrder: 11
  },

  {
    id: 'craft-seal',
    name: 'Craft Seal',
    slug: 'craft-seal',
    categoryId: 'oil-seal',
    categoryName: 'Oil Seal',
    shortDescription: 'Craft Seal — a durable, eco-friendly sealing solution made from high-quality kraft paper with excellent adhesion on cartons, pouches and industrial packaging.',
    fullDescription: `The Craft Seal is a durable, eco-friendly sealing solution made from high-quality kraft paper. Designed for both commercial and retail packaging, these seals provide excellent adhesion on cartons, pouches, paper bags, envelopes and gift packaging.\n\nBurhani Seal Centre supplies Craft Seals for industrial packaging applications where a secure, tamper-evident, paper-based sealing solution is required.`,
    features: [
      'Made from high-quality kraft paper',
      'Eco-friendly and biodegradable sealing solution',
      'Excellent adhesion on cartons, pouches and paper bags',
      'Suitable for commercial and retail packaging',
      'Tamper-evident sealing properties',
      'Available in various sizes and configurations',
      'Cost-effective for high-volume packaging applications',
      'Compatible with standard packaging lines'
    ],
    specifications: [
      { label: 'Material',       value: 'Kraft Paper'           },
      { label: 'Type',           value: 'Packaging Seal'        },
      { label: 'Application',    value: 'Cartons, pouches, envelopes' },
      { label: 'Adhesion',       value: 'Excellent on paper surfaces' },
      { label: 'Eco-Friendly',   value: 'Yes — biodegradable'   },
      { label: 'Tamper Evidence',value: 'Yes'                   },
      { label: 'Sizes',          value: 'Various — on request'  },
      { label: 'Origin',         value: 'India'                 }
    ],
    applications: [
      'Industrial and commercial carton sealing',
      'Retail packaging and gift wrapping',
      'Envelope and paper bag sealing',
      'Food and consumer goods packaging',
      'Eco-friendly packaging initiatives'
    ],
    industriesServed: ['Food Industry', 'Chemical Industry'],
    imageUrl: 'assets/images/products/craft-seal.png',
    imageAlt: 'Craft Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Craft Seal'),
    featured: false,
    sortOrder: 12
  },

  // ══════════════════════════════════════════
  // SEALS  (5 products)
  // ══════════════════════════════════════════

  {
    id: 'viton-oil-seal',
    name: 'Viton Oil Seal',
    slug: 'viton-oil-seal',
    categoryId: 'seals',
    categoryName: 'Seals',
    shortDescription: 'Viton (FKM) oil seals for high-temperature and chemical-resistant rotating shaft sealing in chemical plants, refineries and process industries.',
    fullDescription: `Viton Oil Seals are manufactured from Viton (FKM) fluoroelastomer — the material of choice whenever standard NBR oil seals cannot withstand the operating temperature or the chemical aggressiveness of the media. With a continuous operating temperature up to +200°C and outstanding resistance to fuels, aromatic solvents, acids and ozone, Viton oil seals are the premium solution for demanding rotating shaft sealing.\n\nBurhani Seal Centre supplies Viton oil seals in a comprehensive range of metric and imperial sizes, with single-lip and double-lip options available.`,
    features: [
      'Viton (FKM) fluoroelastomer for premium chemical and heat resistance',
      'Temperature capability: -20°C to +200°C continuous',
      'Resistant to fuels, aromatic solvents, acids and ozone',
      'Low compression set for long service life',
      'Available in single-lip and double-lip designs',
      'Metric and imperial sizes stocked',
      'Superior performance in chemical and refinery environments',
      'Brown or black colour — identifies as Viton grade'
    ],
    specifications: [
      { label: 'Material',       value: 'Viton (FKM / FPM)'    },
      { label: 'Temperature',    value: '-20°C to +200°C'       },
      { label: 'Chemical Resistance', value: 'Acids, solvents, fuels, aromatics, ozone' },
      { label: 'Seal Style',     value: 'Single Lip / Double Lip' },
      { label: 'Hardness',       value: '70 Shore A (standard)' },
      { label: 'Colour',         value: 'Brown / Black'         },
      { label: 'Sizes',          value: 'Metric and imperial range' },
      { label: 'Standard',       value: 'DIN 3760 compatible'  }
    ],
    applications: [
      'Chemical process equipment rotating shafts',
      'High-temperature pump and motor sealing',
      'Refinery and petrochemical rotating equipment',
      'Solvent and acid handling machinery',
      'Hot oil and thermal fluid system shafts'
    ],
    industriesServed: ['Chemical Industry', 'Oil & Gas', 'Petrochemical', 'Pharmaceutical Industry', 'Power Plants'],
    imageUrl: 'assets/images/products/viton-oil-seal.png',
    imageAlt: 'Viton Oil Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Viton Oil Seal'),
    featured: true,
    sortOrder: 13
  },

  {
    id: 'double-lip-seals',
    name: 'Double Lip Seals',
    slug: 'double-lip-seals',
    categoryId: 'seals',
    categoryName: 'Seals',
    shortDescription: 'Double lip oil seals providing superior dual-direction protection — retaining lubricant on one side while excluding contaminants on the other, for dirty industrial environments.',
    fullDescription: `Double Lip Seals feature two sealing lips — a primary lip that retains the lubricant and a secondary dust lip that excludes external contaminants such as dirt, dust, mud and water. This dual-lip construction makes them the preferred choice for equipment operating in harsh, contaminated or outdoor environments where a single lip seal would be compromised by contamination ingress.\n\nBurhani Seal Centre supplies double lip seals in NBR, Viton and other elastomers, in a comprehensive range of shaft and bore sizes for industrial and automotive applications.`,
    features: [
      'Dual lip design: primary sealing lip + secondary dust/contaminant exclusion lip',
      'Superior protection in dirty, dusty and wet environments',
      'Primary lip retains lubricant; secondary lip excludes contaminants',
      'Available in NBR, Viton and other elastomers',
      'Suitable for harsh outdoor and industrial environments',
      'Comprehensive shaft and bore size range',
      'Standard and non-standard sizes available',
      'Longer maintenance intervals due to superior contamination exclusion'
    ],
    specifications: [
      { label: 'Lip Configuration', value: 'Double Lip (TC / TCV type)'   },
      { label: 'Primary Lip',       value: 'Oil retention'                 },
      { label: 'Secondary Lip',     value: 'Contaminant exclusion'         },
      { label: 'Materials',         value: 'NBR / Viton / Neoprene'        },
      { label: 'Temperature',       value: '-40°C to +120°C (NBR)'         },
      { label: 'Case',              value: 'Carbon Steel / Stainless Steel' },
      { label: 'Seal Type',         value: 'DIN 3760 Type TC'              },
      { label: 'Applications',      value: 'Harsh / outdoor / dirty environments' }
    ],
    applications: [
      'Agricultural and earthmoving equipment in dusty fields',
      'Mining and quarrying machinery',
      'Outdoor industrial equipment exposed to water and mud',
      'Steel and cement plant rotating equipment',
      'Construction and heavy equipment axles'
    ],
    industriesServed: ['Steel Industry', 'Cement Industry', 'Chemical Industry', 'Water Treatment'],
    imageUrl: 'assets/images/products/double-lip-seals.png',
    imageAlt: 'Double Lip Seals — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Double Lip Seals'),
    featured: false,
    sortOrder: 14
  },

  {
    id: 'pu-hydraulic-seal',
    name: 'PU Hydraulic Seal',
    slug: 'pu-hydraulic-seal',
    categoryId: 'seals',
    categoryName: 'Seals',
    shortDescription: 'Polyurethane (PU) hydraulic seals — U-cups and rod seals for hydraulic cylinders offering superior wear resistance, high-pressure capability and long service life.',
    fullDescription: `Polyurethane (PU) Hydraulic Seals are the preferred sealing element for hydraulic cylinders and actuators in industrial and mobile hydraulic applications. Polyurethane offers significantly higher abrasion resistance, tear strength and extrusion resistance compared to standard NBR, making PU seals the professional choice for high-pressure, high-cycle hydraulic cylinder applications.\n\nBurhani Seal Centre supplies PU hydraulic seals in U-cup, hat, T-cup and other profiles for both piston and rod sealing in hydraulic cylinders across a wide bore range.`,
    features: [
      'Polyurethane material for superior abrasion and wear resistance',
      'High-pressure capability — up to 400 bar',
      'Excellent tear strength and extrusion resistance',
      'Available in U-cup, hat seal and T-cup profiles',
      'Suitable for both piston and rod sealing',
      'Low friction variants available for energy-efficient systems',
      'Wide operating temperature range',
      'Compatible with standard hydraulic mineral oils'
    ],
    specifications: [
      { label: 'Material',      value: 'Polyurethane (PU)'       },
      { label: 'Pressure',      value: 'Up to 400 bar'           },
      { label: 'Temperature',   value: '-30°C to +110°C'         },
      { label: 'Profiles',      value: 'U-cup / Hat / T-cup / Step seal' },
      { label: 'Hardness',      value: '90–95 Shore A'           },
      { label: 'Fluid',         value: 'Mineral oil HM/HLP'      },
      { label: 'Bore Range',    value: '20 mm to 1000 mm'        },
      { label: 'Speed',         value: 'Up to 1.5 m/s'          }
    ],
    applications: [
      'Industrial hydraulic cylinder piston and rod sealing',
      'Mobile hydraulics — excavators, cranes, loaders',
      'Injection moulding machine hydraulic cylinders',
      'Press and stamping machine hydraulic actuators',
      'Construction equipment hydraulic systems'
    ],
    industriesServed: ['Steel Industry', 'Cement Industry', 'Chemical Industry', 'Power Plants', 'Oil & Gas'],
    imageUrl: 'assets/images/products/pu-hydraulic-seal.png',
    imageAlt: 'PU Hydraulic Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('PU Hydraulic Seal'),
    featured: true,
    sortOrder: 15
  },

  {
    id: 'hydraulic-cylinder-seals',
    name: 'Hydraulic Cylinder Seals',
    slug: 'hydraulic-cylinder-seals',
    categoryId: 'seals',
    categoryName: 'Seals',
    shortDescription: 'Complete hydraulic cylinder sealing solutions including piston seals, rod seals, wiper seals and guide rings for all types of industrial hydraulic cylinders.',
    fullDescription: `Hydraulic Cylinder Seals are precision-engineered sealing elements that maintain fluid pressure within hydraulic cylinders while excluding contamination from entering the system. A complete hydraulic cylinder seal assembly comprises piston seals, rod seals, wiper seals and guide rings — each serving a specific sealing function.\n\nBurhani Seal Centre supplies complete seal sets for hydraulic cylinders as well as individual seal components, in NBR, PU and PTFE materials compatible with all standard industrial hydraulic cylinder bore sizes.`,
    features: [
      'Complete cylinder seal sets available (piston + rod + wiper + guide ring)',
      'Individual seal components also supplied separately',
      'Materials: NBR, PU, PTFE for different pressure/temperature requirements',
      'Suitable for single-acting and double-acting cylinders',
      'Standard profiles conforming to ISO 6547 / DIN 24340',
      'Wide bore range from 20 mm to 1000 mm',
      'High-pressure rated to 700 bar peak',
      'Compatible with mineral oil, HLP, HFD hydraulic fluids'
    ],
    specifications: [
      { label: 'Seal Types',    value: 'Piston / Rod / Wiper / Guide Ring'   },
      { label: 'Materials',     value: 'NBR / PU / PTFE / PEEK backup rings' },
      { label: 'Pressure',      value: 'Up to 700 bar peak'                   },
      { label: 'Temperature',   value: '-30°C to +110°C'                      },
      { label: 'Bore Range',    value: '20 mm to 1000 mm'                     },
      { label: 'Fluid',         value: 'HM / HLP / HFB / HFD mineral oils'   },
      { label: 'Standard',      value: 'ISO 6547 / ISO 6195 / DIN 24340'     },
      { label: 'Configuration', value: 'Single-acting / Double-acting'        }
    ],
    applications: [
      'Industrial press and forming machine hydraulic cylinders',
      'Mobile hydraulic cylinders on excavators and cranes',
      'Injection moulding machine actuators',
      'Steel plant and rolling mill hydraulics',
      'Marine and offshore hydraulic equipment'
    ],
    industriesServed: ['Steel Industry', 'Cement Industry', 'Chemical Industry', 'Power Plants', 'Oil & Gas'],
    imageUrl: 'assets/images/products/hydraulic-cylinder-seals.png',
    imageAlt: 'Hydraulic Cylinder Seals — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Hydraulic Cylinder Seals'),
    featured: true,
    sortOrder: 16
  },

  {
    id: 'hydraulic-jack-seal',
    name: 'Hydraulic Jack Seal',
    slug: 'hydraulic-jack-seal',
    categoryId: 'seals',
    categoryName: 'Seals',
    shortDescription: 'Hydraulic jack seals for bottle jacks, floor jacks, workshop presses and lifting equipment — preventing fluid leakage and maintaining lifting capacity.',
    fullDescription: `Hydraulic Jack Seals are specifically designed for the hydraulic cylinders used in bottle jacks, floor jacks, workshop presses, vehicle lifting equipment and other low-to-medium pressure hydraulic lifting applications. These seals must maintain effective sealing under intermittent loading, occasional overloading and long static holding periods.\n\nBurhani Seal Centre supplies hydraulic jack seals as complete seal kits and individual components for popular jack makes and bore sizes.`,
    features: [
      'Designed for bottle jacks, floor jacks and lifting presses',
      'Maintains sealing under intermittent and static loading',
      'Effective under occasional overload conditions',
      'Available as complete seal kits for common jack models',
      'NBR and PU materials available',
      'Easy to install during routine jack servicing',
      'Suitable for hydraulic oil and jack fluid media',
      'Bore sizes covering most standard jack cylinder dimensions'
    ],
    specifications: [
      { label: 'Application',   value: 'Bottle jacks, floor jacks, presses' },
      { label: 'Material',      value: 'NBR / PU'                           },
      { label: 'Pressure',      value: 'Up to 200 bar'                      },
      { label: 'Temperature',   value: '-20°C to +100°C'                    },
      { label: 'Media',         value: 'Hydraulic oil / Jack fluid'         },
      { label: 'Supply',        value: 'Individual seals or complete seal kit' },
      { label: 'Bore Range',    value: 'Standard jack cylinder sizes'       },
      { label: 'MOQ',           value: '5 pieces / 1 kit'                  }
    ],
    applications: [
      'Bottle and floor jack maintenance and overhaul',
      'Workshop hydraulic press seal replacement',
      'Vehicle workshop lifting equipment service',
      'Industrial scissor lift and platform sealing',
      'Garage and service centre hydraulic equipment'
    ],
    industriesServed: ['Steel Industry', 'Cement Industry', 'Chemical Industry'],
    imageUrl: 'assets/images/products/hydraulic-jack-seal.png',
    imageAlt: 'Hydraulic Jack Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Hydraulic Jack Seal'),
    featured: false,
    sortOrder: 17
  },

  // ══════════════════════════════════════════
  // PU COUPLING SPIDER  (3 products)
  // ══════════════════════════════════════════

  {
    id: '1-inch-pu-coupling-spider',
    name: '1 inch PU Coupling Spider',
    slug: '1-inch-pu-coupling-spider',
    categoryId: 'pu-coupling-spider',
    categoryName: 'PU Coupling Spider',
    shortDescription: '1 inch polyurethane (PU) coupling spider element for jaw-type flexible shaft couplings — providing vibration damping, shock absorption and misalignment compensation.',
    fullDescription: `The 1 inch PU Coupling Spider is a flexible polyurethane element used in jaw-type (claw) flexible shaft couplings. The spider element sits between the two jaw coupling hubs, transmitting torque while absorbing vibration, shock loads and compensating for minor shaft misalignment.\n\nPolyurethane spiders offer superior wear resistance, oil resistance and load-carrying capacity compared to rubber spiders, making them the preferred choice for demanding industrial pump-motor drive connections.\n\nBurhani Seal Centre supplies 1 inch PU coupling spiders for standard jaw coupling sizes used across industrial applications in West Bengal and across India.`,
    features: [
      '1 inch size — fits standard 1 inch jaw coupling hubs',
      'Polyurethane material for excellent wear and oil resistance',
      'Transmits torque while absorbing vibration and shock',
      'Compensates for angular, parallel and axial shaft misalignment',
      'Silent operation — reduces noise transmission between driver and driven',
      'Easy replacement without disturbing pump-motor alignment',
      'Available in standard and high-hardness PU grades',
      'Oil and chemical resistant PU material'
    ],
    specifications: [
      { label: 'Size',           value: '1 inch'                            },
      { label: 'Material',       value: 'Polyurethane (PU)'                 },
      { label: 'Type',           value: 'Jaw Coupling / Spider Element'     },
      { label: 'Torque Capacity', value: 'As per coupling size rating'       },
      { label: 'Hardness',       value: '92–98 Shore A'                    },
      { label: 'Temperature',    value: '-30°C to +80°C'                   },
      { label: 'Oil Resistance', value: 'Good (NBR/PU composite available)' },
      { label: 'MOQ',            value: '10 pieces'                        }
    ],
    applications: [
      'Pump-motor flexible drive connections',
      'Compressor and fan drive couplings',
      'Conveyor drive shaft connections',
      'General industrial motor-driven equipment',
      'Light-duty torque transmission with vibration damping'
    ],
    industriesServed: ['Chemical Industry', 'Water Treatment', 'Textile Industry', 'Steel Industry', 'Food Industry'],
    imageUrl: 'assets/images/products/1-inch-pu-coupling-spider.jpg',
    imageAlt: '1 inch PU Coupling Spider — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('1 inch PU Coupling Spider'),
    featured: false,
    sortOrder: 18
  },

  {
    id: '2-inch-pu-coupling-spider',
    name: '2 inch PU Coupling Spider',
    slug: '2-inch-pu-coupling-spider',
    categoryId: 'pu-coupling-spider',
    categoryName: 'PU Coupling Spider',
    shortDescription: '2 inch polyurethane coupling spider for jaw-type flexible couplings on larger pump-motor assemblies — high-torque vibration isolation and misalignment compensation.',
    fullDescription: `The 2 inch PU Coupling Spider is designed for larger jaw-type flexible couplings used in higher-torque pump-motor assemblies, compressors and industrial drive systems. The polyurethane construction provides excellent load capacity, oil resistance and long service life compared to standard rubber spider elements.\n\nBurhani Seal Centre supplies 2 inch PU coupling spiders from stock for immediate supply to industrial customers requiring replacement elements for their flexible jaw couplings.`,
    features: [
      '2 inch size for larger jaw coupling hub assemblies',
      'Polyurethane for higher torque capacity and wear resistance',
      'Vibration isolation between motor and driven equipment',
      'Compensates for shaft misalignment',
      'Higher load capacity than rubber spider equivalents',
      'Oil and lubricant resistant',
      'Easy in-situ replacement without full disassembly',
      'Available in standard PU and high-performance grades'
    ],
    specifications: [
      { label: 'Size',           value: '2 inch'                        },
      { label: 'Material',       value: 'Polyurethane (PU)'             },
      { label: 'Type',           value: 'Jaw Coupling Spider Element'   },
      { label: 'Hardness',       value: '92–98 Shore A'                },
      { label: 'Temperature',    value: '-30°C to +80°C'               },
      { label: 'Oil Resistance', value: 'Good'                          },
      { label: 'Torque Capacity', value: 'Per coupling rating'          },
      { label: 'MOQ',            value: '10 pieces'                    }
    ],
    applications: [
      'Large pump-motor drive connections',
      'Industrial compressor drive couplings',
      'Heavy conveyor and fan drive systems',
      'High-torque rotating machinery connections',
      'Industrial agitator and mixer drive coupling'
    ],
    industriesServed: ['Chemical Industry', 'Water Treatment', 'Steel Industry', 'Cement Industry', 'Power Plants'],
    imageUrl: 'assets/images/products/2-inch-pu-coupling-spider.jpg',
    imageAlt: '2 inch PU Coupling Spider — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('2 inch PU Coupling Spider'),
    featured: true,
    sortOrder: 19
  },

  {
    id: 'pu-coupling-spider',
    name: 'PU Coupling Spider',
    slug: 'pu-coupling-spider',
    categoryId: 'pu-coupling-spider',
    categoryName: 'PU Coupling Spider',
    shortDescription: 'Standard polyurethane coupling spider elements available in all common sizes for L-jaw, T-jaw and spider couplings across industrial pump and motor drive applications.',
    fullDescription: `PU Coupling Spiders are the flexible polyurethane insert elements that sit between the two hubs of a jaw-type flexible coupling. Burhani Seal Centre supplies PU coupling spiders in all standard sizes including L050, L075, L090, L095, L099, L100, L110, L150, L190 and custom sizes across the full range of jaw coupling series.\n\nOur rubber spider couplings are a high-quality flexible coupling designed to transmit torque smoothly while compensating for misalignment between shafts. Manufactured using premium-grade rubber (NBR/PU), the coupling offers excellent vibration damping, shock absorption and long service life. It ensures silent operation and protects machinery components from wear and tear.`,
    features: [
      'Available in all standard jaw coupling sizes (L050 to L190 series)',
      'Premium NBR/PU material for vibration damping and shock absorption',
      'Transmits torque smoothly between misaligned shafts',
      'Silent operation — reduces noise in pump-motor assemblies',
      'Protects connected machinery from shock and vibration damage',
      'Long service life with resistance to oils and industrial fluids',
      'Easy inspection and replacement during scheduled maintenance',
      'MOQ: 10 pieces'
    ],
    specifications: [
      { label: 'Material',       value: 'NBR / Polyurethane (PU)'    },
      { label: 'Size Range',     value: 'L050 to L190 (all standard)' },
      { label: 'Type',           value: 'Jaw Coupling Spider / Insert' },
      { label: 'Hardness',       value: '88–98 Shore A'              },
      { label: 'Temperature',    value: '-30°C to +80°C'             },
      { label: 'Torque',         value: 'Per coupling size rating'    },
      { label: 'Misalignment',   value: 'Angular + parallel + axial' },
      { label: 'MOQ',            value: '10 pieces'                  }
    ],
    applications: [
      'Standard pump-motor flexible coupling drives',
      'Conveyor, compressor and fan drive systems',
      'General industrial rotating machinery connections',
      'Replacement and maintenance of existing jaw couplings',
      'OEM machinery flexible drive systems'
    ],
    industriesServed: ['Chemical Industry', 'Water Treatment', 'Steel Industry', 'Cement Industry', 'Textile Industry', 'Power Plants'],
    imageUrl: 'assets/images/products/pu-coupling-spider.jpg',
    imageAlt: 'PU Coupling Spider — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('PU Coupling Spider'),
    featured: true,
    sortOrder: 20
  },

  // ══════════════════════════════════════════
  // SEAL KIT  (3 products)
  // ══════════════════════════════════════════

  {
    id: 'cassette-oil-seals',
    name: 'Cassette Oil Seals',
    slug: 'cassette-oil-seals',
    categoryId: 'seal-kit',
    categoryName: 'Seal Kit',
    shortDescription: 'Cassette oil seals — a pre-assembled, unitised sealing cartridge for wheel hubs, axles and heavy equipment offering superior contamination exclusion and easy installation.',
    fullDescription: `Cassette Oil Seals (also called unitised seals or cassette seals) are pre-assembled, self-contained sealing units that combine multiple sealing elements, metal cases and wear sleeves into a single cartridge. This design provides superior sealing performance compared to conventional oil seals, particularly in contaminated environments such as agricultural equipment, construction machinery and heavy trucks.\n\nBurhani Seal Centre supplies cassette oil seals for a range of heavy equipment, commercial vehicle wheel hubs and industrial shaft applications.`,
    features: [
      'Pre-assembled cassette — multiple seals + metal cases in one unit',
      'Unitised design prevents misassembly during installation',
      'Superior contamination exclusion vs. conventional oil seals',
      'Integrated wear sleeve eliminates shaft/bore machining requirements',
      'Long service intervals for heavy equipment applications',
      'Suitable for agricultural, construction and heavy truck applications',
      'Available for common vehicle and equipment specifications',
      'Easy installation without special tools'
    ],
    specifications: [
      { label: 'Type',           value: 'Cassette / Unitised Seal'       },
      { label: 'Construction',   value: 'Multi-element pre-assembled unit' },
      { label: 'Material',       value: 'NBR / Viton lips + metal cases' },
      { label: 'Wear Sleeve',    value: 'Integrated (where applicable)'  },
      { label: 'Applications',   value: 'Wheel hubs, axles, heavy equipment' },
      { label: 'Installation',   value: 'Tool-free / press fit'          },
      { label: 'Contamination',  value: 'Superior exclusion vs. conventional seal' },
      { label: 'Service Life',   value: 'Extended — reduced maintenance'  }
    ],
    applications: [
      'Commercial vehicle front and rear wheel hubs',
      'Agricultural tractor axle and wheel hub sealing',
      'Construction and earthmoving equipment axles',
      'Industrial conveyor and drive shaft end sealing',
      'Heavy truck and bus wheel hub assemblies'
    ],
    industriesServed: ['Steel Industry', 'Cement Industry', 'Chemical Industry'],
    imageUrl: 'assets/images/products/cassette-oil-seals.jpg',
    imageAlt: 'Cassette Oil Seals — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Cassette Oil Seals'),
    featured: false,
    sortOrder: 21
  },

  {
    id: 'hydraulic-oil-seal-kit',
    name: 'Hydraulic Oil Seal Kit',
    slug: 'hydraulic-oil-seal-kit',
    categoryId: 'seal-kit',
    categoryName: 'Seal Kit',
    shortDescription: 'Complete hydraulic oil seal kits containing all seals required for hydraulic pump, motor or cylinder overhaul — for fast, accurate and complete maintenance.',
    fullDescription: `Hydraulic Oil Seal Kits contain all the sealing elements required to completely overhaul a hydraulic pump, hydraulic motor or hydraulic cylinder. By supplying all seals as a matched, pre-packaged kit, we ensure all seals are changed simultaneously during maintenance — eliminating partial overhaul and the risk of premature re-failure due to old seals being left in service.\n\nBurhani Seal Centre supplies hydraulic oil seal kits for a wide range of popular hydraulic pump and motor brands and models, as well as generic kits for cylinder bore sizes.`,
    features: [
      'Complete kit with all seals for full hydraulic unit overhaul',
      'Eliminates partial maintenance — all seals changed together',
      'Available for popular hydraulic pump and motor brands',
      'Generic cylinder seal kits for all bore sizes',
      'All seals pre-sorted and labelled for easy identification',
      'NBR, PU and Viton seals included as applicable',
      'Reduces maintenance time and repeat call-outs',
      'Quality seals with dimensional accuracy for OEM-fit'
    ],
    specifications: [
      { label: 'Type',         value: 'Complete Hydraulic Overhaul Kit'      },
      { label: 'Contents',     value: 'All seals for complete unit overhaul' },
      { label: 'Materials',    value: 'NBR / PU / Viton as applicable'       },
      { label: 'Compatibility', value: 'Major hydraulic pump/motor brands'   },
      { label: 'Applications', value: 'Hydraulic pumps, motors, cylinders'   },
      { label: 'Sizes',        value: 'As per pump/motor model or bore size' },
      { label: 'Supply',       value: 'Branded bag with part identification' },
      { label: 'MOQ',          value: '1 kit'                                }
    ],
    applications: [
      'Hydraulic pump overhaul and maintenance',
      'Hydraulic motor seal replacement',
      'Industrial hydraulic cylinder complete overhaul',
      'Mobile plant hydraulic system maintenance',
      'Hydraulic power unit scheduled maintenance'
    ],
    industriesServed: ['Steel Industry', 'Cement Industry', 'Chemical Industry', 'Power Plants', 'Oil & Gas'],
    imageUrl: 'assets/images/products/hydraulic-oil-seal-kit.jpg',
    imageAlt: 'Hydraulic Oil Seal Kit — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Hydraulic Oil Seal Kit'),
    featured: true,
    sortOrder: 22
  },

  {
    id: 'hydraulic-cylinder-seal-kits',
    name: 'Hydraulic Cylinder Seal Kits',
    slug: 'hydraulic-cylinder-seal-kits',
    categoryId: 'seal-kit',
    categoryName: 'Seal Kit',
    shortDescription: 'Hydraulic cylinder seal kits containing piston seal, rod seal, wiper seal and O Rings for complete cylinder overhaul across a full range of bore sizes.',
    fullDescription: `Hydraulic Cylinder Seal Kits are pre-packaged sets containing all the sealing elements required to overhaul a hydraulic cylinder — typically comprising a piston seal, rod seal, wiper seal, back-up rings and O Rings. These kits ensure a complete, matched overhaul that restores the cylinder to OEM sealing performance.\n\nBurhani Seal Centre supplies standard hydraulic cylinder seal kits for bore sizes from 25 mm to 500 mm in NBR, PU and Viton materials, as well as custom kits to customer specifications.`,
    features: [
      'Complete kit: piston seal + rod seal + wiper + O Rings + backup rings',
      'Available for bore sizes 25 mm to 500 mm',
      'Materials: NBR, PU, Viton to suit operating conditions',
      'Restores cylinder to OEM sealing performance',
      'All seals correctly matched for the cylinder bore size',
      'Reduces downtime — all parts in one order',
      'Custom kits available to drawing or sample',
      'Suitable for industrial and mobile hydraulic cylinders'
    ],
    specifications: [
      { label: 'Kit Contents',   value: 'Piston seal + Rod seal + Wiper + O Rings + Backup rings' },
      { label: 'Bore Range',     value: '25 mm to 500 mm (standard)'                              },
      { label: 'Materials',      value: 'NBR / PU / Viton'                                        },
      { label: 'Pressure',       value: 'Up to 700 bar (PU grade)'                               },
      { label: 'Temperature',    value: '-30°C to +110°C (NBR/PU)'                               },
      { label: 'Fluid',          value: 'Mineral oil HM / HLP / HFDU'                            },
      { label: 'Standard',       value: 'ISO 6547 compatible profiles'                           },
      { label: 'MOQ',            value: '1 kit'                                                   }
    ],
    applications: [
      'Industrial hydraulic cylinder complete overhaul',
      'Mobile crane and excavator cylinder sealing',
      'Press and forming machine cylinder maintenance',
      'Hydraulic steering and stabiliser cylinder service',
      'Offshore and marine hydraulic cylinder overhaul'
    ],
    industriesServed: ['Steel Industry', 'Cement Industry', 'Chemical Industry', 'Power Plants', 'Oil & Gas'],
    imageUrl: 'assets/images/products/hydraulic-cylinder-seal-kits.jpg',
    imageAlt: 'Hydraulic Cylinder Seal Kits — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Hydraulic Cylinder Seal Kits'),
    featured: false,
    sortOrder: 23
  },

  // ══════════════════════════════════════════
  // RUBBER SHEET  (2 products)
  // ══════════════════════════════════════════

  {
    id: '3mm-black-silicone-rubber-sheet',
    name: '3 mm Black Silicone Rubber Sheet',
    slug: '3mm-black-silicone-rubber-sheet',
    categoryId: 'rubber-sheet',
    categoryName: 'Rubber Sheet',
    shortDescription: '3 mm black silicone rubber sheet for high-temperature gasketing, sealing strips, oven door seals, electrical insulation and food-safe industrial applications.',
    fullDescription: `The 3 mm Black Silicone Rubber Sheet is manufactured from premium-grade silicone elastomer offering an outstanding temperature range from -60°C to +230°C. This makes it the preferred material for oven seals, high-temperature gasketing, electrical insulation and food processing applications where standard rubber sheets would fail.\n\nBurhani Seal Centre supplies 3 mm black silicone rubber sheets in standard roll and sheet form, which can be cut to any custom size or gasket profile as required.`,
    features: [
      '3 mm thickness — standard gasketing and sealing strip grade',
      'Black silicone rubber for high-temperature applications',
      'Temperature range: -60°C to +230°C',
      'Excellent ozone, UV and weathering resistance',
      'Good electrical insulation properties',
      'FDA-compliant silicone available for food contact',
      'Easy to cut, punch or waterjet to custom gasket profiles',
      'Available in sheet and roll form in standard widths'
    ],
    specifications: [
      { label: 'Thickness',      value: '3 mm'               },
      { label: 'Material',       value: 'Silicone Rubber'    },
      { label: 'Colour',         value: 'Black'              },
      { label: 'Temperature',    value: '-60°C to +230°C'    },
      { label: 'Hardness',       value: '40–70 Shore A'      },
      { label: 'Tensile Strength', value: '≥ 6 MPa'          },
      { label: 'Sheet Size',     value: 'Roll / 1200×1200 mm standard' },
      { label: 'Compliance',     value: 'FDA available on request'     }
    ],
    applications: [
      'Oven door and industrial furnace seals',
      'High-temperature flange gasketing',
      'Electrical panel and switchgear insulation',
      'Food processing equipment sealing',
      'Automotive heat shield and thermal protection'
    ],
    industriesServed: ['Food Industry', 'Pharmaceutical Industry', 'Chemical Industry', 'Power Plants'],
    imageUrl: 'assets/images/products/3mm-black-silicone-rubber-sheet.jpg',
    imageAlt: '3 mm Black Silicone Rubber Sheet — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('3 mm Black Silicone Rubber Sheet'),
    featured: true,
    sortOrder: 24
  },

  {
    id: '8mm-white-silicone-rubber-sheet',
    name: '8 mm White Silicone Rubber Sheet',
    slug: '8mm-white-silicone-rubber-sheet',
    categoryId: 'rubber-sheet',
    categoryName: 'Rubber Sheet',
    shortDescription: '8 mm white silicone rubber sheet — FDA-compliant food-grade silicone for thick gasketing, sealing pads, anti-vibration mounts and hygienic process equipment.',
    fullDescription: `The 8 mm White Silicone Rubber Sheet is a food-grade, FDA-compliant silicone sheet suitable for thick gasketing, sealing pad and anti-vibration mount applications in food processing, pharmaceutical and high-temperature industrial environments. The white colour is the standard identifier for food-safe silicone rubber.\n\nBurhani Seal Centre supplies 8 mm white silicone rubber sheets in standard sizes with the option for custom cutting to any required shape or dimension.`,
    features: [
      '8 mm thickness for thick gasketing and sealing pad applications',
      'White silicone — standard food-grade colour identifier',
      'FDA-compliant for direct food contact applications',
      'High-temperature range: -60°C to +230°C',
      'Suitable for pharmaceutical and hygienic process environments',
      'Good compression set resistance for long-term sealing',
      'Excellent ozone, UV and weathering resistance',
      'Can be cut to any custom gasket or pad profile'
    ],
    specifications: [
      { label: 'Thickness',    value: '8 mm'                       },
      { label: 'Material',     value: 'Silicone Rubber'            },
      { label: 'Colour',       value: 'White'                      },
      { label: 'Temperature',  value: '-60°C to +230°C'            },
      { label: 'Hardness',     value: '40–70 Shore A'              },
      { label: 'Compliance',   value: 'FDA 21 CFR / EC 1935/2004'  },
      { label: 'Sheet Size',   value: '1200×1200 mm standard'      },
      { label: 'Custom Sizes', value: 'Available on request'       }
    ],
    applications: [
      'Food processing equipment thick gaskets and seals',
      'Pharmaceutical manufacturing sealing pads',
      'Anti-vibration mounts for process equipment',
      'High-temperature oven and kiln sealing strips',
      'Hygienic dairy and beverage plant sealing'
    ],
    industriesServed: ['Food Industry', 'Pharmaceutical Industry', 'Chemical Industry'],
    imageUrl: 'assets/images/products/8mm-white-silicone-rubber-sheet.jpg',
    imageAlt: '8 mm White Silicone Rubber Sheet — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('8 mm White Silicone Rubber Sheet'),
    featured: false,
    sortOrder: 25
  },

  // ══════════════════════════════════════════
  // PUMP SEAL  (2 products)
  // ══════════════════════════════════════════

  {
    id: '30mm-mechanical-pump-seal',
    name: '30 mm Mechanical Pump Seal',
    slug: '30mm-mechanical-pump-seal',
    categoryId: 'pump-seal',
    categoryName: 'Pump Seal',
    shortDescription: '30 mm single spring mechanical seal for centrifugal pumps — the most widely used pump seal size in Indian industry for water, chemical and general service pumps.',
    fullDescription: `The 30 mm Mechanical Pump Seal is one of the most commonly specified mechanical seal sizes for centrifugal pumps in Indian industrial applications. This single spring mechanical seal provides reliable, leak-free operation in water, chemical, HVAC and general industrial pump applications.\n\nBurhani Seal Centre stocks 30 mm mechanical pump seals in standard grades with carbon/ceramic and carbon/SiC face combinations to suit different media and operating conditions.`,
    features: [
      '30 mm shaft diameter — most common Indian industrial pump size',
      'Single coil spring design for uniform face loading',
      'Carbon vs. ceramic or carbon vs. SiC face material options',
      'NBR, EPDM or Viton elastomer options',
      'Compatible with most standard centrifugal pump makes',
      'Easy installation — suitable for field replacement',
      'Reliable sealing for water, chemicals and HVAC media',
      'Meets DIN 24960 dimensional standards'
    ],
    specifications: [
      { label: 'Shaft Diameter', value: '30 mm'                    },
      { label: 'Seal Type',      value: 'Single Spring Mechanical Seal' },
      { label: 'Face Materials', value: 'Carbon / Ceramic or Carbon / SiC' },
      { label: 'Elastomers',     value: 'NBR / EPDM / Viton'      },
      { label: 'Spring Material', value: 'SS 316'                  },
      { label: 'Temperature',    value: '-20°C to +180°C'          },
      { label: 'Pressure',       value: 'Up to 16 bar'             },
      { label: 'Standard',       value: 'DIN 24960'                }
    ],
    applications: [
      'Centrifugal water supply and irrigation pumps',
      'Chemical process centrifugal pumps',
      'HVAC and building services pump sealing',
      'Industrial cooling water circuit pumps',
      'General industrial process pump sealing'
    ],
    industriesServed: ['Water Treatment', 'Chemical Industry', 'Pharmaceutical Industry', 'Power Plants', 'Textile Industry'],
    imageUrl: 'assets/images/products/30mm-mechanical-pump-seal.jpg',
    imageAlt: '30 mm Mechanical Pump Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('30 mm Mechanical Pump Seal'),
    featured: true,
    sortOrder: 26
  },

  {
    id: '20mm-water-pump-seal',
    name: '20 mm Water Pump Seal',
    slug: '20mm-water-pump-seal',
    categoryId: 'pump-seal',
    categoryName: 'Pump Seal',
    shortDescription: '20 mm mechanical seal for small water pumps — ideal for domestic water supply pumps, submersible pumps, pressure boosters and light-duty water service applications.',
    fullDescription: `The 20 mm Water Pump Seal is a compact mechanical seal designed for small centrifugal water pumps, domestic submersible pumps, pressure booster pumps and light-duty water service applications. Its simple design and standard dimensions make it easy to source and install as a direct replacement in most small pump makes.\n\nBurhani Seal Centre supplies 20 mm water pump seals in carbon/ceramic face combinations with NBR and EPDM elastomers suitable for clean water and mildly contaminated water service.`,
    features: [
      '20 mm shaft diameter for small water pump applications',
      'Carbon vs. ceramic face combination for clean water service',
      'NBR or EPDM elastomers for water compatibility',
      'Suitable for domestic and light industrial water pumps',
      'Simple, reliable single spring design',
      'Easy in-field replacement',
      'Compatible with most small pump makes in India',
      'Cost-effective replacement solution'
    ],
    specifications: [
      { label: 'Shaft Diameter', value: '20 mm'                         },
      { label: 'Seal Type',      value: 'Mechanical Seal — Single Spring' },
      { label: 'Face Materials', value: 'Carbon vs. Ceramic'            },
      { label: 'Elastomers',     value: 'NBR / EPDM'                    },
      { label: 'Temperature',    value: '-10°C to +90°C'                },
      { label: 'Pressure',       value: 'Up to 8 bar'                   },
      { label: 'Media',          value: 'Clean water / mildly contaminated water' },
      { label: 'Applications',   value: 'Domestic and light industrial water pumps' }
    ],
    applications: [
      'Domestic water supply pressure boosters',
      'Submersible pump shaft sealing',
      'Small agricultural irrigation pumps',
      'Building water circulation pumps',
      'Light-duty industrial water service pumps'
    ],
    industriesServed: ['Water Treatment', 'Chemical Industry', 'Food Industry'],
    imageUrl: 'assets/images/products/20mm-water-pump-seal.jpg',
    imageAlt: '20 mm Water Pump Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('20 mm Water Pump Seal'),
    featured: false,
    sortOrder: 27
  },

  // ══════════════════════════════════════════
  // HYDRAULIC OIL SEAL  (2 products)
  // ══════════════════════════════════════════

  {
    id: 'hydraulic-oil-seal',
    name: 'Hydraulic Oil Seal',
    slug: 'hydraulic-oil-seal',
    categoryId: 'hydraulic-oil-seal',
    categoryName: 'Hydraulic Oil Seal',
    shortDescription: 'High-pressure hydraulic oil seals for hydraulic cylinders and actuators — NBR and PU piston and rod seals preventing fluid bypass and maintaining system pressure.',
    fullDescription: `Hydraulic Oil Seals are precision-engineered sealing elements that maintain hydraulic fluid pressure within cylinders and actuators by preventing fluid bypass past the piston or rod. Unlike static seals, hydraulic seals operate under dynamic conditions — sliding back and forth with each cylinder stroke — and must balance effective sealing with minimum friction.\n\nBurhani Seal Centre supplies hydraulic oil seals in NBR, PU and PTFE profiles for piston and rod applications across a comprehensive range of bore and rod sizes.`,
    features: [
      'Designed for dynamic hydraulic cylinder piston and rod sealing',
      'NBR, PU and PTFE material options for different pressure and temperature',
      'High-pressure capability up to 700 bar with backup rings',
      'Low friction designs available for energy-efficient cylinders',
      'Standard U-cup, step-seal, hat seal and custom profiles',
      'ISO 6547 compatible dimensions',
      'Bore and rod sizes from 10 mm to 1000 mm',
      'Compatible with mineral oil, HLP, HFDU hydraulic fluids'
    ],
    specifications: [
      { label: 'Seal Type',    value: 'Piston Seal / Rod Seal'         },
      { label: 'Materials',    value: 'NBR / PU / PTFE'                },
      { label: 'Pressure',     value: 'Up to 700 bar (with backup)'    },
      { label: 'Temperature',  value: '-30°C to +110°C'                },
      { label: 'Speed',        value: 'Up to 1.5 m/s'                 },
      { label: 'Profiles',     value: 'U-cup / Hat / Step / Chevron'  },
      { label: 'Bore Range',   value: '10 mm to 1000 mm'              },
      { label: 'Fluid',        value: 'HM / HLP / HFD mineral oils'   }
    ],
    applications: [
      'Industrial hydraulic cylinder piston sealing',
      'Mobile hydraulic actuator rod sealing',
      'Injection moulding machine hydraulic cylinders',
      'Hydraulic press and forming machine cylinders',
      'Marine and offshore hydraulic equipment'
    ],
    industriesServed: ['Steel Industry', 'Cement Industry', 'Chemical Industry', 'Power Plants', 'Oil & Gas'],
    imageUrl: 'assets/images/products/hydraulic-oil-seal.jpg',
    imageAlt: 'Hydraulic Oil Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Hydraulic Oil Seal'),
    featured: true,
    sortOrder: 28
  },

  {
    id: 'hydraulic-wiper-seal',
    name: 'Hydraulic Wiper Seal',
    slug: 'hydraulic-wiper-seal',
    categoryId: 'hydraulic-oil-seal',
    categoryName: 'Hydraulic Oil Seal',
    shortDescription: 'Hydraulic wiper seals (scraper seals) that exclude dirt, dust and moisture from entering hydraulic cylinders as the rod retracts — protecting internal seals and fluid cleanliness.',
    fullDescription: `Hydraulic Wiper Seals, also known as scraper seals or dust seals, are installed at the open end of a hydraulic cylinder to wipe the rod clean as it retracts into the cylinder. Without an effective wiper seal, dirt, dust, moisture and abrasive particles would be dragged into the cylinder on the rod during each retraction stroke — rapidly contaminating the hydraulic fluid and destroying internal seals.\n\nBurhani Seal Centre supplies hydraulic wiper seals in NBR, PU and PTFE for single-lip and double-lip configurations covering all standard rod sizes.`,
    features: [
      'Wipes the rod clean on retraction stroke to prevent contamination ingress',
      'Single-lip and double-lip designs for different contamination levels',
      'NBR, PU and PTFE materials for different environments',
      'Protects internal rod and piston seals from abrasive damage',
      'Maintains hydraulic fluid cleanliness — extends system life',
      'Standard and heavy-duty profiles for demanding environments',
      'Covers all standard hydraulic rod diameters',
      'Compatible with all common cylinder head designs'
    ],
    specifications: [
      { label: 'Seal Type',    value: 'Wiper / Scraper / Dust Seal'         },
      { label: 'Material',     value: 'NBR / PU / PTFE'                     },
      { label: 'Lip Design',   value: 'Single Lip / Double Lip'             },
      { label: 'Rod Range',    value: '10 mm to 500 mm'                     },
      { label: 'Temperature',  value: '-30°C to +110°C (NBR/PU)'            },
      { label: 'Application',  value: 'Cylinder head external seal'         },
      { label: 'Function',     value: 'Contamination exclusion on rod retraction' },
      { label: 'Profiles',     value: 'WR / WSAY / RDY standard profiles'   }
    ],
    applications: [
      'Industrial hydraulic cylinder heads',
      'Mobile plant and excavator cylinder rod ends',
      'Steel and cement plant hydraulic equipment',
      'Offshore and marine hydraulic cylinder external sealing',
      'General industrial hydraulic actuator rod protection'
    ],
    industriesServed: ['Steel Industry', 'Cement Industry', 'Chemical Industry', 'Power Plants'],
    imageUrl: 'assets/images/products/hydraulic-wiper-seal.jpg',
    imageAlt: 'Hydraulic Wiper Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Hydraulic Wiper Seal'),
    featured: false,
    sortOrder: 29
  },

  // ══════════════════════════════════════════
  // O RING KIT  (2 products)
  // ══════════════════════════════════════════

  {
    id: 'nitrile-rubber-o-ring-kit',
    name: 'Nitrile Rubber O Ring Kit',
    slug: 'nitrile-rubber-o-ring-kit',
    categoryId: 'o-ring-kit',
    categoryName: 'O Ring Kit',
    shortDescription: 'Nitrile (NBR) rubber O Ring assortment kit with 200–500 O Rings across all common metric and imperial sizes — ideal for workshop maintenance and plant operations.',
    fullDescription: `The Nitrile Rubber O Ring Kit is an assortment box containing NBR O Rings in a comprehensive range of sizes — covering the most commonly required metric and imperial dimensions for hydraulic, pneumatic and general industrial sealing. Having a full size range on hand eliminates sourcing delays during emergency maintenance and ensures the right O Ring size is always available.\n\nBurhani Seal Centre supplies nitrile O Ring kits in 200-piece, 360-piece and 500-piece assortments, in protective compartmented cases for easy size identification.`,
    features: [
      'Nitrile (NBR) O Rings — excellent oil and petroleum resistance',
      'Comprehensive size range: 50–500 pieces covering all common sizes',
      'Metric and imperial sizes in one kit',
      'Compartmented storage case for easy size identification',
      'Suitable for hydraulic, pneumatic and general sealing',
      'Eliminates sourcing delays during emergency maintenance',
      'Standard hardness 70 Shore A',
      'Good temperature and oil resistance for general industrial use'
    ],
    specifications: [
      { label: 'Material',     value: 'Nitrile Rubber (NBR)'               },
      { label: 'Kit Sizes',    value: '200 / 360 / 500 piece assortments'  },
      { label: 'Size Range',   value: 'All common metric + imperial sizes'  },
      { label: 'Hardness',     value: '70 Shore A'                         },
      { label: 'Temperature',  value: '-40°C to +120°C'                    },
      { label: 'Colour',       value: 'Black'                              },
      { label: 'Storage',      value: 'Compartmented plastic case'         },
      { label: 'Applications', value: 'Hydraulic / Pneumatic / General'    }
    ],
    applications: [
      'Plant maintenance workshop O Ring stock',
      'Hydraulic and pneumatic repair and maintenance',
      'General industrial machinery sealing replacement',
      'Plumbing and fluid system repair',
      'Service and repair workshop all-in-one O Ring supply'
    ],
    industriesServed: ['Chemical Industry', 'Steel Industry', 'Cement Industry', 'Water Treatment', 'Power Plants'],
    imageUrl: 'assets/images/products/nitrile-rubber-o-ring-kit.jpg',
    imageAlt: 'Nitrile Rubber O Ring Kit — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Nitrile Rubber O Ring Kit'),
    featured: true,
    sortOrder: 30
  },

  {
    id: 'rubber-o-ring-kit',
    name: 'Rubber O Ring Kit',
    slug: 'rubber-o-ring-kit',
    categoryId: 'o-ring-kit',
    categoryName: 'O Ring Kit',
    shortDescription: 'General rubber O Ring assortment kit covering a wide range of sizes in standard elastomers for general workshop maintenance and sealing replacement applications.',
    fullDescription: `The Rubber O Ring Kit is a general-purpose O Ring assortment suitable for maintenance workshops, service centres and industrial plants. These kits provide a practical range of O Ring sizes for common static and dynamic sealing applications, allowing maintenance teams to quickly identify and replace worn or damaged O Rings without delay.\n\nBurhani Seal Centre supplies rubber O Ring kits in standard NBR and mixed elastomer configurations to suit customer requirements.`,
    features: [
      'General purpose O Ring assortment for workshop use',
      'Wide range of common sizes for static and dynamic sealing',
      'Standard elastomers suitable for general industrial applications',
      'Practical compartmented storage for quick size identification',
      'Suitable for plumbing, hydraulic and pneumatic maintenance',
      'Cost-effective all-in-one O Ring supply solution',
      'Reduces maintenance downtime for seal replacement',
      'Available in various assortment sizes'
    ],
    specifications: [
      { label: 'Material',     value: 'Rubber (NBR / general elastomer)'  },
      { label: 'Kit Type',     value: 'General purpose assortment'        },
      { label: 'Sizes',        value: 'Common metric and imperial sizes'  },
      { label: 'Hardness',     value: '70 Shore A (standard)'            },
      { label: 'Colour',       value: 'Black'                            },
      { label: 'Storage',      value: 'Compartmented case'               },
      { label: 'Applications', value: 'General sealing replacement'      },
      { label: 'MOQ',          value: '1 kit'                            }
    ],
    applications: [
      'General maintenance workshop O Ring replacement',
      'Hydraulic and pneumatic system repair',
      'Plumbing and water system sealing',
      'General machinery and equipment maintenance',
      'On-site emergency sealing repair'
    ],
    industriesServed: ['Chemical Industry', 'Water Treatment', 'Steel Industry', 'Cement Industry'],
    imageUrl: 'assets/images/products/rubber-o-ring-kit.jpg',
    imageAlt: 'Rubber O Ring Kit — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Rubber O Ring Kit'),
    featured: false,
    sortOrder: 31
  },

  // ══════════════════════════════════════════
  // RUBBER CORD  (1 product)
  // ══════════════════════════════════════════

  {
    id: '8mm-black-rubber-cord',
    name: '8 mm Black Rubber Cord',
    slug: '8mm-black-rubber-cord',
    categoryId: 'rubber-cord',
    categoryName: 'Rubber Cord',
    shortDescription: '8 mm black solid rubber cord for door seals, window seals, industrial gasket fabrication and custom sealing strip applications requiring a circular cross-section profile.',
    fullDescription: `The 8 mm Black Rubber Cord is a solid round-section rubber cord used for fabricating custom door seals, window seals, gasket profiles and sealing strips. The circular cross-section compresses evenly under clamping load, providing a reliable seal when used in grooves, channels and seal housings.\n\nBurhani Seal Centre supplies 8 mm black rubber cord in NBR and EPDM grades in standard coil lengths, suitable for cutting to any required length for custom sealing applications.`,
    features: [
      '8 mm diameter solid rubber cord',
      'Black colour — standard NBR or EPDM elastomer',
      'Round cross-section for even compression in seal grooves',
      'Suitable for custom door, window and panel sealing',
      'Easy to cut to any length on-site',
      'Can be bonded end-to-end to create custom O Ring sizes',
      'NBR for oil resistance, EPDM for water and weather resistance',
      'Supplied in standard coil lengths'
    ],
    specifications: [
      { label: 'Diameter',     value: '8 mm'                          },
      { label: 'Cross-Section', value: 'Solid Round'                  },
      { label: 'Material',     value: 'NBR / EPDM'                    },
      { label: 'Colour',       value: 'Black'                         },
      { label: 'Temperature',  value: '-30°C to +120°C (NBR), +150°C (EPDM)' },
      { label: 'Hardness',     value: '60–70 Shore A'                 },
      { label: 'Supply Form',  value: 'Coil (5 m, 10 m, 25 m)'       },
      { label: 'MOQ',          value: '5 metres'                      }
    ],
    applications: [
      'Industrial door and hatch sealing',
      'Window and panel seal fabrication',
      'Custom gasket profiles from cord stock',
      'Tank and vessel lid sealing',
      'Bonded into custom O Ring profiles for large bores'
    ],
    industriesServed: ['Chemical Industry', 'Steel Industry', 'Cement Industry', 'Water Treatment'],
    imageUrl: 'assets/images/products/8mm-black-rubber-cord.jpg',
    imageAlt: '8 mm Black Rubber Cord — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('8 mm Black Rubber Cord'),
    featured: false,
    sortOrder: 32
  },

  // ══════════════════════════════════════════
  // POLYPROPYLENE CYLINDRICAL ROD  (1 product)
  // ══════════════════════════════════════════

  {
    id: '20mm-polypropylene-cylindrical-rod',
    name: '20 mm Polypropylene Cylindrical Rod',
    slug: '20mm-polypropylene-cylindrical-rod',
    categoryId: 'polypropylene-cylindrical-rod',
    categoryName: 'Polypropylene Cylindrical Rod',
    shortDescription: '20 mm polypropylene cylindrical rod for machining into chemical-resistant bushes, spacers, valve components and custom plastic parts for corrosive environments.',
    fullDescription: `The 20 mm Polypropylene Cylindrical Rod is a solid round bar of polypropylene (PP) plastic used as raw material for machining custom components. Polypropylene offers excellent resistance to a wide range of acids, alkalis and solvents at moderate temperatures, making it suitable for chemical industry components, tank fittings, valve parts and non-metallic structural applications.\n\nBurhani Seal Centre supplies polypropylene cylindrical rods for customers requiring small quantities of chemical-resistant plastic bar stock for machining.`,
    features: [
      '20 mm diameter polypropylene solid round bar',
      'Excellent chemical resistance to acids and alkalis',
      'Easy to machine on standard turning and milling equipment',
      'Lightweight — density approx. 0.91 g/cm³',
      'Non-toxic and suitable for food and chemical industry use',
      'Available in standard lengths for machining to requirement',
      'Good rigidity and impact resistance at ambient temperatures',
      'Cost-effective engineering plastic for non-metallic components'
    ],
    specifications: [
      { label: 'Diameter',     value: '20 mm'                       },
      { label: 'Material',     value: 'Polypropylene (PP)'          },
      { label: 'Density',      value: '0.91 g/cm³'                  },
      { label: 'Temperature',  value: 'Up to +100°C (continuous)'   },
      { label: 'Chemical Resistance', value: 'Acids, alkalis, solvents (moderate temp)' },
      { label: 'Colour',       value: 'Natural (white/off-white)'   },
      { label: 'Lengths',      value: '500 mm, 1000 mm (standard)'  },
      { label: 'MOQ',          value: '1 piece'                     }
    ],
    applications: [
      'Chemical plant non-metallic bushes and spacers',
      'Tank and vessel internal fittings',
      'Valve bodies and chemical-resistant components',
      'Food processing non-metallic mechanical parts',
      'General chemical-resistant structural applications'
    ],
    industriesServed: ['Chemical Industry', 'Pharmaceutical Industry', 'Food Industry', 'Water Treatment'],
    imageUrl: 'assets/images/products/20mm-polypropylene-rod.jpg',
    imageAlt: '20 mm Polypropylene Cylindrical Rod — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('20 mm Polypropylene Cylindrical Rod'),
    featured: false,
    sortOrder: 33
  },

  // ══════════════════════════════════════════
  // INDUSTRIAL TYRE COUPLINGS  (1 product)
  // ══════════════════════════════════════════

  {
    id: 'rubber-industrial-tyre-couplings',
    name: 'Rubber Industrial Tyre Couplings',
    slug: 'rubber-industrial-tyre-couplings',
    categoryId: 'industrial-tyre-couplings',
    categoryName: 'Industrial Tyre Couplings',
    shortDescription: 'Rubber tyre (donut) couplings for flexible shaft connection between motors, pumps, compressors and conveyors — offering excellent vibration isolation and high misalignment tolerance.',
    fullDescription: `Rubber Industrial Tyre Couplings (also called donut couplings or tyre couplings) use a toroidal rubber element shaped like a tyre to connect two shaft hubs. The tyre element provides exceptional flexibility in all directions — absorbing vibration, dampening shock loads and accommodating angular, parallel and axial shaft misalignment far more than conventional jaw couplings.\n\nBurhani Seal Centre supplies rubber tyre coupling elements and complete coupling assemblies in a comprehensive range of sizes for industrial pump, motor, fan and conveyor drive applications.`,
    features: [
      'Toroidal rubber tyre element for all-directional flexibility',
      'Excellent vibration isolation and shock dampening',
      'High misalignment tolerance: angular, parallel and axial',
      'Easy element replacement without moving the connected machinery',
      'Suitable for reverse direction of rotation without special consideration',
      'Available for a wide range of shaft sizes and torque ratings',
      'Rubber element in NBR or natural rubber grades',
      'Reduces noise and vibration transmission to frame and structure'
    ],
    specifications: [
      { label: 'Type',          value: 'Tyre / Donut Flexible Coupling'  },
      { label: 'Element Material', value: 'NBR / Natural Rubber'          },
      { label: 'Misalignment',  value: 'Angular ±5°, Parallel ±5 mm'     },
      { label: 'Axial Movement', value: 'Up to ±10 mm'                   },
      { label: 'Temperature',   value: '-30°C to +80°C'                  },
      { label: 'Speed',         value: 'Up to 4000 RPM (size dependent)' },
      { label: 'Sizes',         value: 'Full range — on request'         },
      { label: 'MOQ',           value: '1 piece'                         }
    ],
    applications: [
      'Pump-motor flexible drive connections with high misalignment',
      'Compressor and fan drive shaft coupling',
      'Conveyor head drum motor coupling',
      'Crusher and screening plant drive connections',
      'Marine and generator set flexible couplings'
    ],
    industriesServed: ['Chemical Industry', 'Steel Industry', 'Cement Industry', 'Water Treatment', 'Power Plants'],
    imageUrl: 'assets/images/products/rubber-industrial-tyre-couplings.jpg',
    imageAlt: 'Rubber Industrial Tyre Couplings — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Rubber Industrial Tyre Couplings'),
    featured: false,
    sortOrder: 34
  },

  // ══════════════════════════════════════════
  // STAINLESS STEEL CIRCLIPS  (1 product)
  // ══════════════════════════════════════════

  {
    id: '3mm-stainless-steel-circlips',
    name: '3 mm Stainless Steel Circlips',
    slug: '3mm-stainless-steel-circlips',
    categoryId: 'stainless-steel-circlips',
    categoryName: 'Stainless Steel Circlips',
    shortDescription: '3 mm stainless steel external and internal circlips (snap rings) for corrosion-resistant shaft and bore retention in stainless steel, food and chemical industry assemblies.',
    fullDescription: `Stainless Steel Circlips (snap rings or retaining rings) are precision-formed spring steel rings that fit into grooves machined on shafts (external circlips) or in bores (internal circlips) to retain components axially. Stainless steel circlips are required wherever standard carbon steel circlips would corrode — such as in food processing, pharmaceutical, marine and chemical industry assemblies.\n\nBurhani Seal Centre supplies 3 mm stainless steel circlips as well as the full range of metric and imperial sizes in SS 304 and SS 316 grades.`,
    features: [
      '3 mm size — standard small-shaft retention application',
      'Stainless steel (SS 304 / SS 316) for corrosion resistance',
      'Available as external (shaft) and internal (bore) types',
      'Precision-formed for accurate groove fit and retention force',
      'Suitable for food, pharmaceutical and chemical industry assemblies',
      'DIN 471 (external) and DIN 472 (internal) standards',
      'Full metric and imperial size range available',
      'Supplied in packs of 10, 25, 50 or 100 pieces'
    ],
    specifications: [
      { label: 'Size',          value: '3 mm shaft / bore diameter'     },
      { label: 'Material',      value: 'Stainless Steel SS 304 / SS 316' },
      { label: 'Type',          value: 'External (shaft) / Internal (bore)' },
      { label: 'Standard',      value: 'DIN 471 (external) / DIN 472 (internal)' },
      { label: 'Corrosion Resistance', value: 'Excellent (SS 316 grade)' },
      { label: 'Temperature',   value: '-200°C to +600°C'               },
      { label: 'Finish',        value: 'Bright / Passivated'            },
      { label: 'Pack Sizes',    value: '10 / 25 / 50 / 100 pieces'      }
    ],
    applications: [
      'Food processing machinery component retention',
      'Pharmaceutical and hygienic equipment assemblies',
      'Marine and offshore equipment',
      'Chemical and corrosive environment assemblies',
      'Stainless steel instrument and valve assemblies'
    ],
    industriesServed: ['Food Industry', 'Pharmaceutical Industry', 'Chemical Industry', 'Water Treatment'],
    imageUrl: 'assets/images/products/stainless-steel-circlips.jpg',
    imageAlt: '3 mm Stainless Steel Circlips — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('3 mm Stainless Steel Circlips'),
    featured: false,
    sortOrder: 35
  },

  // ══════════════════════════════════════════
  // POLYURETHANE TUBE  (1 product)
  // ══════════════════════════════════════════

  {
    id: '2-inch-blue-polyurethane-tube',
    name: '2 inches Blue Polyurethane Tube',
    slug: '2-inch-blue-polyurethane-tube',
    categoryId: 'polyurethane-tube',
    categoryName: 'Polyurethane Tube',
    shortDescription: '2 inch blue polyurethane (PU) pneumatic tube for compressed air lines, pneumatic tool connections and automation systems — flexible, kink-resistant and durable.',
    fullDescription: `The 2 inch Blue Polyurethane Tube is a flexible pneumatic tubing used for compressed air distribution, pneumatic tool connections, automation valve connections and industrial pneumatic system piping. Polyurethane tubing offers superior flexibility, kink resistance, abrasion resistance and pressure rating compared to standard nylon or polythene tubing.\n\nBurhani Seal Centre supplies blue polyurethane tubes in standard roll lengths suitable for pneumatic system installation in industrial plants, workshops and automation systems.`,
    features: [
      '2 inch OD blue polyurethane pneumatic tube',
      'Excellent flexibility and kink resistance',
      'High abrasion resistance for routing in industrial environments',
      'Good pressure rating for standard compressed air systems',
      'Blue colour — standard pneumatic tube identification colour',
      'Compatible with standard push-in pneumatic fittings',
      'Lightweight for easy installation and routing',
      'Available in standard roll lengths'
    ],
    specifications: [
      { label: 'Outer Diameter', value: '2 inch (50 mm approx.)'     },
      { label: 'Material',       value: 'Polyurethane (PU)'          },
      { label: 'Colour',         value: 'Blue'                       },
      { label: 'Pressure',       value: 'Up to 16 bar'               },
      { label: 'Temperature',    value: '-30°C to +60°C'             },
      { label: 'Media',          value: 'Compressed air, inert gases' },
      { label: 'Flexibility',    value: 'Excellent — kink resistant' },
      { label: 'Supply',         value: 'Roll / cut to length'       }
    ],
    applications: [
      'Compressed air distribution in factories',
      'Pneumatic tool connections in workshops',
      'Automation system compressed air lines',
      'Pneumatic valve manifold supply tubing',
      'Industrial robot compressed air connections'
    ],
    industriesServed: ['Chemical Industry', 'Pharmaceutical Industry', 'Food Industry', 'Textile Industry'],
    imageUrl: 'assets/images/products/polyurethane-tube.jpg',
    imageAlt: '2 inch Blue Polyurethane Tube — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('2 inches Blue Polyurethane Tube'),
    featured: false,
    sortOrder: 36
  },

  // ══════════════════════════════════════════
  // GEAR BOX OIL SEAL  (1 product)
  // ══════════════════════════════════════════

  {
    id: 'gearbox-oil-seal',
    name: 'Gearbox Oil Seal',
    slug: 'gearbox-oil-seal',
    categoryId: 'gear-box-oil-seal',
    categoryName: 'Gear Box Oil Seal',
    shortDescription: 'Precision gearbox oil seals for automotive transmissions, industrial gearboxes and speed reducers — retaining gear oil and excluding contaminants for long, trouble-free service.',
    fullDescription: `Gearbox Oil Seals are precision-engineered radial shaft seals specifically designed for the high-speed, high-temperature and high-load conditions encountered in automotive transmissions, industrial gearboxes and speed reducers. They must retain heavy gear oils under high centrifugal forces while excluding external contamination under all operating conditions.\n\nBurhani Seal Centre supplies gearbox oil seals for automotive applications and industrial gearboxes in a comprehensive range of shaft and bore sizes, in NBR and Viton for different temperature and chemical requirements.`,
    features: [
      'Designed for high-speed gearbox shaft sealing conditions',
      'Retains heavy gear oils under high centrifugal forces',
      'NBR standard; Viton for high-temperature or chemical environments',
      'Double lip design available for enhanced contamination exclusion',
      'Covers automotive and industrial gearbox shaft sizes',
      'Equivalent to OEM specifications for major gearbox brands',
      'Available in single lip (B type) and double lip (TC type)',
      'Carbon steel case for dimensional stability under pressure'
    ],
    specifications: [
      { label: 'Application',   value: 'Automotive & industrial gearboxes'   },
      { label: 'Material',      value: 'NBR (standard) / Viton (high temp)'  },
      { label: 'Seal Style',    value: 'Single Lip (B) / Double Lip (TC)'    },
      { label: 'Temperature',   value: '-40°C to +120°C (NBR), +200°C (Viton)' },
      { label: 'Speed',         value: 'Up to 10 m/s peripheral shaft speed' },
      { label: 'Media',         value: 'Gear oils, transmission fluids'      },
      { label: 'Case',          value: 'Carbon Steel'                        },
      { label: 'Standards',     value: 'DIN 3760 / DIN 3761 / ISO 6194'     }
    ],
    applications: [
      'Automotive manual and automatic transmission sealing',
      'Industrial helical, bevel and worm gearbox shaft ends',
      'Speed reducer input and output shaft sealing',
      'Marine gearbox sealing',
      'Heavy vehicle and truck transmission sealing'
    ],
    industriesServed: ['Steel Industry', 'Cement Industry', 'Chemical Industry', 'Power Plants'],
    imageUrl: 'assets/images/products/gearbox-oil-seal.jpg',
    imageAlt: 'Gearbox Oil Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Gearbox Oil Seal'),
    featured: false,
    sortOrder: 37
  },

  // ══════════════════════════════════════════
  // PIPE NIPPLES  (1 product)
  // ══════════════════════════════════════════

  {
    id: 'stainless-steel-pipe-nipple',
    name: 'Stainless Steel Pipe Nipple',
    slug: 'stainless-steel-pipe-nipple',
    categoryId: 'pipe-nipples',
    categoryName: 'Pipe Nipples',
    shortDescription: 'Stainless steel pipe nipples for joining pipes, fittings and valves in chemical, pharmaceutical and food industry piping systems requiring corrosion resistance.',
    fullDescription: `Stainless Steel Pipe Nipples are short lengths of pipe with male BSP or NPT threads on both ends, used to connect pipe fittings, valves and equipment in industrial piping systems. Stainless steel (SS 304 or SS 316) construction provides excellent corrosion resistance for chemical, pharmaceutical, food and water treatment applications where carbon steel pipe nipples would corrode.\n\nBurhani Seal Centre supplies stainless steel pipe nipples in standard BSP and NPT thread sizes from ¼ inch to 4 inch in SS 304 and SS 316 grades.`,
    features: [
      'SS 304 and SS 316 stainless steel for corrosion resistance',
      'BSP and NPT thread options in standard pipe sizes',
      'Sizes from ¼ inch to 4 inch (6 mm to 100 mm)',
      'Hex nipples, close nipples and barrel nipples available',
      'Smooth bore for minimal pressure drop',
      'Suitable for chemical, food, pharmaceutical and water service',
      'Precision thread cutting for leak-free connection',
      'Available in standard and custom lengths'
    ],
    specifications: [
      { label: 'Material',      value: 'SS 304 / SS 316'                      },
      { label: 'Thread',        value: 'BSP (G) / NPT'                        },
      { label: 'Size Range',    value: '¼ inch to 4 inch'                     },
      { label: 'Types',         value: 'Close / Hex / Barrel nipple'           },
      { label: 'End Connection', value: 'Male both ends (M×M)'                },
      { label: 'Pressure',      value: 'As per pipe schedule rating'           },
      { label: 'Temperature',   value: '-200°C to +800°C (SS 316)'            },
      { label: 'Surface',       value: 'Bright annealed / pickled + passivated' }
    ],
    applications: [
      'Chemical plant piping connections',
      'Pharmaceutical process piping',
      'Food and beverage processing pipework',
      'Water treatment and desalination systems',
      'Instrument and gauge connections'
    ],
    industriesServed: ['Chemical Industry', 'Pharmaceutical Industry', 'Food Industry', 'Water Treatment', 'Oil & Gas'],
    imageUrl: 'assets/images/products/stainless-steel-pipe-nipple.jpg',
    imageAlt: 'Stainless Steel Pipe Nipple — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Stainless Steel Pipe Nipple'),
    featured: false,
    sortOrder: 38
  },

  // ══════════════════════════════════════════
  // SKF BALL BEARINGS  (1 product)
  // ══════════════════════════════════════════

  {
    id: 'skf-ball-bearings',
    name: 'SKF Ball Bearings',
    slug: 'skf-ball-bearings',
    categoryId: 'skf-ball-bearings',
    categoryName: 'SKF Ball Bearings',
    shortDescription: 'Genuine SKF deep groove ball bearings, angular contact bearings and special bearings for electric motors, pumps, fans, gearboxes and precision industrial machinery.',
    fullDescription: `SKF Ball Bearings are world-renowned for their precision, reliability and long service life. As an SKF authorised distributor, Burhani Seal Centre supplies genuine SKF deep groove ball bearings (6000, 6200, 6300 series and beyond), angular contact ball bearings, self-aligning ball bearings and special bearings for industrial machinery, electric motors, pumps, fans, gearboxes and precision equipment.\n\nUsing genuine SKF bearings ensures that you receive the dimensional accuracy, material quality and performance that SKF engineering is known for worldwide — protecting your machinery investments and maximising uptime.`,
    features: [
      'Genuine SKF product — world-class quality and reliability',
      'Deep groove ball bearings: 6000, 6200, 6300 series and more',
      'Angular contact, self-aligning and special bearing types available',
      'Precision-ground raceways for smooth, low-friction operation',
      'Available in open, ZZ (metal shielded) and 2RS (rubber sealed) variants',
      'C3 and other clearance classes available for demanding applications',
      'Full range of bore sizes from 3 mm to 300 mm+',
      'Authorised distribution — guaranteed genuine SKF product'
    ],
    specifications: [
      { label: 'Brand',         value: 'SKF (Genuine)'                        },
      { label: 'Types',         value: 'DGBB / Angular Contact / Self-aligning' },
      { label: 'Series',        value: '6000 / 6200 / 6300 / 6400 and more'  },
      { label: 'Variants',      value: 'Open / ZZ / 2RS / 2Z'                },
      { label: 'Bore Range',    value: '3 mm to 300+ mm'                      },
      { label: 'Clearance',     value: 'C0 / C3 / C4 (standard and precision)' },
      { label: 'Temperature',   value: '-30°C to +120°C (standard grease)'    },
      { label: 'Applications',  value: 'Motors, pumps, fans, gearboxes, precision equipment' }
    ],
    applications: [
      'Electric motor shaft support bearings',
      'Industrial pump and fan bearings',
      'Gearbox and speed reducer internal bearings',
      'Conveyor roller and pulley bearings',
      'Precision machinery and instrument bearings'
    ],
    industriesServed: ['Chemical Industry', 'Steel Industry', 'Cement Industry', 'Power Plants', 'Textile Industry', 'Water Treatment'],
    imageUrl: 'assets/images/products/skf-ball-bearings.jpg',
    imageAlt: 'SKF Ball Bearings — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('SKF Ball Bearings'),
    featured: true,
    sortOrder: 39
  },

  // ══════════════════════════════════════════
  // RUBBER O RING AND OIL SEAL  (1 product)
  // ══════════════════════════════════════════

  {
    id: 'rubber-o-ring',
    name: 'Rubber O Ring',
    slug: 'rubber-o-ring',
    categoryId: 'rubber-o-ring-and-oil-seal',
    categoryName: 'Rubber O Ring And Oil Seal',
    shortDescription: 'Standard rubber O Rings in NBR, EPDM, Viton and Silicone for static and dynamic sealing in hydraulic, pneumatic, plumbing and industrial equipment applications.',
    fullDescription: `Rubber O Rings are the most widely used sealing element in industry — simple, versatile, cost-effective and reliably effective across a vast range of static and dynamic sealing applications. Burhani Seal Centre supplies rubber O Rings in all standard metric and imperial sizes in NBR (nitrile), EPDM, Viton (FKM) and Silicone elastomers to suit every media, temperature and application requirement.\n\nWhether you need a small batch of O Rings for maintenance or a large volume order for production, our comprehensive O Ring stock covers all common sizes and materials from a single source in Kolkata.`,
    features: [
      'Full range of elastomers: NBR, EPDM, Viton (FKM), Silicone',
      'All standard metric and imperial sizes in stock',
      'Suitable for static and dynamic sealing applications',
      'Used in hydraulic, pneumatic, plumbing and process equipment',
      'Standard hardness 70 Shore A across all grades',
      'NBR for oil/fuel; EPDM for water/steam; Viton for chemicals; Silicone for food',
      'Individual sizes or assortment kits available',
      'Bulk orders and small maintenance quantities both welcome'
    ],
    specifications: [
      { label: 'Materials',    value: 'NBR / EPDM / Viton (FKM) / Silicone' },
      { label: 'Size Range',   value: 'All metric and imperial standard sizes' },
      { label: 'Hardness',     value: '70 Shore A (standard)'               },
      { label: 'Temperature',  value: '-40°C to +230°C (grade dependent)'   },
      { label: 'Standards',    value: 'ISO 3601 / BS 1806 / DIN 3771'       },
      { label: 'Colour',       value: 'Black (NBR/EPDM), Brown (Viton), Red (Silicone)' },
      { label: 'Supply',       value: 'Individual sizes or assortment kits'  },
      { label: 'Applications', value: 'Static and dynamic sealing'           }
    ],
    applications: [
      'Hydraulic system valve and fitting sealing',
      'Pneumatic system port and connector sealing',
      'Plumbing and water system fittings',
      'Chemical plant valve and flange sealing',
      'General industrial machine static and dynamic sealing'
    ],
    industriesServed: ['Chemical Industry', 'Water Treatment', 'Pharmaceutical Industry', 'Food Industry', 'Steel Industry', 'Power Plants'],
    imageUrl: 'assets/images/products/rubber-o-ring.jpg',
    imageAlt: 'Rubber O Ring — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Rubber O Ring'),
    featured: true,
    sortOrder: 40
  },

  // ══════════════════════════════════════════
  // WATER PUMP SEAL  (1 product)
  // ══════════════════════════════════════════

  {
    id: 'water-pump-seal',
    name: 'Water Pump Seal',
    slug: 'water-pump-seal',
    categoryId: 'water-pump-seal',
    categoryName: 'Water Pump Seal',
    shortDescription: 'Dedicated mechanical seals for water pumps — single spring and rubber bellows type seals for clean water, agricultural, HVAC and municipal water supply pump applications.',
    fullDescription: `Water Pump Seals are mechanical seals specifically designed for water pump applications including domestic water supply pumps, submersible pumps, agricultural irrigation pumps, HVAC circulation pumps and municipal water treatment infrastructure. Unlike generic mechanical seals, water pump seals are optimised for the relatively clean, low-viscosity, low-temperature nature of water service.\n\nBurhani Seal Centre supplies water pump seals in single spring and rubber bellows designs across all common shaft sizes used in Indian water pump makes, providing a reliable and cost-effective solution for water pump maintenance.`,
    features: [
      'Specifically designed for clean water pump service',
      'Single spring and rubber bellows seal types available',
      'Carbon vs. ceramic face — standard for water service',
      'NBR or EPDM elastomers for water compatibility',
      'Covers all common shaft sizes in Indian water pump makes',
      'Easy installation for field maintenance',
      'Cost-effective for high-volume water pump maintenance',
      'Reliable sealing for continuous water pump operation'
    ],
    specifications: [
      { label: 'Seal Type',      value: 'Single Spring / Rubber Bellows'      },
      { label: 'Face Materials', value: 'Carbon vs. Ceramic (standard water)' },
      { label: 'Elastomers',     value: 'NBR / EPDM'                          },
      { label: 'Shaft Sizes',    value: 'Common Indian pump sizes (12–50 mm)' },
      { label: 'Temperature',    value: 'Up to +90°C'                         },
      { label: 'Pressure',       value: 'Up to 10 bar'                        },
      { label: 'Media',          value: 'Clean and mildly contaminated water'  },
      { label: 'Applications',   value: 'Water supply, irrigation, HVAC pumps' }
    ],
    applications: [
      'Domestic and municipal water supply pump sealing',
      'Agricultural irrigation pump maintenance',
      'HVAC chilled water and heating circuit pump sealing',
      'Submersible pump shaft sealing',
      'Swimming pool and fountain pump replacement seals'
    ],
    industriesServed: ['Water Treatment', 'Chemical Industry', 'Food Industry', 'Power Plants'],
    imageUrl: 'assets/images/products/water-pump-seal.jpg',
    imageAlt: 'Water Pump Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Water Pump Seal'),
    featured: false,
    sortOrder: 41
  },

  // ══════════════════════════════════════════
  // SPIDER COUPLING  (1 product)
  // ══════════════════════════════════════════

  {
    id: 'rubber-spider-couplings',
    name: 'Rubber Spider Couplings',
    slug: 'rubber-spider-couplings',
    categoryId: 'spider-coupling',
    categoryName: 'Spider Coupling',
    shortDescription: 'Rubber spider (jaw) couplings for flexible shaft connection — NBR/PU spider elements offering vibration damping, shock absorption and silent operation in pump-motor drives.',
    fullDescription: `Rubber Spider Couplings are high-quality flexible couplings designed to transmit torque smoothly while compensating for misalignment between shafts. The rubber or polyurethane spider element sits between two jaw-type coupling hubs, transmitting drive while absorbing vibration and shock.\n\nManufactured using premium-grade rubber (NBR/PU), our spider couplings offer excellent vibration damping, shock absorption and long service life. They ensure silent operation and protect machinery components from wear and tear.\n\nBurhani Seal Centre supplies rubber spider couplings as complete coupling assemblies and as spider replacement elements only, in all standard sizes for pump-motor and general industrial drive applications.`,
    features: [
      'Premium NBR / PU spider element for vibration damping',
      'Transmits torque while absorbing shock and vibration',
      'Compensates for angular, parallel and axial shaft misalignment',
      'Silent operation — reduces noise in pump-motor assemblies',
      'Protects connected equipment from shock load damage',
      'Available as complete coupling or spider element only',
      'All standard sizes for L-series jaw coupling hubs',
      'MOQ: 10 pieces for spider elements'
    ],
    specifications: [
      { label: 'Spider Material', value: 'NBR / Polyurethane (PU)'       },
      { label: 'Type',            value: 'Jaw Coupling Spider Element'    },
      { label: 'Sizes',           value: 'L050 to L190 (all standard)'   },
      { label: 'Hardness',        value: '88–98 Shore A'                 },
      { label: 'Temperature',     value: '-30°C to +80°C'                },
      { label: 'Misalignment',    value: 'Angular + parallel + axial'    },
      { label: 'MOQ',             value: '10 pieces'                     },
      { label: 'Supply',          value: 'Spider element or complete coupling' }
    ],
    applications: [
      'Pump-to-motor flexible drive connections',
      'Compressor and blower drive shaft coupling',
      'Fan and conveyor drive flexible connections',
      'General industrial motor-driven machinery',
      'Replacement spider elements for existing jaw couplings'
    ],
    industriesServed: ['Chemical Industry', 'Water Treatment', 'Steel Industry', 'Cement Industry', 'Textile Industry', 'Food Industry'],
    imageUrl: 'assets/images/products/rubber-spider-couplings.jpg',
    imageAlt: 'Rubber Spider Couplings — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Rubber Spider Couplings'),
    featured: false,
    sortOrder: 42
  },

  // ══════════════════════════════════════════
  // ROD SEAL  (1 product)
  // ══════════════════════════════════════════

  {
    id: 'pu-rod-seal',
    name: 'PU Rod Seal',
    slug: 'pu-rod-seal',
    categoryId: 'rod-seal',
    categoryName: 'Rod Seal',
    shortDescription: 'Polyurethane (PU) rod seals (U-cups) for hydraulic cylinder piston rods — providing reliable high-pressure sealing with excellent wear and extrusion resistance.',
    fullDescription: `PU Rod Seals are U-cup or lipped sealing elements made from polyurethane, specifically designed to seal the piston rod of a hydraulic cylinder. As the rod strokes in and out, the rod seal prevents hydraulic fluid from escaping past the rod while maintaining a thin film of oil for lubrication — extending seal life and minimising shaft wear.\n\nPolyurethane's superior abrasion resistance, tear strength and extrusion resistance make PU rod seals the professional standard for high-pressure hydraulic cylinder rod sealing. Burhani Seal Centre supplies PU rod seals in U-cup and other standard profiles for all common rod diameters.`,
    features: [
      'Polyurethane (PU) material for superior wear and extrusion resistance',
      'Designed specifically for hydraulic cylinder rod (shaft) sealing',
      'Maintains thin oil film for lubrication during stroking',
      'High-pressure capability — up to 500 bar with backup ring',
      'U-cup, hat seal and chevron profile options available',
      'Standard rod sizes from 10 mm to 500 mm',
      'Compatible with standard hydraulic mineral oils',
      'ISO 6547 compatible profiles'
    ],
    specifications: [
      { label: 'Material',     value: 'Polyurethane (PU)'              },
      { label: 'Seal Type',    value: 'Rod Seal / U-cup'               },
      { label: 'Pressure',     value: 'Up to 500 bar (with backup ring)' },
      { label: 'Temperature',  value: '-30°C to +110°C'                },
      { label: 'Speed',        value: 'Up to 1.5 m/s'                 },
      { label: 'Rod Range',    value: '10 mm to 500 mm'               },
      { label: 'Profiles',     value: 'U-cup / Hat / Chevron / Step'  },
      { label: 'Fluid',        value: 'Mineral oil HM / HLP'          }
    ],
    applications: [
      'Industrial hydraulic cylinder rod sealing',
      'Mobile plant excavator and crane cylinder rods',
      'Steel and cement plant hydraulic cylinder maintenance',
      'Injection moulding machine cylinder rod sealing',
      'Construction equipment hydraulic actuator rod sealing'
    ],
    industriesServed: ['Steel Industry', 'Cement Industry', 'Chemical Industry', 'Power Plants', 'Oil & Gas'],
    imageUrl: 'assets/images/products/pu-rod-seal.jpg',
    imageAlt: 'PU Rod Seal — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('PU Rod Seal'),
    featured: false,
    sortOrder: 43
  },

  // ══════════════════════════════════════════
  // PNEUMATIC SEAL  (1 product)
  // ══════════════════════════════════════════

  {
    id: 'pneumatic-seal-kit',
    name: 'Pneumatic Seal Kit',
    slug: 'pneumatic-seal-kit',
    categoryId: 'pneumatic-seal',
    categoryName: 'Pneumatic Seal',
    shortDescription: 'Complete pneumatic seal kits for ISO standard air cylinders — low-friction piston and rod seals, wiper seals and guide rings for compressed air and inert gas service.',
    fullDescription: `Pneumatic Seal Kits contain all sealing elements required to overhaul a pneumatic cylinder — typically a piston seal, rod seal, wiper seal and guide strip. Unlike hydraulic seals, pneumatic seals must achieve near-zero leakage with minimal lubrication and extremely low friction to ensure precise, repeatable cylinder movement without stick-slip.\n\nBurhani Seal Centre supplies pneumatic seal kits for ISO 6431 standard bore cylinders from 10 mm to 320 mm, as well as for many popular manufacturer cylinder types. We also supply individual pneumatic seal elements for specific applications.`,
    features: [
      'Complete kit: piston seal + rod seal + wiper + guide ring',
      'Ultra-low friction for precise pneumatic cylinder control',
      'NBR, PU and PTFE-composite seal materials available',
      'For oil-free and light-lubrication compressed air service',
      'ISO 6431 standard bore sizes: 10 mm to 320 mm',
      'Available for major pneumatic cylinder brand sizes',
      'Individual seal elements also supplied separately',
      'Reduces stick-slip for smooth, precise actuation'
    ],
    specifications: [
      { label: 'Kit Contents',  value: 'Piston seal + Rod seal + Wiper + Guide ring' },
      { label: 'Materials',     value: 'NBR / PU / PTFE composite'                  },
      { label: 'Pressure',      value: 'Up to 16 bar'                               },
      { label: 'Temperature',   value: '-20°C to +80°C'                             },
      { label: 'Speed',         value: 'Up to 3 m/s'                               },
      { label: 'Bore Range',    value: '10 mm to 320 mm (ISO 6431)'                },
      { label: 'Media',         value: 'Compressed air, N₂, inert gases'           },
      { label: 'Standard',      value: 'ISO 6431 / CETOP / VDMA 24562'            }
    ],
    applications: [
      'ISO 6431 standard pneumatic cylinder overhaul',
      'Compact cylinder and short-stroke actuator sealing',
      'Pneumatic gripper and clamp cylinder maintenance',
      'Industrial automation cylinder seal replacement',
      'Valve actuator cylinder overhaul'
    ],
    industriesServed: ['Chemical Industry', 'Pharmaceutical Industry', 'Food Industry', 'Textile Industry', 'Power Plants'],
    imageUrl: 'assets/images/products/pneumatic-seal-kit.jpg',
    imageAlt: 'Pneumatic Seal Kit — Burhani Seal Centre Kolkata',
    whatsappMessage: waMsg('Pneumatic Seal Kit'),
    featured: false,
    sortOrder: 44
  }
];

// ─────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────

export function getProductsByCategory(categoryId: string): Product[] {
  return PRODUCTS
    .filter(p => p.categoryId === categoryId)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS
    .filter(p => p.featured)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getCategoriesWithCount(): Category[] {
  return CATEGORIES.map(cat => ({
    ...cat,
    productCount: getProductsByCategory(cat.id).length
  })).sort((a, b) => a.sortOrder - b.sortOrder);
}
