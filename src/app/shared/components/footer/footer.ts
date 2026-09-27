// ============================================
// FOOTER COMPONENT
// ============================================
// Luxury multi-column footer displayed on every page.

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../../services/whatsapp.service';
import { environment } from '../../../../environments/environments';

interface FooterLink { label: string; path: string; }
interface SocialLink { icon: string; url: string; label: string; }

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {

  readonly company = environment.company;
  readonly currentYear = new Date().getFullYear();

  readonly quickLinks: FooterLink[] = [
    { label: 'Home',       path: '/'           },
    { label: 'About Us',   path: '/about'      },
    { label: 'Products',   path: '/products'   },
    { label: 'Industries', path: '/industries' },
    { label: 'Contact Us', path: '/contact'    }
  ];

  readonly productLinks: FooterLink[] = [
    { label: 'Oil Seals',              path: '/products' },
    { label: 'Seals',                  path: '/products' },
    { label: 'PU Coupling Spider',     path: '/products' },
    { label: 'Seal Kits',              path: '/products' },
    { label: 'Rubber Sheets',          path: '/products' },
    { label: 'Pump Seals',             path: '/products' },
    { label: 'Hydraulic Oil Seals',    path: '/products' },
    { label: 'O Ring Kits',            path: '/products' },
    { label: 'SKF Ball Bearings',      path: '/products' },
    { label: 'Spider Couplings',       path: '/products' }
  ];

  readonly industryLinks: FooterLink[] = [
    { label: 'Chemical Industry',      path: '/industries' },
    { label: 'Pharmaceutical',         path: '/industries' },
    { label: 'Oil & Gas',              path: '/industries' },
    { label: 'Power Plants',           path: '/industries' },
    { label: 'Water Treatment',        path: '/industries' },
    { label: 'Steel Industry',         path: '/industries' }
  ];

  readonly socialLinks: SocialLink[] = [
    { icon: 'fab fa-linkedin-in', url: this.company.social.linkedin, label: 'LinkedIn' },
    { icon: 'fab fa-facebook-f',  url: this.company.social.facebook, label: 'Facebook' },
    { icon: 'fab fa-instagram',   url: this.company.social.instagram, label: 'Instagram' },
    { icon: 'fab fa-whatsapp',    url: `https://wa.me/${this.company.whatsapp.replace(/\D/g,'')}`, label: 'WhatsApp' }
  ];

  constructor(private whatsappService: WhatsappService) {}

  openWhatsApp(): void {
    this.whatsappService.openGeneralEnquiry();
  }

  trackByPath(_i: number, link: FooterLink): string { return link.path + link.label; }
  trackByLabel(_i: number, link: SocialLink): string { return link.label; }
}
