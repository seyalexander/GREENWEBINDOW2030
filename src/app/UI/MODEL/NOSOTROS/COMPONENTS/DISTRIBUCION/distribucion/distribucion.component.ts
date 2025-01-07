import { Component } from '@angular/core';
import { ItemDistribucionComponent } from '../item-distribucion/item-distribucion.component';
import { Router } from '@angular/router';

@Component({
  selector: 'distribucion',
  imports: [
    ItemDistribucionComponent
  ],
  templateUrl: './distribucion.component.html',
  styleUrl: './distribucion.component.css'
})
export class DistribucionComponent {
  mainMenu: {
      accessLink: Array<any>;
    } = {
      accessLink: [],
    };

    constructor(private router: Router) {}

    ngOnInit(): void {
      this.mainMenu.accessLink = [
        {
          title: 'Misión',
          imagen: 'https://www.dropbox.com/scl/fi/nr4w3b6ppnf7hk9vpoqxn/MISI-N.png?rlkey=zs09t1sqqjd4p7vloozr2qbh1&st=ec1ekl3h&raw=1',
          descripcion:"En Green Webindow 2030, nuestra misión es promover una educación sostenible mediante la inmersión pluricultural y el aprendizaje basado en desafíos. Buscamos empoderar a estudiantes y docentes en el desarrollo de competencias, creando un espacio colaborativo para identificar problemas locales y compartir soluciones innovadoras a retos globales, fomentando el respeto por el medio ambiente, la inclusión social y el bienestar comunitario."
        },
        {
          title: 'Visión',
          imagen: 'https://www.dropbox.com/scl/fi/e3j2z29aktq4mfw67d9vq/VISI-N.png?rlkey=l9cgpev4umbh7t3urwgdlsdc6&st=uuj8ix4n&raw=1',
          descripcion:'Aspiramos a ser un referente en la educación intercultural y el desarrollo sostenible, donde estudiantes y docentes de diversas realidades socioculturales colaboren para enfrentar los desafíos contemporáneos. En Green Webindow 2030, visualizamos un futuro en el que la integración de conocimientos y experiencias contribuya a la creación de comunidades resilientes, comprometidas con la protección del planeta y la mejora de la calidad de vida de todos sus habitantes.'
        },
        {
          title: 'Enfoque',
          imagen: 'https://www.dropbox.com/scl/fi/qcz92xdeeqrp1z4e40t9y/ENFOQUE.png?rlkey=w8esq23lxqzqhj32ay7xh2w73&st=05bdcje1&raw=1',
          descripcion:'Con una metodología transdisciplinaria e intercultural, buscamos unir esfuerzos y recursos para enfrentar los retos globales de manera efectiva. Valoramos la diversidad y la inclusión, promoviendo un ambiente donde cada voz cuenta y cada experiencia es valiosa. A través de la colaboración y el respeto mutuo, aspiramos a generar soluciones innovadoras que reflejen la riqueza de nuestras comunidades.'
        }
      ]
    }
}
