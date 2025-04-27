import { Injectable } from '@angular/core';
import { IViagem } from '../interfaces/viagem.interface';
import { viagensCadastradas } from '../datas/viagens-exemplo';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {

  constructor() { }

  private viagens: IViagem[] = viagensCadastradas;

  getViagens(): IViagem[] {
    return this.viagens;
  }

  postViagem(novaViagem: IViagem) {
    this.viagens.push(novaViagem);
  }
}
