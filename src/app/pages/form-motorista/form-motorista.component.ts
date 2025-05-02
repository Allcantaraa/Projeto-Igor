import { Component, inject, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../angular_material/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MotoristaService } from '../../services/motorista.service';
import { Router } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-form-motorista',
  standalone: true,
  imports: [
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  templateUrl: './form-motorista.component.html',
  styleUrl: './form-motorista.component.css'
})
export class FormMotoristaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  motoristaService = inject(MotoristaService);

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      cnh: ['', [Validators.required]],
      telefone: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      status: ['', Validators.required],
    });
  }

  cadastrar() {
    if (this.form.valid) {
      const motorista = {
        nome: this.form.value.nome,
        cnh: this.form.value.cnh,
        telefone: this.form.value.telefone,
        email: this.form.value.email,
        ativo: this.form.value.status
      };
      this.motoristaService.postMotorista(motorista);
      this.router.navigate(['/listaMotoristas'])
    } else {
      this.form.markAllAsTouched();
    }
  }

}