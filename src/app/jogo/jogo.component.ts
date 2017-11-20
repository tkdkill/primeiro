import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  // elementos que contituem a operação
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;
  str_operacao: string = '';

  valor_inserido: number;
  // ======================================
  CriarNovaOperacao() {
    // criar eleatoriamente uma edição
    this.valor1 = Math.floor(Math.random() * 10);
    this.valor2 = Math.floor(Math.random() * 10);
    this.resultado = this.valor1 + this.valor2;
    this.str_operacao = this.valor1 + ' + ' + this.valor2 + ' = ';

  }

  // ======================================
  constructor() { 
    this.CriarNovaOperacao();

  }
  // ======================================

  ngOnInit() {
  }

}
