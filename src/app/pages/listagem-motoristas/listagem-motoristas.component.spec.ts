import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemMotoristasComponent } from './listagem-motoristas.component';

describe('ListagemMotoristasComponent', () => {
  let component: ListagemMotoristasComponent;
  let fixture: ComponentFixture<ListagemMotoristasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemMotoristasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemMotoristasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
