import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../../angular_material/angular-material/angular-material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AngularMaterialModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
