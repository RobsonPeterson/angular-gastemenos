import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { OperacoesRoutingModule } from './operacoes-routing.module';
import { OperacoesComponent } from './operacoes/operacoes.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    OperacoesComponent
  ],
  imports: [
    CommonModule,
    OperacoesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class OperacoesModule { }
