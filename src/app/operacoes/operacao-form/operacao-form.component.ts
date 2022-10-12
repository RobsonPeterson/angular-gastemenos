import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OperacoesService } from '../servicos/operacoes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-operacao-form',
  templateUrl: './operacao-form.component.html',
  styleUrls: ['./operacao-form.component.scss']
})
export class OperacaoFormComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder,
    private service: OperacoesService,
    private _snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      descricao: [null],
      categoria: [null],
      valor: [null]
    });
   }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }
  private onSuccess() {
    this._snackBar.open('Operação adicionada com Sucesso!', 'fechar' ,{duration: 5000})
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao adicionar Operacão', 'fechar' ,{duration: 5000})
  }
}
