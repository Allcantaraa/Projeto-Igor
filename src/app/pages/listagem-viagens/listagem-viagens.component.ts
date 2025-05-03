import { Component, inject, ViewChild } from '@angular/core';
import { IViagem } from '../../interfaces/viagem.interface';
import { ViagemService } from '../../services/viagem.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular_material/angular-material/angular-material.module';
import { StatusViagemPipe } from "../../pipes/status-viagem.pipe";

@Component({
  selector: 'app-listagem-viagens',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule, StatusViagemPipe],
  templateUrl: './listagem-viagens.component.html',
  styleUrl: './listagem-viagens.component.css'
})
export class ListagemViagensComponent {

  viagem!: IViagem;
  viagens: IViagem[] = [];
  viagemService = inject(ViagemService);
  router = inject(Router);
  dialog = inject(MatDialog);

  displayedColumns: string[] = [
    'origem',
    'destino',
    'dataPartida',
    'preco',
    'status',
    'motorista',
    'veiculo',
    'empresa',
    'acoes',
  ];
  dataSource: IViagem[] = [];

  @ViewChild(MatTable) table!: MatTable<IViagem[]>;

  ngOnInit(): void {
    this.viagens = this.viagemService.getViagens();
    this.dataSource = [...this.viagens];
  }

  addData() {
    this.router.navigate(['/formViagens']);
  }

  removeData(viagem: IViagem) {
    const dialogRef: MatDialogRef<ConfirmDialogComponent> = this.dialog.open(
      ConfirmDialogComponent,
      {
        width: '300px',
        data: { message: 'Tem certeza que deseja deletar esta viagem?' },
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.dataSource.indexOf(viagem);
        if (index >= 0) {
          this.dataSource.splice(index, 1);
          this.table.renderRows();
        }
      }
    });
  }

  selecionarViagem(viagem: IViagem) {
      this.viagem = viagem;
      this.router.navigate(['/formViagens', { viagem: JSON.stringify(viagem) }]);
    }

}
