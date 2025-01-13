import { Component } from '@angular/core';
import {  Router, RouterLink } from '@angular/router';
import { CarouselComponent } from '../../../../SHARED/carousel/carousel.component';


@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [
    RouterLink,
    CarouselComponent
  ],
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css'
})
export class InicioPageComponent {

   imagen_a: string = "https://www.dropbox.com/scl/fi/u7427cpq0jux3qdtgvgyf/green-webindow.png?rlkey=tuzd1vj5al3mcer34bj0jochz&st=swqqocar&raw=1"
   imagen_b: string = "https://www.dropbox.com/scl/fi/jd0jf2m8kiuhxn8rx93xu/WhatsApp-Image-2024-12-28-at-3.38.02-PM-7.jpeg?rlkey=q5tbbe24zre67lxcb1mqjnsue&st=xp76p23r&raw=1"
   imagen_c: string = "https://www.dropbox.com/scl/fi/grxpcoilrhyo60367p18v/1.jpg?rlkey=wl4d1kkjf76rgkqo73083qk2y&st=ty8tmcae&raw=1"
   imagen_d: string = "https://images.pexels.com/photos/666870/pexels-photo-666870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   imagen_e: string = "https://images.pexels.com/photos/26201108/pexels-photo-26201108/free-photo-of-perro-mascota-cabeza-habitacion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


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
        imagen: 'https://www.dropbox.com/scl/fi/wboum1avbk7do6jwm5dzh/PROYECTO-1.png?rlkey=w8vz8a9jak1mgz0z4p45v4bl1&st=2g877m6n&raw=1',
        icon: 'uil uil-document-info',
        clase: 'cuadro-1',
        route: ['/','proyecto-1']
      },
      {
        name: 'GREENER CLUB',
        imagen: 'https://www.dropbox.com/scl/fi/x9fgwkayjyrgqsgts6r5y/PROYECTO-2.png?rlkey=pqh3jt7pyynftntc7fv332xdx&st=xjprlw3w&raw=1',
        icon: 'uil uil-document-info',
        clase: 'cuadro-2',
        route: ['/','proyecto-2']
      },
      {
        name: 'LIVING LIBRARY',
        imagen: 'https://www.dropbox.com/scl/fi/9jb2u7m0uqf6t4nu428k5/PROYECTO-3.png?rlkey=r8zc5bqzpm4kyl0tcrt5byvbw&st=0zlx43rw&raw=1',
        icon: 'uil uil-document-info',
        clase: 'cuadro-3',
        route: ['/','proyecto-3']
      },
      {
        name: 'ONE HAND TO HELP',
        imagen: 'https://www.dropbox.com/scl/fi/wboum1avbk7do6jwm5dzh/PROYECTO-1.png?rlkey=w8vz8a9jak1mgz0z4p45v4bl1&st=2g877m6n&raw=1',
        icon: 'uil uil-document-info',
        clase: 'cuadro-4',
        route: ['/','proyecto-4']
      },
      {
        name: 'ROOTS OF EMPATHY',
        imagen: 'https://www.dropbox.com/scl/fi/2r4dox0j4z5kq9cx02ju4/PROYECTO-5.png?rlkey=2hrwhiymazzxsv3mdn8um8ah5&st=n1nomwib&raw=1',
        icon: 'uil uil-document-info',
        clase: 'cuadro-5',
        route: ['/','proyecto-5']
      },
      {
        name: ' ECO-PAWS PET PROJECT',
        imagen: 'https://www.dropbox.com/scl/fi/8owf5a7g4ynhehr4x2476/PROYECTO-6.png?rlkey=98tkgiosq0jh3d8mth06o16b2&st=q5zqvyi8&raw=1',
        icon: 'uil uil-document-info',
        clase: 'cuadro-6',
        route: ['/','proyecto-6']
      }
    ]
  }
}
