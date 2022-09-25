import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Operacao } from '../model/operacao';
import { OperacoesService } from '../servicos/operacoes.service';

@Component({
  selector: 'app-operacoes',
  templateUrl: './operacoes.component.html',
  styleUrls: ['./operacoes.component.scss']
})
export class OperacoesComponent implements OnInit {

  operacoes$: Observable<Operacao[]>;
  displayedColumns = ['categoria','descricao','valor']

  //operacoesService: OperacoesService;

  constructor(private operacoesService: OperacoesService) {
    //this.operacoesService = new OperacoesService();
    this.operacoes$ = this.operacoesService.list();
  }

  ngOnInit(): void {
  }

}
