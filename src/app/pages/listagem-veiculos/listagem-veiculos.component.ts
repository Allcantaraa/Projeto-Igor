import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { IVeiculo } from '../../interfaces/veiculo.interface';
import { VeiculoService } from '../../services/veiculo.service';
import { MatTable } from '@angular/material/table';
import { AngularMaterialModule } from '../../angular_material/angular-material/angular-material.module';

@Component({
  selector: 'app-listagem-veiculos',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './listagem-veiculos.component.html',
  styleUrl: './listagem-veiculos.component.css'
})
export class ListagemVeiculosComponent implements OnInit {

  veiculo: IVeiculo[] = [];
  veiculoService = inject(VeiculoService);

  displayedColumns: string[] = ['placa', 'modelo', 'capacidade', 'anoFabricacao', 'ativo'];
  dataSource: IVeiculo[] = [];


  @ViewChild(MatTable) table!: MatTable<IVeiculo[]>;

  ngOnInit(): void {
    this.veiculo = this.veiculoService.getVeiculo();
    this.dataSource = [...this.veiculo];
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.veiculo.length);
    this.dataSource.push(this.veiculo[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}