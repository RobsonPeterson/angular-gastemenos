import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { OperacoesRoutingModule } from './operacoes-routing.module';
import { OperacoesComponent } from './operacoes/operacoes.component';

@NgModule({
  declarations: [
    OperacoesComponent
  ],
  imports: [
    CommonModule,
    OperacoesRoutingModule,
    AppMaterialModule
  ]
})
export class OperacoesModule { }
