import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info: string = 'Tudo calmo';

  escuta(valor: string) {
    this.info = 'Nome foi alterado para ' + valor;
  }

}
