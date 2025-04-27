export interface IVeiculo {
  id?: number;
  placa: string;
  modelo: string;
  capacidade: number;
  anoFabricacao: number;
  ativo: boolean;
}