import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-meu',
  templateUrl: './meu.component.html',
  styleUrls: ['./meu.component.css']
})
export class MeuComponent implements OnInit {

  nome: string = 'António';

  @Output() evento = new EventEmitter();

  AlterarNome() {
    this.nome = 'João';
    this.evento.emit();
  }







  constructor() { }

  ngOnInit() {
  }

}
