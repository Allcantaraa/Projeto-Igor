import { Injectable } from '@angular/core';
import { IVeiculo } from '../interfaces/veiculo.interface';
import { veiculoExemplo } from '../datas/veiculo-exemplo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private readonly storageKey = 'veiculos';

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(veiculoExemplo));
    }
  }

  getVeiculo(): IVeiculo[] {
    const veiculos = localStorage.getItem(this.storageKey);
    return veiculos ? JSON.parse(veiculos) : [];
  }

  postVeiculo(novoVeiculo: IVeiculo) {
    const veiculos = this.getVeiculo();
    veiculos.push(novoVeiculo);
    localStorage.setItem(this.storageKey, JSON.stringify(veiculos));
  }
}
