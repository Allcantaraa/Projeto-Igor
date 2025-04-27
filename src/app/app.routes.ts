import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ListagemVeiculosComponent } from './pages/listagem-veiculos/listagem-veiculos.component';
import { ListagemEmpresasComponent } from './pages/listagem-empresas/listagem-empresas.component';
import { ListagemMotoristasComponent } from './pages/listagem-motoristas/listagem-motoristas.component';
import { FormMotoristaComponent } from './pages/form-motorista/form-motorista.component';
import { FormVeiculoComponent } from './pages/form-veiculo/form-veiculo.component';
import { FormEmpresaComponent } from './pages/form-empresa/form-empresa.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent},
  { path: 'listaVeiculos', component: ListagemVeiculosComponent},
  { path: 'listaEmpresas', component: ListagemEmpresasComponent},
  { path: 'listaMotoristas', component: ListagemMotoristasComponent },
  {path: 'formMotoristas', component: FormMotoristaComponent},
  {path: 'formVeiculos', component: FormVeiculoComponent},
  {path: 'formEmpresas', component: FormEmpresaComponent},
];
