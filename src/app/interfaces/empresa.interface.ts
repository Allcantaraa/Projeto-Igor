export interface IEmpresa {
  id?: number;
  nome: string;
  cnpj: string;
  telefone?: string;
  email?: string;
  endereco?: string;
  ativo: boolean;
}