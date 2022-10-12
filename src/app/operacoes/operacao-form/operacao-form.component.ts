import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-operacao-form',
  templateUrl: './operacao-form.component.html',
  styleUrls: ['./operacao-form.component.scss']
})
export class OperacaoFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      descricao: [null],
      categoria: [null],
      valor: [null]
    });
   }

  ngOnInit(): void {
  }

}
