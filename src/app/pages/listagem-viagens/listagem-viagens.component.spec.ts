import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemViagensComponent } from './listagem-viagens.component';

describe('ListagemViagensComponent', () => {
  let component: ListagemViagensComponent;
  let fixture: ComponentFixture<ListagemViagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemViagensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
