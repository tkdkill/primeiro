import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inativo: boolean = true;

  texto: string = 'Texto do placeholder';

  constructor(){
    this.colocarAtivo();
  }

  colocarAtivo(){
    setTimeout(() => {
      this.inativo = false;
      this.texto = 'Texto alterado em 5s';
    }, 5000);
  }


}
