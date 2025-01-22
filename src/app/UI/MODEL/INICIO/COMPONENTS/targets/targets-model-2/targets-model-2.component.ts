import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'targets-model-2',
  imports: [RouterLink],
  templateUrl: './targets-model-2.component.html',
  styleUrl: './targets-model-2.component.css'
})
export class TargetsModel2Component {
  @Input() titulo: string = ""
  @Input() detalle: string = ""
  @Input() imagen: string = ""
  @Input() clase: string = ""
  @Input() router: string = ""
}
