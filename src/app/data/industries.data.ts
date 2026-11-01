// ============================================
// INDUSTRIES DATA — each lists products from the catalogue
// ============================================

import { Industry } from '../models/industry.model';

export const INDUSTRIES: Industry[] = [
  {
    id: 'chemical-industry',
    name: 'Chemical Industry',
    slug: 'chemical-industry',
    icon: 'fa-flask',
    description: 'PTFE oil seals, Viton O-rings and gaskets, PTFE and Santoprene pump diaphragms, mechanical seals and spiral wound gaskets for corrosive process plant.',
    productsUsed: ['ptfe-oil-seal-double-lip', 'viton-o-rings', 'ptfe-diaphragm', 'mechanical-seals', 'spiral-wound-gaskets'],
    sortOrder: 1
  },
  {
    id: 'pharmaceutical-industry',
    name: 'Pharmaceutical Industry',
    slug: 'pharmaceutical-industry',
    icon: 'fa-pills',
    description: 'Silicone tubes, sponge sheets, gaskets and O-rings, Saunders-type valve diaphragms and pneumatic seals for clean process and packaging lines.',
    productsUsed: ['silicone-tubes', 'custom-silicone-gaskets', 'silicone-o-rings', 'saunders-type-valve-diaphragm', 'pneumatic-piston-seal-qyd'],
    sortOrder: 2
  },
  {
    id: 'food-industry',
    name: 'Food & Beverage Industry',
    slug: 'food-industry',
    icon: 'fa-utensils',
    description: 'Silicone and EPDM seals, tubes and extrusions, vacuum suction bellows and pneumatic seals for food and beverage processing and packing.',
    productsUsed: ['silicone-tubes', 'silicone-vacuum-suction-bellows', 'silicone-rubber-extrusions', 'epdm-gaskets', 'magnetic-piston-seal-mps-mk'],
    sortOrder: 3
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    slug: 'oil-gas',
    icon: 'fa-oil-well',
    description: 'Viton O-rings and cords, metallic and spiral wound gaskets, bonded seals and PTFE lip seals for pumps, valves and pipelines.',
    productsUsed: ['viton-o-rings', 'spiral-wound-gaskets', 'metallic-gaskets', 'bonded-seals-dowty-washers', 'ptfe-oil-seal-reverse-lips'],
    sortOrder: 4
  },
  {
    id: 'petrochemical',
    name: 'Petrochemical',
    slug: 'petrochemical',
    icon: 'fa-industry',
    description: 'AODD pump diaphragms, PTFE seals, Viton gaskets and rubber sheets, and mechanical seals for refineries and petrochemical plants.',
    productsUsed: ['aodd-pump-diaphragm', 'all-ptfe-seal-double-lip', 'viton-gaskets', 'viton-rubber-sheet', 'mechanical-seals'],
    sortOrder: 5
  },
  {
    id: 'water-treatment',
    name: 'Water Treatment',
    slug: 'water-treatment',
    icon: 'fa-water',
    description: 'EPDM diaphragms and butterfly valve seatings, flanged bellows, coupling elements and mechanical seals for water and effluent plants.',
    productsUsed: ['epdm-diaphragm', 'epdm-butterfly-valve-seating', 'epdm-flanged-bellows', 'star-coupling-element-mt', 'mechanical-seals'],
    sortOrder: 6
  },
  {
    id: 'power-plants',
    name: 'Power Plants',
    slug: 'power-plants',
    icon: 'fa-bolt',
    description: 'Engine and machine anti-vibration mounts, flanged bellows, metallic gaskets, oil seals and coupling elements for generating stations.',
    productsUsed: ['engine-anti-vibration-mount', 'nbr-flanged-bellows', 'metallic-gaskets', 'tc-oil-seal', 'hrc-coupling-element'],
    sortOrder: 7
  },
  {
    id: 'textile-industry',
    name: 'Textile Industry',
    slug: 'textile-industry',
    icon: 'fa-shirt',
    description: 'Pneumatic piston and rod seals, wipers, anti-vibration pads and coupling spiders for spinning, weaving and processing machines.',
    productsUsed: ['pneumatic-rod-seal-qyd', 'double-acting-wiper-seal-em', 'anti-vibration-pad', 'spider-element-gr', 'nbr-o-rings'],
    sortOrder: 8
  },
  {
    id: 'cement-industry',
    name: 'Cement Industry',
    slug: 'cement-industry',
    icon: 'fa-building',
    description: 'Oil seals and cassette seals, rubber dampers, coupling elements and heavy-duty hydraulic seals for kilns, mills and crushers.',
    productsUsed: ['ta-oil-seal', 'cassette-oil-seal', 'metal-rubber-damper', 'nm-coupling-element', 'vee-packing-seal'],
    sortOrder: 9
  },
  {
    id: 'steel-industry',
    name: 'Steel Industry',
    slug: 'steel-industry',
    icon: 'fa-gears',
    description: 'Hydraulic piston and rod seals, PTFE cap seals, guide rings, metal-cased wipers and large oil seals for rolling mills and presses.',
    productsUsed: ['u-ring-piston-seal-un', 'rod-cap-seal-gsi', 'guide-ring-wr', 'twin-lip-wiper-dkb', 'split-oil-seal'],
    sortOrder: 10
  },
  {
    id: 'paper-industry',
    name: 'Paper Industry',
    slug: 'paper-industry',
    icon: 'fa-newspaper',
    description: 'Oil seals and V-rings, rubber sheets and bellows, coupling elements and vacuum suction bellows for paper machines and converting lines.',
    productsUsed: ['v-ring-va', 'tc-oil-seal', 'neoprene-rubber-sheet', 'pu-bellows', 'nbr-vacuum-suction-bellows'],
    sortOrder: 11
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find(i => i.slug === slug);
}
