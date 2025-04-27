import { Component, inject, ViewChild } from '@angular/core';
import { IEmpresa } from '../../interfaces/empresa.interface';
import { EmpresaService } from '../../services/empresa.service';
import { AngularMaterialModule } from '../../angular_material/angular-material/angular-material.module';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-listagem-empresas',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './listagem-empresas.component.html',
  styleUrl: './listagem-empresas.component.css'
})
export class ListagemEmpresasComponent {

  empresa: IEmpresa[] = [];
  empresaService = inject(EmpresaService);

  displayedColumns: string[] = ['nome', 'cnpj', 'telefone', 'email', 'endereco','ativo'];
  dataSource: IEmpresa[] = [];


  @ViewChild(MatTable) table!: MatTable<IEmpresa[]>;

  ngOnInit(): void {
    this.empresa = this.empresaService.getEmpresa();
    this.dataSource = [...this.empresa];
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.empresa.length);
    this.dataSource.push(this.empresa[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
