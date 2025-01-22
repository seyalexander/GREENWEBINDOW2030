import { Component } from '@angular/core';
import {  Router, RouterLink } from '@angular/router';
import { CarouselComponent } from '../../../../SHARED/carousel/carousel.component';
import { TargetsModel2Component } from '../../COMPONENTS/targets/targets-model-2/targets-model-2.component';


@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [
    RouterLink,
    CarouselComponent,
    TargetsModel2Component
  ],
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css'
})
export class InicioPageComponent {

   imagen_a: string = "https://www.dropbox.com/scl/fi/u7427cpq0jux3qdtgvgyf/green-webindow.png?rlkey=tuzd1vj5al3mcer34bj0jochz&st=swqqocar&raw=1"
   imagen_b: string = "https://www.dropbox.com/scl/fi/jd0jf2m8kiuhxn8rx93xu/WhatsApp-Image-2024-12-28-at-3.38.02-PM-7.jpeg?rlkey=q5tbbe24zre67lxcb1mqjnsue&st=xp76p23r&raw=1"
   imagen_c: string = "https://www.dropbox.com/scl/fi/tpwmusewdp9rc2zi247qz/Imagen-de-WhatsApp-2025-01-06-a-las-22.47.24_9a22a43e.jpg?rlkey=3c4cs5q7xqzr9kuc3rfoqfgbo&st=tsj4k5du&raw=1"
   imagen_d: string = "https://www.dropbox.com/scl/fi/dtfzrxlhcpmkyw83mflkm/Imagen-de-WhatsApp-2025-01-06-a-las-22.49.15_19d85958.jpg?rlkey=x020282rv35sh713gkrygxry8&st=m82dmrgt&raw=1"
   imagen_e: string = "https://www.dropbox.com/scl/fi/jd0jf2m8kiuhxn8rx93xu/WhatsApp-Image-2024-12-28-at-3.38.02-PM-7.jpeg?rlkey=q5tbbe24zre67lxcb1mqjnsue&st=oa71ys38&raw=1"


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
        detalle: 'detalle 1',
        route: ['/','proyecto-1']
      },
      {
        name: 'GREENER CLUB',
        imagen: 'https://www.dropbox.com/scl/fi/x9fgwkayjyrgqsgts6r5y/PROYECTO-2.png?rlkey=pqh3jt7pyynftntc7fv332xdx&st=xjprlw3w&raw=1',
        icon: 'uil uil-document-info',
        clase: 'cuadro-2',
        detalle: 'detalle 2',
        route: ['/','proyecto-2']
      },
      {
        name: 'LIVING LIBRARY',
        imagen: 'https://www.dropbox.com/scl/fi/9jb2u7m0uqf6t4nu428k5/PROYECTO-3.png?rlkey=r8zc5bqzpm4kyl0tcrt5byvbw&st=0zlx43rw&raw=1',
        icon: 'uil uil-document-info',
        clase: 'cuadro-3',
        detalle: 'detalle 3',
        route: ['/','proyecto-3']
      },
      {
        name: 'ONE HAND TO HELP',
        imagen: 'https://www.dropbox.com/scl/fi/tow847g5v41rciuv3wxnv/PROYECTO-4.png?rlkey=xz27vb9nij6x5357j7viuk59d&st=as2q03zh&raw=1',
        icon: 'uil uil-document-info',
        clase: 'cuadro-4',
        detalle: 'detalle 4',
        route: ['/','proyecto-4']
      },
      {
        name: 'ROOTS OF EMPATHY',
        imagen: 'https://www.dropbox.com/scl/fi/2r4dox0j4z5kq9cx02ju4/PROYECTO-5.png?rlkey=2hrwhiymazzxsv3mdn8um8ah5&st=n1nomwib&raw=1',
        icon: 'uil uil-document-info',
        clase: 'cuadro-5',
        detalle: 'detalle 5',
        route: ['/','proyecto-5']
      },
      {
        name: ' ECO-PAWS PET PROJECT',
        imagen: 'https://www.dropbox.com/scl/fi/8owf5a7g4ynhehr4x2476/PROYECTO-6.png?rlkey=98tkgiosq0jh3d8mth06o16b2&st=q5zqvyi8&raw=1',
        icon: 'uil uil-document-info',
        clase: 'cuadro-6',
        detalle: 'detalle 6',
        route: ['/','proyecto-6']
      }
    ]
  }
}
