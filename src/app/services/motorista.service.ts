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

  putMotorista(motoristaEditado: IMotorista) {
    const motoristas = this.getMotorista();
    const index = motoristas.findIndex(m => m.cnh === motoristaEditado.cnh);

    if (index !== -1) {
      motoristas[index] = motoristaEditado;
      localStorage.setItem(this.storageKey, JSON.stringify(motoristas));
    }
  }
}