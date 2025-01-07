import { Component } from '@angular/core';
import { CarouselComponent } from '../../../../SHARED/carousel/carousel.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [
    CarouselComponent
  ],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NOSOTROSComponent {
  imagen_a: string = "https://www.dropbox.com/scl/fi/u7427cpq0jux3qdtgvgyf/green-webindow.png?rlkey=tuzd1vj5al3mcer34bj0jochz&st=swqqocar&raw=1"
  imagen_b: string = "https://www.dropbox.com/scl/fi/jd0jf2m8kiuhxn8rx93xu/WhatsApp-Image-2024-12-28-at-3.38.02-PM-7.jpeg?rlkey=q5tbbe24zre67lxcb1mqjnsue&st=xp76p23r&raw=1"
  imagen_c: string = "https://www.dropbox.com/scl/fi/grxpcoilrhyo60367p18v/1.jpg?rlkey=wl4d1kkjf76rgkqo73083qk2y&st=ty8tmcae&raw=1"
  imagen_d: string = "https://images.pexels.com/photos/666870/pexels-photo-666870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  imagen_e: string = "https://images.pexels.com/photos/26201108/pexels-photo-26201108/free-photo-of-perro-mascota-cabeza-habitacion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}
