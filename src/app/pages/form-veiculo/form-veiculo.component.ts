import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularMaterialModule } from '../../angular_material/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { VeiculoService } from '../../services/veiculo.service';

@Component({
  selector: 'app-form-veiculo',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule, ReactiveFormsModule],
  templateUrl: './form-veiculo.component.html',
  styleUrl: './form-veiculo.component.css'
})
export class FormVeiculoComponent implements OnInit {

  formVeiculo: FormGroup = new FormGroup({});
  veiculoService = inject(VeiculoService);

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) { }
  
  ngOnInit(): void {
    this.formVeiculo = this.fb.group({
      placa: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      capacidade: ['', Validators.required],
      anoFabricacao: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  cadastrar() {
    if (this.formVeiculo.valid) {
      const veiculo = {
        placa: this.formVeiculo.value.placa,
        modelo: this.formVeiculo.value.modelo,        
        capacidade: this.formVeiculo.value.capacidade,
        anoFabricacao: this.formVeiculo.value.anoFabricacao,
        ativo: this.formVeiculo.value.status === 'ativo',
      };
      this.veiculoService.postVeiculo(veiculo);
      this.router.navigate(['/listaVeiculos']);
    } else {
      this.formVeiculo.markAllAsTouched();
    }
  }

}
