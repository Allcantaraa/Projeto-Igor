import { ViagemStatus } from "../enums/viagem-status.enum";
import { IEmpresa } from "./empresa.interface";
import { IMotorista } from "./motorista.interface";
import { IVeiculo } from "./veiculo.interface";

export interface IViagem {
  id?: number;
  origem: string;
  destino: string;
  dataPartida: Date | string;
  dataChegada?: Date | string;
  preco: number;
  status: ViagemStatus;
  motorista: IMotorista;
  veiculo: IVeiculo;
  empresa: IEmpresa;
}