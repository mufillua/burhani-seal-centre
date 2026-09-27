import 'zone.js';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { FooterComponent } from './shared/components/footer/footer';
import { WhatsappButtonComponent } from './shared/components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    WhatsappButtonComponent
  ],
  template: `
  <!-- <h1>Burhani Seal Centre</h1>
  <p>Angular is working.</p> -->

    <app-navbar></app-navbar>

    <main class="main-content">
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
    <app-whatsapp-button></app-whatsapp-button>
  `,
  styles: [`
    .main-content {
      min-height: 100vh;
      //padding-top: 80px;
    }
  `]
})
export class AppComponent {
  title = 'burhani-seal-centre';
}
