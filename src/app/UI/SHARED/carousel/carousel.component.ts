import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
 @Input() imagen_a: string = ""
 @Input() imagen_b: string = ""
 @Input() imagen_c: string = ""
 @Input() imagen_d: string = ""
 @Input() imagen_e: string = ""


}
