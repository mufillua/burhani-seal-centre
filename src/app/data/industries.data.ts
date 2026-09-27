// ============================================
// INDUSTRIES DATA — Updated to match real products
// ============================================

import { Industry } from '../models/industry.model';

export const INDUSTRIES: Industry[] = [
  {
    id: 'chemical-industry',
    name: 'Chemical Industry',
    slug: 'chemical-industry',
    icon: 'fa-flask',
    description: 'Chemical-resistant Viton oil seals, PU hydraulic seals, rubber O Rings, hydraulic cylinder seals and corrosion-resistant stainless steel fittings for aggressive chemical process environments.',
    productsUsed: ['viton-oil-seal', 'pu-hydraulic-seal', 'rubber-o-ring', 'hydraulic-cylinder-seals', 'stainless-steel-pipe-nipple'],
    sortOrder: 1
  },
  {
    id: 'pharmaceutical-industry',
    name: 'Pharmaceutical Industry',
    slug: 'pharmaceutical-industry',
    icon: 'fa-pills',
    description: 'FDA-compliant and hygienic sealing solutions including stainless steel circlips, white silicone rubber sheets, pneumatic seal kits and rubber O Rings for GMP-compliant pharmaceutical manufacturing.',
    productsUsed: ['3mm-stainless-steel-circlips', '8mm-white-silicone-rubber-sheet', 'pneumatic-seal-kit', 'rubber-o-ring', 'stainless-steel-pipe-nipple'],
    sortOrder: 2
  },
  {
    id: 'food-industry',
    name: 'Food & Beverage Industry',
    slug: 'food-industry',
    icon: 'fa-utensils',
    description: 'Food-safe sealing products including white silicone rubber sheets, FDA-compliant rubber O Rings, stainless steel circlips and water pump seals for hygienic food and beverage processing.',
    productsUsed: ['8mm-white-silicone-rubber-sheet', 'rubber-o-ring', '3mm-stainless-steel-circlips', 'water-pump-seal', '3mm-black-silicone-rubber-sheet'],
    sortOrder: 3
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    slug: 'oil-gas',
    icon: 'fa-oil-well',
    description: 'High-pressure Viton oil seals, hydraulic cylinder seals, hydraulic oil seal kits, PU rod seals and gearbox oil seals for upstream and downstream oil and gas rotating and reciprocating equipment.',
    productsUsed: ['viton-oil-seal', 'hydraulic-cylinder-seals', 'hydraulic-oil-seal-kit', 'pu-rod-seal', 'gearbox-oil-seal'],
    sortOrder: 4
  },
  {
    id: 'petrochemical',
    name: 'Petrochemical',
    slug: 'petrochemical',
    icon: 'fa-industry',
    description: 'Viton oil seals, double lip seals, hydraulic oil seals, PU hydraulic seals and complete seal kits for petrochemical refinery rotating equipment and hydraulic systems.',
    productsUsed: ['viton-oil-seal', 'double-lip-seals', 'hydraulic-oil-seal', 'pu-hydraulic-seal', 'hydraulic-cylinder-seal-kits'],
    sortOrder: 5
  },
  {
    id: 'water-treatment',
    name: 'Water Treatment',
    slug: 'water-treatment',
    icon: 'fa-water',
    description: 'Water pump seals, rubber O Ring kits, PU coupling spiders, industrial tyre couplings and nitrile O Ring kits for water treatment plants, pumping stations and municipal water infrastructure.',
    productsUsed: ['water-pump-seal', 'nitrile-rubber-o-ring-kit', 'pu-coupling-spider', 'rubber-industrial-tyre-couplings', '20mm-water-pump-seal'],
    sortOrder: 6
  },
  {
    id: 'power-plants',
    name: 'Power Plants',
    slug: 'power-plants',
    icon: 'fa-bolt',
    description: 'SKF ball bearings, hydraulic oil seals, gearbox oil seals, SKF oil seals and hydraulic cylinder seal kits for thermal power plant rotating machinery, turbines and hydraulic systems.',
    productsUsed: ['skf-ball-bearings', 'hydraulic-oil-seal', 'gearbox-oil-seal', 'skf-oil-seals', 'hydraulic-cylinder-seal-kits'],
    sortOrder: 7
  },
  {
    id: 'textile-industry',
    name: 'Textile Industry',
    slug: 'textile-industry',
    icon: 'fa-shirt',
    description: 'Rubber O Rings, PU coupling spiders, rubber spider couplings, double lip seals and pneumatic seal kits for textile dyeing, processing and finishing machinery.',
    productsUsed: ['rubber-o-ring', 'pu-coupling-spider', 'rubber-spider-couplings', 'double-lip-seals', 'pneumatic-seal-kit'],
    sortOrder: 8
  },
  {
    id: 'cement-industry',
    name: 'Cement Industry',
    slug: 'cement-industry',
    icon: 'fa-building',
    description: 'SKF ball bearings, double lip seals, hydraulic cylinder seals, gearbox oil seals and rubber industrial tyre couplings for cement kilns, ball mills and bulk material handling equipment.',
    productsUsed: ['skf-ball-bearings', 'double-lip-seals', 'hydraulic-cylinder-seals', 'gearbox-oil-seal', 'rubber-industrial-tyre-couplings'],
    sortOrder: 9
  },
  {
    id: 'steel-industry',
    name: 'Steel Industry',
    slug: 'steel-industry',
    icon: 'fa-gears',
    description: 'SKF ball bearings, hydraulic cylinder seals, PU rod seals, hydraulic wiper seals and hydraulic oil seal kits for steel rolling mills, continuous casting equipment and hydraulic systems.',
    productsUsed: ['skf-ball-bearings', 'hydraulic-cylinder-seals', 'pu-rod-seal', 'hydraulic-wiper-seal', 'hydraulic-oil-seal-kit'],
    sortOrder: 10
  },
  {
    id: 'paper-industry',
    name: 'Paper Industry',
    slug: 'paper-industry',
    icon: 'fa-newspaper',
    description: 'Rubber spider couplings, PU coupling spiders, rubber industrial tyre couplings, double lip seals and rubber O Rings for paper and pulp manufacturing equipment.',
    productsUsed: ['rubber-spider-couplings', 'pu-coupling-spider', 'rubber-industrial-tyre-couplings', 'double-lip-seals', 'rubber-o-ring'],
    sortOrder: 11
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find(i => i.slug === slug);
}
