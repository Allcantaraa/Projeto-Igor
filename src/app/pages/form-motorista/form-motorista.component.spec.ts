import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMotoristaComponent } from './form-motorista.component';

describe('FormMotoristaComponent', () => {
  let component: FormMotoristaComponent;
  let fixture: ComponentFixture<FormMotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMotoristaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
