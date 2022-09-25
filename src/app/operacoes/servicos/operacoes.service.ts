import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operacao } from './../model/operacao';
import { delay, first, take, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OperacoesService {
  private readonly API = '/assets/operacoes.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Operacao[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(operacoes => console.log(operacoes))
    );
  }
}
