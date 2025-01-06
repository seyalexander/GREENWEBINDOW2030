import { Component } from '@angular/core';
import {  Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css'
})
export class InicioPageComponent {
  mainMenu: {
    accessLink: Array<any>;
  } = {
    accessLink: [],
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mainMenu.accessLink = [
      {
        name: 'PATHS OF VALUE',
        icon: 'uil uil-document-info',
        route: ['/','proyecto-1']
      },
      {
        name: 'GREENER CLUB',
        icon: 'uil uil-document-info',
        route: ['/','proyecto-2']
      },
      {
        name: 'LIVING LIBRARY',
        icon: 'uil uil-document-info',
        route: ['/','proyecto-3']
      },
      {
        name: 'ONE HAND TO HELP',
        icon: 'uil uil-document-info',
        route: ['/','proyecto-4']
      },
      {
        name: 'ROOTS OF EMPATHY',
        icon: 'uil uil-document-info',
        route: ['/','proyecto-5']
      },
      {
        name: ' ECO-PAWS PET PROJECT',
        icon: 'uil uil-document-info',
        route: ['/','proyecto-6']
      }
    ]
  }
}
