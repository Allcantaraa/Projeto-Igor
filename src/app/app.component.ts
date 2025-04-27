import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular_material/angular-material/angular-material.module';
import { NavbarComponent } from './pages/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AngularMaterialModule, CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-viagens';
}
