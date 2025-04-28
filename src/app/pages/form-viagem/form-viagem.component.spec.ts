import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormViagemComponent } from './form-viagem.component';

describe('FormViagemComponent', () => {
  let component: FormViagemComponent;
  let fixture: ComponentFixture<FormViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormViagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
