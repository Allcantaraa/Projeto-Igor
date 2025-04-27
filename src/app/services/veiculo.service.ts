import { Injectable } from '@angular/core';
import { IVeiculo } from '../interfaces/veiculo.interface';
import { veiculoExemplo } from '../datas/veiculo-exemplo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor() { }

  private readonly veiculo: IVeiculo[] = veiculoExemplo;

  getVeiculo(): IVeiculo[] {
    return this.veiculo;
  }

  postMotorista(novoVeiculo: IVeiculo) {
    this.veiculo.push(novoVeiculo);
  }
}
