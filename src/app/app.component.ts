import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //corDoElemento: string = 'blue';
  cor: string = 'red';
  cor2: string = 'blue';

  alterarCor(){
    this.cor = 'yellow';
  }

  alterarCor2(){
    this.cor2 = '#25524412'
  }

}
