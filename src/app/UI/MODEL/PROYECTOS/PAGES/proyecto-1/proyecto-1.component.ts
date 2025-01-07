import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarouselComponent } from '../../../../SHARED/carousel/carousel.component';

@Component({
  selector: 'app-proyecto-1',
  standalone: true,
  imports: [
    CarouselComponent
  ],
  templateUrl: './proyecto-1.component.html',
  styleUrl: './proyecto-1.component.css'
})
export class Proyecto1Component {
  imagen_a: string = "https://www.dropbox.com/scl/fi/gm1wvuwh9x12pknrx3wf4/WhatsApp-Image-2024-12-28-at-3.37.07-PM-4.jpeg?rlkey=oe5mib67nhen4qilt5orld4b9&st=k60hu0rx&raw=1"
  imagen_b: string = "https://www.dropbox.com/scl/fi/c7aztq41d2nf03csko3be/WhatsApp-Image-2024-12-28-at-3.37.04-PM-1.jpeg?rlkey=txccmfpsrwmc0rsyddr5urrdb&st=hotienod&raw=1"
  imagen_c: string = "https://www.dropbox.com/scl/fi/d6tm6dw0zl8o2gcu8rxz4/WhatsApp-Image-2024-12-28-at-3.37.04-PM-2.jpeg?rlkey=78artmpu9g03n1gqalvkx12h2&st=wd4430vf&raw=1"
  imagen_d: string = "https://www.dropbox.com/scl/fi/jd0jf2m8kiuhxn8rx93xu/WhatsApp-Image-2024-12-28-at-3.38.02-PM-7.jpeg?rlkey=q5tbbe24zre67lxcb1mqjnsue&st=mfw841dd&raw=1"
  imagen_e: string = "https://www.dropbox.com/scl/fi/g91niacf935nx2oybjhg6/WhatsApp-Image-2024-12-28-at-3.39.05-PM-12.jpeg?rlkey=i1r860dhnqfh0f8j381v9t29n&st=726qivg3&raw=1"
}
