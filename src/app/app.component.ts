import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor: boolean = false;

  cor: string = 'red';

  btn_Click(){
    if(this.valor){
      this.cor = 'blue';
    }else{
      this.cor = 'green';
    }
  }

}
