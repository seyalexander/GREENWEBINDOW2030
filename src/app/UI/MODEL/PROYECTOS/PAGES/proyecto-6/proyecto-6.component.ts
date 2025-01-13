import { Component } from '@angular/core';
import { CarouselComponent } from '../../../../SHARED/carousel/carousel.component';

@Component({
  selector: 'app-proyecto-6',
  standalone: true,
  imports: [
    CarouselComponent
  ],
  templateUrl: './proyecto-6.component.html',
  styleUrl: './proyecto-6.component.css'
})
export class Proyecto6Component {
  imagen_a: string = "https://www.dropbox.com/scl/fi/cd5r6szrvspgcku8sofju/WhatsApp-Image-2024-12-16-at-8.50.31-AM.jpeg?rlkey=wtfbofcg8wrgdore4a4lb5hwp&st=ctj3ekxv&raw=1"
  imagen_b: string = "https://www.dropbox.com/scl/fi/sr5g5tx9ioglmw65qva2k/WhatsApp-Image-2024-12-16-at-8.47.49-AM.jpeg?rlkey=s77oaiho4pv3fa7tftsln7hxw&st=4pcmdfw2&raw=1"
  imagen_c: string = "https://www.dropbox.com/scl/fi/tq42de4n35hld20wz5vao/WhatsApp-Image-2024-12-16-at-8.47.44-AM.jpeg?rlkey=n1t7j76kpmxm0nli42ndeotsi&st=qurdqsgk&raw=1"
  imagen_d: string = "https://www.dropbox.com/scl/fi/kh9la6rxt2kb8kixu7dtv/WhatsApp-Image-2024-12-16-at-8.50.32-AM-2.jpeg?rlkey=jit7j496nku406yt3vlbkxj9y&st=h8ch22x3&raw=1"
  imagen_e: string = "https://www.dropbox.com/scl/fi/kt4s951fkojxaq6rpdi23/WhatsApp-Image-2024-12-16-at-8.50.34-AM.jpeg?rlkey=58vkykcoguzwcxwwfbd05hjy7&st=6nx2dcil&raw=1"
}
