import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [
    `.cor{color: green;}`,
    `.cor2{color: lightgray;}`
  ]
})
export class AppComponent {
  title = 'Primeiro';
}
