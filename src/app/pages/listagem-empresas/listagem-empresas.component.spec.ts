import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemEmpresasComponent } from './listagem-empresas.component';

describe('ListagemEmpresasComponent', () => {
  let component: ListagemEmpresasComponent;
  let fixture: ComponentFixture<ListagemEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemEmpresasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
