import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { IMotorista } from '../../interfaces/motorista.interface';
import { MotoristaService } from '../../services/motorista.service';
import { AngularMaterialModule } from '../../angular_material/angular-material/angular-material.module';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { AtivoPipe } from "../../pipes/ativo.pipe";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CnhPipe } from "../../pipes/cnh.pipe";
import { TelefonePipe } from "../../pipes/telefone.pipe";

@Component({
  selector: 'app-listagem-motoristas',
  standalone: true,
  imports: [AngularMaterialModule, AtivoPipe, CnhPipe, TelefonePipe],
  templateUrl: './listagem-motoristas.component.html',
  styleUrl: './listagem-motoristas.component.css'
})
export class ListagemMotoristasComponent implements OnInit {

  motorista: IMotorista[] = [];
  motoristaService = inject(MotoristaService);
  router = inject(Router);
  dialog = inject(MatDialog);
  
  displayedColumns: string[] = ['nome', 'cnh', 'telefone', 'email', 'ativo', 'acoes'];
  dataSource: IMotorista[] = [];

  
  @ViewChild(MatTable) table!: MatTable<IMotorista[]>;

  ngOnInit(): void {
    this.motorista = this.motoristaService.getMotorista();
    this.dataSource = [...this.motorista];
  }

  addData() {
    this.router.navigate(['/formMotoristas']);
  }

  removeData(motorista: IMotorista) {
    const dialogRef: MatDialogRef<ConfirmDialogComponent> = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Tem certeza que deseja deletar este motorista?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.indexOf(motorista);
        if (index >= 0) {
          this.dataSource.splice(index, 1);
          this.table.renderRows();
        }
      }
    });
  }

}
