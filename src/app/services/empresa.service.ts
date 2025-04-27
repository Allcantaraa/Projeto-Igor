import { Injectable } from '@angular/core';
import { IEmpresa } from '../interfaces/empresa.interface';
import { empresaExemplo } from '../datas/empresa-exemplo';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor() { }

  private readonly empresa: IEmpresa[] = empresaExemplo;

  getEmpresa(): IEmpresa[] {
    return this.empresa;
  }

  postEmpresa(novaEmpresa: IEmpresa) {
    this.empresa.push(novaEmpresa);
  }
}
