import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texto_botao: string = 'Apresentar';
  apresentar: boolean = false;

  btn_Click(){
    //adicionar ou remover o parágrafo
    if(this.apresentar){
      this.apresentar = false;
      this.texto_botao = 'Apresentar';
    }else{
      this.apresentar = true;
      this.texto_botao = 'Remover';
    }

  }

}
