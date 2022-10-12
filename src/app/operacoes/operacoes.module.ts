import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { OperacoesRoutingModule } from './operacoes-routing.module';
import { OperacoesComponent } from './operacoes/operacoes.component';
import { OperacaoFormComponent } from './operacao-form/operacao-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OperacoesComponent,
    OperacaoFormComponent
  ],
  imports: [
    CommonModule,
    OperacoesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OperacoesModule { }
