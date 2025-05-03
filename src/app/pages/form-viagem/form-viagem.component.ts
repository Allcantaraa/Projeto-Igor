import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ViagemService } from '../../services/viagem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular_material/angular-material/angular-material.module';
import { MotoristaService } from '../../services/motorista.service';
import { EmpresaService } from '../../services/empresa.service';
import { VeiculoService } from '../../services/veiculo.service';
import { IMotorista } from '../../interfaces/motorista.interface';
import { IEmpresa } from '../../interfaces/empresa.interface';
import { IVeiculo } from '../../interfaces/veiculo.interface';
import { ViagemStatus } from '../../enums/viagem-status.enum';
import { NgxMaskDirective } from 'ngx-mask';
import { IViagem } from '../../interfaces/viagem.interface';

@Component({
  selector: 'app-form-viagem',
  standalone: true,
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  templateUrl: './form-viagem.component.html',
  styleUrl: './form-viagem.component.css'
})
export class FormViagemComponent {

  formViagem: FormGroup = new FormGroup({});
  viagemService = inject(ViagemService);
  motorista: IMotorista[] = [];
  empresa: IEmpresa[] = [];
  veiculo: IVeiculo[] = [];
  editando: boolean = false;

  statusOptions = [
    { label: 'Em Andamento', value: ViagemStatus.EM_ANDAMENTO },
    { label: 'Concluida', value: ViagemStatus.CONCLUIDA },
  ]

  compareMotoristas = (a: IMotorista, b: IMotorista) => a?.id === b?.id;
  compareEmpresas = (a: IEmpresa, b: IEmpresa) => a?.id === b?.id;
  compareVeiculos = (a: IVeiculo, b: IVeiculo) => a?.id === b?.id;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly motoristaService: MotoristaService,
    private readonly empresaService: EmpresaService,
    private readonly veiculoService: VeiculoService,
  ) { }

  ngOnInit(): void {
    this.formViagem = this.fb.group({
      origem: ['', Validators.required],
      destino: ['', Validators.required],
      dataPartida: ['', Validators.required],
      preco: [null, Validators.required],
      status: ['', Validators.required],
      motorista: ['', Validators.required],
      veiculo: ['', Validators.required],
      empresa: ['', Validators.required],
    });

    this.carregarMotorista();
    this.carregarEmpresa();
    this.carregarVeiculo();

    const viagemParam = this.route.snapshot.paramMap.get('viagem');

    if (viagemParam) {
      const viagem: IViagem = JSON.parse(viagemParam);
      this.editando = true;
      setTimeout(() => {
        this.formViagem.patchValue({
          origem: viagem.origem,
          destino: viagem.destino,
          dataPartida: viagem.dataPartida,
          preco: viagem.preco,
          status: viagem.status,
          motorista: viagem.motorista,
          veiculo: viagem.veiculo,
          empresa: viagem.empresa,
        });
      }, 100);

    }
  }

  cadastrar() {
    if (this.formViagem.valid) {


      const viagem = {
        origem: this.formViagem.value.origem,
        destino: this.formViagem.value.destino,
        dataPartida: this.formViagem.value.dataPartida,
        preco: this.formViagem.value.preco,
        status: this.formViagem.value.status,
        motorista: this.formViagem.value.motorista,
        veiculo: this.formViagem.value.veiculo,
        empresa: this.formViagem.value.empresa,
      };

      if (this.editando) {
        this.viagemService.putViagem(viagem);
        this.router.navigate(['/listaViagens']);
      } else {
        this.viagemService.postViagem(viagem);
        this.router.navigate(['/listaViagens']);
      }


    } else {
      this.formViagem.markAllAsTouched();
    }
  }

  carregarMotorista() {
    this.motorista = this.motoristaService.getMotorista();
  }

  carregarEmpresa() {
    this.empresa = this.empresaService.getEmpresa();
  }

  carregarVeiculo() {
    this.veiculo = this.veiculoService.getVeiculo();
  }


}
