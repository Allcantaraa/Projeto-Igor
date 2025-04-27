import { Injectable } from '@angular/core';
import { IMotorista } from '../interfaces/motorista.interface';
import { motoristaExemplo } from '../datas/motorista-exemplo';

@Injectable({
  providedIn: 'root'
})
export class MotoristaService {

  constructor() { }

  private readonly motorista: IMotorista[] = motoristaExemplo;

  getMotorista(): IMotorista[] {
    return this.motorista;
  }

  postMotorista(novoMotorista: IMotorista) {
    this.motorista.push(novoMotorista);
  }
}
