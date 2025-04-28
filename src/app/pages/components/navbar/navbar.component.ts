import { Component, Input } from '@angular/core';
import { AngularMaterialModule } from '../../../angular_material/angular-material/angular-material.module';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AngularMaterialModule, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input({required:true}) mostrarNav!: boolean;

}
