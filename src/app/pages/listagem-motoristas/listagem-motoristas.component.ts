import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { IMotorista } from '../../interfaces/motorista.interface';
import { MotoristaService } from '../../services/motorista.service';
import { AngularMaterialModule } from '../../angular_material/angular-material/angular-material.module';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-listagem-motoristas',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './listagem-motoristas.component.html',
  styleUrl: './listagem-motoristas.component.css'
})
export class ListagemMotoristasComponent implements OnInit {

  motorista: IMotorista[] = [];
  motoristaService = inject(MotoristaService);
  
  displayedColumns: string[] = ['nome', 'cnh', 'telefone', 'email', 'ativo'];
  dataSource: IMotorista[] = [];

  
  @ViewChild(MatTable) table!: MatTable<IMotorista[]>;

  ngOnInit(): void {
    this.motorista = this.motoristaService.getMotorista();
    this.dataSource = [...this.motorista];
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.motorista.length);
    this.dataSource.push(this.motorista[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

}
