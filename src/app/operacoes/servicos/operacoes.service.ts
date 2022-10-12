import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operacao } from './../model/operacao';
import { delay, first, take, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OperacoesService {
  private readonly API = 'api/operacoes';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Operacao[]>(this.API)
    .pipe(
      first(),
      tap(operacoes => console.log(operacoes))
    );
  }

  save(record: Operacao){
    return this.httpClient.post<Operacao>(this.API, record).pipe(first());
  }
}
