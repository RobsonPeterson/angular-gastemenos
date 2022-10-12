import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacoesListaComponent } from './operacoes-lista.component';

describe('OperacoesListaComponent', () => {
  let component: OperacoesListaComponent;
  let fixture: ComponentFixture<OperacoesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacoesListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperacoesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
