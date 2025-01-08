import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../SHARED/footer/footer.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  mainMenu: {
    accessLink: Array<any>;
  } = {
    accessLink: [],
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mainMenu.accessLink = [
      {
        name: 'Inicio',
        icon: 'uil uil-document-info',
        route: ['/','inicio']
      },
      {
        name: 'Nosotros',
        icon: 'uil uil-document-info',
        route: ['/','nosotros']
      },
      {
        name: 'Concursos',
        icon: 'uil uil-document-info',
        route: ['/','vision']
      },
      {
        name: 'Contacto',
        icon: 'uil uil-document-info',
        route: ['/','contacto']
      }
    ]
  }

  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
