import { Component, OnInit } from '@angular/core';
import { IViagem } from '../../interfaces/viagem.interface';
import { ViagemService } from '../../services/viagem.service';
import { AngularMaterialModule } from '../../angular_material/angular-material/angular-material.module';
import { StatusViagemPipe } from "../../pipes/status-viagem.pipe";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    NavbarComponent,
    AngularMaterialModule,
    StatusViagemPipe,
    CommonModule
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {
  viagens: IViagem[] = [];

  constructor(private readonly viagemService: ViagemService) {}

  ngOnInit(): void {
    this.viagens = this.viagemService.getViagens();
  }
}
