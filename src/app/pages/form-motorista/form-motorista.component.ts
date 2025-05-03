import { Component, inject, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../angular_material/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MotoristaService } from '../../services/motorista.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  editando: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      cnh: ['', [Validators.required]],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      status: ['', Validators.required],
    });

    const motoristaParam = this.route.snapshot.paramMap.get('motorista');

    if (motoristaParam) {
      const motorista = JSON.parse(motoristaParam);
      this.editando = true;
      this.form.patchValue({
        nome: motorista.nome,
        cnh: motorista.cnh,
        telefone: motorista.telefone,
        email: motorista.email,
        status: motorista.ativo ? 'ativo' : 'inativo'
      });
    }
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
      if (this.editando) {
        this.motoristaService.putMotorista(motorista);
        this.router.navigate(['/listaMotoristas']);
      } else {
        this.motoristaService.postMotorista(motorista);
        this.router.navigate(['/listaMotoristas']);
      }

    } else {
      this.form.markAllAsTouched();
    }
  }

}