import { Injectable } from '@angular/core';
import { IMotorista } from '../interfaces/motorista.interface';
import { motoristaExemplo } from '../datas/motorista-exemplo';

@Injectable({
  providedIn: 'root'
})
export class MotoristaService {

  private readonly storageKey = 'motoristas';
  private readonly motorista: IMotorista[] = motoristaExemplo;

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(motoristaExemplo));
    }
  }


  getMotorista(): IMotorista[] {
    const motoristas = localStorage.getItem(this.storageKey);
    return motoristas ? JSON.parse(motoristas) : [];
  }

  postMotorista(novoMotorista: IMotorista) {
    const motoristas = this.getMotorista();
    motoristas.push(novoMotorista);
    localStorage.setItem(this.storageKey, JSON.stringify(motoristas));
  }
}
