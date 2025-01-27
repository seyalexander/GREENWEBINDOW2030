import { AfterViewInit, Component, OnInit } from '@angular/core';
declare const confetti: any;
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializeConfetti();
  }

  initializeConfetti(): void {
    const runConfetti = document.querySelector('#hs-run-on-click-run-confetti');
    if (runConfetti) {
      runConfetti.addEventListener('click', () => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: {
            y: 0.6,
          },
        });
      });
    } else {
      console.error('Element #hs-run-on-click-run-confetti not found');
    }
  }
}
