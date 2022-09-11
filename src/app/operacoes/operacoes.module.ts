import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacoesRoutingModule } from './operacoes-routing.module';
import { OperacoesComponent } from './operacoes/operacoes.component';


@NgModule({
  declarations: [
    OperacoesComponent
  ],
  imports: [
    CommonModule,
    OperacoesRoutingModule
  ]
})
export class OperacoesModule { }
