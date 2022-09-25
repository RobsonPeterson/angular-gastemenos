import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Operacao } from '../model/operacao';
import { OperacoesService } from '../servicos/operacoes.service';

@Component({
  selector: 'app-operacoes',
  templateUrl: './operacoes.component.html',
  styleUrls: ['./operacoes.component.scss']
})
export class OperacoesComponent implements OnInit {

  operacoes$: Observable<Operacao[]>;
  displayedColumns = ['categoria', 'descricao', 'valor']

  constructor(
    private operacoesService: OperacoesService,
    public dialog: MatDialog
    ) {
    this.operacoes$ = this.operacoesService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar operações.')
          return of([])
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }
}
