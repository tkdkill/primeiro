import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  alterarEstilo(){
    return {
      //'backgroundColor': 'blue',
      //'color': 'white'
      //CamelCase
      backgroundColor: 'green',
      color: 'red'
    };
  }

  estado: boolean = true;

  alternar(){
    if(this.estado){
      this.estado = false;
    }else{
      this.estado = true;
    }
  }

}
