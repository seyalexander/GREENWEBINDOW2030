import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-distribucion',
  imports: [],
  templateUrl: './item-distribucion.component.html',
  styleUrl: './item-distribucion.component.css'
})
export class ItemDistribucionComponent {
  @Input() imagen: string = ""
  @Input() titulo: string = ""
  @Input() descripcion: string = ""
}
