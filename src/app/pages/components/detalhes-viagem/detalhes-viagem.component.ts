import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AngularMaterialModule } from '../../../angular_material/angular-material/angular-material.module';
import { StatusViagemPipe } from '../../../pipes/status-viagem.pipe';
import { IViagem } from '../../../interfaces/viagem.interface';

@Component({
  selector: 'app-detalhes-viagem',
  standalone: true,
  imports: [CommonModule, MatDialogModule, AngularMaterialModule, StatusViagemPipe],
  templateUrl: './detalhes-viagem.component.html',
  styleUrl: './detalhes-viagem.component.css'
})
export class DetalhesViagemComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IViagem,
    private dialogRef: MatDialogRef<DetalhesViagemComponent>
  ) {}

  fechar() {
    this.dialogRef.close();
  }
}
