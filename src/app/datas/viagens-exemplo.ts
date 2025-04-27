import { ViagemStatus } from "../enums/viagem-status.enum";
import { IViagem } from "../interfaces/viagem.interface";
import { empresaExemplo } from "./empresa-exemplo";
import { motoristaExemplo } from "./motorista-exemplo";
import { veiculoExemplo } from "./veiculo-exemplo";

export const viagensCadastradas: IViagem[] = [
  {
    id: 1,
    origem: "São Paulo, SP",
    destino: "Belo Horizonte, MG",
    dataPartida: "2023-12-10T07:00:00Z",
    preco: 420.50,
    status: ViagemStatus.EM_ANDAMENTO,
    motorista: motoristaExemplo[0],
    veiculo: veiculoExemplo[0],
    empresa: empresaExemplo[0]
  },
  {
    id: 2,
    origem: "Rio de Janeiro, RJ",
    destino: "Vitória, ES",
    dataPartida: "2023-12-15T09:30:00Z",
    preco: 380.00,
    status: ViagemStatus.EM_ANDAMENTO,
    motorista: {
      id: 2,
      nome: "Ana Santos",
      cnh: "98765432100",
      ativo: true
    },
    veiculo: {
      id: 2,
      placa: "ABC-5678",
      modelo: "Mercedes-Benz Sprinter",
      capacidade: 14,
      anoFabricacao: 2021,
      ativo: true
    },
    empresa: {
      id: 2,
      nome: "Transporte Rápido",
      cnpj: "98.765.432/0001-11",
      ativo: true
    }
  }
];