import { Component } from '@angular/core';
import { CarouselComponent } from '../../../../SHARED/carousel/carousel.component';

@Component({
  selector: 'app-proyecto-4',
  standalone: true,
  imports: [
    CarouselComponent
  ],
  templateUrl: './proyecto-4.component.html',
  styleUrl: './proyecto-4.component.css'
})
export class Proyecto4Component {
  imagen_a: string = "https://www.dropbox.com/scl/fi/npqfi36l6zcnl3bfclw54/20241211_075622.jpg?rlkey=rl9rqn14dgd97xeohal28t3zb&st=klhp7puz&raw=1"
  imagen_b: string = "https://www.dropbox.com/scl/fi/fivc6w2rxpyd4yb34xait/20241211_080440.jpg?rlkey=kbsemxriuumz9jctjff11zpf2&st=083zrfn4&raw=1"
  imagen_c: string = "https://www.dropbox.com/scl/fi/giiwbh6jxd06ghpw8cbyh/20241211_080848.jpg?rlkey=xvg4nl6ore1tenw8anzw70max&st=3u3u2a0y&raw=1"
  imagen_d: string = "https://www.dropbox.com/scl/fi/gufz3ibxfubgiq2jmnj74/IMG-20241211-WA0013.jpg?rlkey=h6d2v9r700gmx1egzhlsaac1n&st=1h8ar7db&raw=1"
  imagen_e: string = "https://www.dropbox.com/scl/fi/0c0bpmrwdjeeaui0rx9l2/IMG-20241211-WA0017.jpg?rlkey=2urwqcbm6yfboi6tc512izuoj&st=76jmbipj&raw=1"
}
