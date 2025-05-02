import { Component, inject, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../angular_material/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmpresaService } from '../../services/empresa.service';
import { Router } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-form-empresa',
  standalone: true,
  imports: [
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  templateUrl: './form-empresa.component.html',
  styleUrl: './form-empresa.component.css'
})
export class FormEmpresaComponent implements OnInit {

  formEmpresa: FormGroup = new FormGroup({});
  empresaService = inject(EmpresaService);

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) { }
  
  ngOnInit(): void {
    this.formEmpresa = this.fb.group({
      nome: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  cadastrar() {
    if (this.formEmpresa.valid) {
      const empresa = {
        nome: this.formEmpresa.value.nome,
        cnpj: this.formEmpresa.value.cnpj,
        telefone: this.formEmpresa.value.telefone,
        email: this.formEmpresa.value.email,
        endereco: this.formEmpresa.value.endereco,
        ativo: this.formEmpresa.value.status === 'ativo'
      };
      this.empresaService.postEmpresa(empresa);
      this.router.navigate(['/listaEmpresas']);
    } else {
      this.formEmpresa.markAllAsTouched();
    }
  }

}
