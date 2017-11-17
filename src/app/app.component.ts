import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // novo_nome: string = 'António Pinho';

  novos_socios = [];

  constructor() {
    this.novos_socios.push({nome: 'socio1', contacto: '455689'});
    this.novos_socios.push({nome: 'socio2', contacto: '514785'});
    this.novos_socios.push({nome: 'socio3', contacto: '654781'});
    this.novos_socios.push({nome: 'socio4', contacto: '785425'});
    this.novos_socios.push({nome: 'socio5', contacto: '258474'});
    this.novos_socios.push({nome: 'socio6', contacto: '356873'});
    this.novos_socios.push({nome: 'socio7', contacto: '376878'});

  }

}
