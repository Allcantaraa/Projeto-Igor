import { Injectable } from '@angular/core';
import { IViagem } from '../interfaces/viagem.interface';
import { viagensCadastradas } from '../datas/viagens-exemplo';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {

  private readonly storageKey = 'viagens';

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(viagensCadastradas));
    }
  }

  getViagens(): IViagem[] {
    const viagens = localStorage.getItem(this.storageKey);
    return viagens ? JSON.parse(viagens) : [];
  }

  postViagem(novaViagem: IViagem) {
    const viagens = this.getViagens();
    viagens.push(novaViagem);
    localStorage.setItem(this.storageKey, JSON.stringify(viagens));
  }

  putViagem(viagemEditada: IViagem) {
      const viagens = this.getViagens();
      const index = viagens.findIndex(v => v.preco === viagemEditada.preco);
  
      if (index !== -1) {
        viagens[index] = viagemEditada;
        localStorage.setItem(this.storageKey, JSON.stringify(viagens));
      }
    }
}
