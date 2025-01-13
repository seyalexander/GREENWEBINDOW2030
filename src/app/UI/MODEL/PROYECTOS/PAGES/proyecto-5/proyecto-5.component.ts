import { Component } from '@angular/core';
import { CarouselComponent } from '../../../../SHARED/carousel/carousel.component';

@Component({
  selector: 'app-proyecto-5',
  standalone: true,
  imports: [
    CarouselComponent
  ],
  templateUrl: './proyecto-5.component.html',
  styleUrl: './proyecto-5.component.css'
})
export class Proyecto5Component {
  imagen_a: string = "https://www.dropbox.com/scl/fi/w071w5d3j0m3ikp6xf10v/IMG-20241210-WA0023.jpg?rlkey=7db6eegqj350e0pjjonddncuf&st=srb6u23d&raw=1"
  imagen_b: string = "https://www.dropbox.com/scl/fi/l6wpkhivuue2trcox8edt/IMG-20241210-WA0055.jpg?rlkey=orwf9b8zxogzhz0jq8k1seyxu&st=4sa22tk8&raw=1"
  imagen_c: string = "https://www.dropbox.com/scl/fi/0ljzcl0s1p9n5ckiuwd3u/IMG-20241210-WA0092.jpg?rlkey=10v8tywjdll7nndbl7eg9nvs1&st=x7q96qbh&raw=1"
  imagen_d: string = "https://www.dropbox.com/scl/fi/9r1chtkgsnxf4rkxqphpc/IMG-20241210-WA0057.jpg?rlkey=dnchvil6v63l9pfcyt9skdziv&st=z0sgh7jv&raw=1"
  imagen_e: string = "https://www.dropbox.com/scl/fi/8lvq60005aajvfk9wzzsr/IMG-20241210-WA0041.jpg?rlkey=5e3kne4vhf0w50xbivbm8g2l7&st=k5mkda9c&raw=1"
}
