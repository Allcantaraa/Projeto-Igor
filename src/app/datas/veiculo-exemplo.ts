import { IVeiculo } from "../interfaces/veiculo.interface";

export const veiculoExemplo: IVeiculo[] = [{
  id: 1,
  placa: "XYZ-1234",
  modelo: "Volkswagen Sprinter",
  capacidade: 12,
  anoFabricacao: 2022,
  ativo: true
},
{
  id: 2,
  placa: "XYZ-4321",
  modelo: "Ford KA",
  capacidade: 12,
  anoFabricacao: 2022,
  ativo: false
}
]