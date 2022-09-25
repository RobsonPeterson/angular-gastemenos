import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { OperacoesRoutingModule } from './operacoes-routing.module';
import { OperacoesComponent } from './operacoes/operacoes.component';

@NgModule({
  declarations: [
    OperacoesComponent
  ],
  imports: [
    CommonModule,
    OperacoesRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class OperacoesModule { }
