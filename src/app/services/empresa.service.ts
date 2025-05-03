import { Injectable } from '@angular/core';
import { IEmpresa } from '../interfaces/empresa.interface';
import { empresaExemplo } from '../datas/empresa-exemplo';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private readonly storageKey = 'empresas';

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(empresaExemplo));
    }
  }

  getEmpresa(): IEmpresa[] {
    const empresas = localStorage.getItem(this.storageKey);
    return empresas ? JSON.parse(empresas) : [];
  }

  postEmpresa(novaEmpresa: IEmpresa) {
    const empresas = this.getEmpresa();
    empresas.push(novaEmpresa);
    localStorage.setItem(this.storageKey, JSON.stringify(empresas));
  }

  putEmpresa(empresaEditada: IEmpresa) {
        const empresas = this.getEmpresa();
        const index = empresas.findIndex(e => e.nome === empresaEditada.nome);
    
        if (index !== -1) {
          empresas[index] = empresaEditada;
          localStorage.setItem(this.storageKey, JSON.stringify(empresas));
        }
      }
}
