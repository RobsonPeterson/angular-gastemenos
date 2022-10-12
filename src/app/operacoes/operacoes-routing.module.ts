import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperacoesComponent } from './operacoes/operacoes.component';
import { OperacaoFormComponent } from './operacao-form/operacao-form.component';

const routes: Routes = [
  { path: '', component: OperacoesComponent },
  { path: 'new', component: OperacaoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacoesRoutingModule { }
