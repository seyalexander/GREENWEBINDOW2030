import { Component } from '@angular/core';
import { CarouselComponent } from '../../../../SHARED/carousel/carousel.component';

@Component({
  selector: 'app-proyecto-2',
  standalone: true,
  imports: [
    CarouselComponent
  ],
  templateUrl: './proyecto-2.component.html',
  styleUrl: './proyecto-2.component.css'
})
export class Proyecto2Component {
  imagen_a: string = "https://www.dropbox.com/scl/fi/e4ev6r3a6y018iawxqkii/20241210_101057-0.jpg?rlkey=fyou10j2if1kvw7h8mv5f2xsq&st=35kttok0&raw=1"
  imagen_b: string = "https://www.dropbox.com/scl/fi/e54gobrhoxtmbj9oce9gh/20241223_110249.jpg?rlkey=xrhvil6adva2d9msqqn8lix8w&st=spvmef1j&raw=1"
  imagen_c: string = "https://www.dropbox.com/scl/fi/qle1ji85w4us7962xirke/IMG_20241216_182210.jpg?rlkey=4ge19bs2yn51314xixth8vywq&st=9n9bkpgw&raw=1"
  imagen_d: string = "https://www.dropbox.com/scl/fi/0bqxqphj5hxdkkbesxes7/20241210_113143.jpg?rlkey=iatvwo3y6i96s44g7o2jtsvtu&st=9hjqoqh6&raw=1"
  imagen_e: string = "https://www.dropbox.com/scl/fi/jrcc9pxrtm4vr8tek7gkx/20241210_102948.jpg?rlkey=l27mmlqlngul2c1a3o938cslp&st=xifgyf9o&raw=1"
}
