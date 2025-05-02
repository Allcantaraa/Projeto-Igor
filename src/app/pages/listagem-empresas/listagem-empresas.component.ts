import { Component, inject, ViewChild } from '@angular/core';
import { IEmpresa } from '../../interfaces/empresa.interface';
import { EmpresaService } from '../../services/empresa.service';
import { AngularMaterialModule } from '../../angular_material/angular-material/angular-material.module';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { AtivoPipe } from "../../pipes/ativo.pipe";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CnpjPipe } from "../../pipes/cnpj.pipe";
import { TelefonePipe } from "../../pipes/telefone.pipe";

@Component({
  selector: 'app-listagem-empresas',
  standalone: true,
  imports: [AngularMaterialModule, AtivoPipe, CnpjPipe, TelefonePipe],
  templateUrl: './listagem-empresas.component.html',
  styleUrl: './listagem-empresas.component.css'
})
export class ListagemEmpresasComponent {

  empresa: IEmpresa[] = [];
  empresaService = inject(EmpresaService);
  router = inject(Router);
  dialog = inject(MatDialog);

  displayedColumns: string[] = ['nome', 'cnpj', 'telefone', 'email', 'endereco', 'ativo', 'acoes'];
  dataSource: IEmpresa[] = [];


  @ViewChild(MatTable) table!: MatTable<IEmpresa[]>;

  ngOnInit(): void {
    this.empresa = this.empresaService.getEmpresa();
    this.dataSource = [...this.empresa];
  }

  addData() {
    this.router.navigate(['/formEmpresas']);
  }

  removeData(empresa: IEmpresa) {
    const dialogRef: MatDialogRef<ConfirmDialogComponent> = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Tem certeza que deseja deletar esta empresa?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.indexOf(empresa);
        if (index >= 0) {
          this.dataSource.splice(index, 1);
          this.table.renderRows();
        }
      }
    });
  }
}
