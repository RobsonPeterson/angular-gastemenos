import { Component, OnInit } from '@angular/core';
import { Operacao } from '../model/operacao';

@Component({
  selector: 'app-operacoes',
  templateUrl: './operacoes.component.html',
  styleUrls: ['./operacoes.component.scss']
})
export class OperacoesComponent implements OnInit {

  operacoes: Operacao[] = [
    {_id:"1", categoria:"Despesa", descricao:"Compra Padaria"}
  ];
  displayedColumns = ['categoria','descricao']

  constructor() { }

  ngOnInit(): void {
  }

}
