import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularMaterialModule } from '../../angular_material/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculoService } from '../../services/veiculo.service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { IVeiculo } from '../../interfaces/veiculo.interface';

@Component({
  selector: 'app-form-veiculo',
  standalone: true,
  imports: [
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  templateUrl: './form-veiculo.component.html',
  styleUrl: './form-veiculo.component.css'
})
export class FormVeiculoComponent implements OnInit {

  formVeiculo: FormGroup = new FormGroup({});
  veiculoService = inject(VeiculoService);
  editando: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }
  
  ngOnInit(): void {
    this.formVeiculo = this.fb.group({
      placa: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      capacidade: ['', Validators.required],
      anoFabricacao: ['', Validators.required],
      status: ['', Validators.required],
    });

    const veiculoParam = this.route.snapshot.paramMap.get('veiculo');
    
    if (veiculoParam) {
      const veiculo: IVeiculo = JSON.parse(veiculoParam);
      this.editando = true;
      this.formVeiculo.patchValue({
        placa: veiculo.placa,
        modelo: veiculo.modelo,
        capacidade: veiculo.capacidade,
        anoFabricacao: veiculo.anoFabricacao,
        status: veiculo.ativo ? 'ativo' : 'inativo',
      });
    }
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
      if (this.editando) {
        this.veiculoService.putVeiculo(veiculo);
        this.router.navigate(['/listaVeiculos']);
      } else {
        this.veiculoService.postVeiculo(veiculo);
        this.router.navigate(['/listaVeiculos']);
       }
      
    } else {
      this.formVeiculo.markAllAsTouched();
    }
  }

}
