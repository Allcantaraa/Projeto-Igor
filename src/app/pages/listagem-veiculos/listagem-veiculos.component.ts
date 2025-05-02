import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { IVeiculo } from '../../interfaces/veiculo.interface';
import { VeiculoService } from '../../services/veiculo.service';
import { MatTable } from '@angular/material/table';
import { AngularMaterialModule } from '../../angular_material/angular-material/angular-material.module';
import { Router } from '@angular/router';
import { AtivoPipe } from '../../pipes/ativo.pipe';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { PlacaPipe } from "../../pipes/placa.pipe";

@Component({
  selector: 'app-listagem-veiculos',
  standalone: true,
  imports: [AngularMaterialModule, AtivoPipe, PlacaPipe],
  templateUrl: './listagem-veiculos.component.html',
  styleUrl: './listagem-veiculos.component.css',
})
export class ListagemVeiculosComponent implements OnInit {
  veiculo: IVeiculo[] = [];
  veiculoService = inject(VeiculoService);
  router = inject(Router);
  dialog = inject(MatDialog);

  displayedColumns: string[] = [
    'placa',
    'modelo',
    'capacidade',
    'anoFabricacao',
    'ativo',
    'acoes',
  ];
  dataSource: IVeiculo[] = [];

  @ViewChild(MatTable) table!: MatTable<IVeiculo[]>;

  ngOnInit(): void {
    this.veiculo = this.veiculoService.getVeiculo();
    this.dataSource = [...this.veiculo];
  }

  addData() {
    this.router.navigate(['/formVeiculos']);
  }

  removeData(veiculo: IVeiculo) {
    const dialogRef: MatDialogRef<ConfirmDialogComponent> = this.dialog.open(
      ConfirmDialogComponent,
      {
        width: '300px',
        data: { message: 'Tem certeza que deseja deletar este veiculo?' },
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.dataSource.indexOf(veiculo);
        if (index >= 0) {
          this.dataSource.splice(index, 1);
          this.table.renderRows();
        }
      }
    });
  }
}
