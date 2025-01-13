import { Component } from '@angular/core';
import { CarouselComponent } from '../../../../SHARED/carousel/carousel.component';

@Component({
  selector: 'app-proyecto-3',
  standalone: true,
  imports: [
    CarouselComponent
  ],
  templateUrl: './proyecto-3.component.html',
  styleUrl: './proyecto-3.component.css'
})
export class Proyecto3Component {
  imagen_a: string = "https://www.dropbox.com/scl/fi/jlan7aqwqdip11u6xnhon/IMG_2321.jpg?rlkey=r4dldxrei1ig009ridjw0hzti&st=amfi32ws&raw=1"
  imagen_b: string = "https://www.dropbox.com/scl/fi/h2r22iku4msyvfsj9dhwd/IMG_2332.jpg?rlkey=jlc1xws8pjwr9h46wnu2uxac2&st=n0u8poz9&raw=1"
  imagen_c: string = "https://www.dropbox.com/scl/fi/1ge3jkatvnlgitwwaokon/IMG_2333.jpg?rlkey=0edksx58a38plyaupghyvgzkk&st=3hoqmf2u&raw=1"
  imagen_d: string = "https://www.dropbox.com/scl/fi/iyr5n50ldk5tvbfu8zr1j/IMG_2357.jpg?rlkey=p09me38ctlc1579l38wq8xr2f&st=k4ha1ex2&raw=1"
  imagen_e: string = "https://www.dropbox.com/scl/fi/nsn4y6bz38l6ckl8yn7nj/IMG_2366.jpg?rlkey=xsj5cyzckkd8unopbnwi0ssfv&st=vub80nhi&raw=1"
}
