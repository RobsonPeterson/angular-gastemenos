import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Operacao } from '../model/operacao';


@Component({
  selector: 'app-operacoes-lista',
  templateUrl: './operacoes-lista.component.html',
  styleUrls: ['./operacoes-lista.component.scss']
})
export class OperacoesListaComponent implements OnInit {

  @Input() operacoes: Operacao[] = [];

  readonly displayedColumns = ['categoria', 'descricao', 'valor', 'acoes']

  constructor(
    private router: Router,
    private activeRounte: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  onAdd(){
    this.router.navigate(['new'],{relativeTo:this.activeRounte});
  }

}
