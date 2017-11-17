import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent {

  // @Input() nome: string = 'António';

   @Input() socios = [];

  constructor() {
    this.socios.push({nome: 'António', contacto: '12345'});
    this.socios.push({nome: 'Pedro', contacto: '12354' });
    this.socios.push({nome: 'João', contacto: '21345' });
    this.socios.push({nome: 'Margarida', contacto: '31254'});
  }


}
