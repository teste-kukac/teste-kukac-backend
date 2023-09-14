export interface Veiculo {
  Modelo: string;
  anoFabricacao: number;
  qtdPortas?: number;
  Marcas: string;
}

export class Carro implements Veiculo {
  Modelo: string;
  anoFabricacao: number;
  qtdPortas: number = 4; 
  Marcas: string;

  constructor(Modelo: string, anoFabricacao: number, Marcas: string) {
    this.Modelo = Modelo;
    this.anoFabricacao = anoFabricacao;
    this.Marcas = Marcas;
  }
}

export class Moto implements Veiculo {
  Modelo: string;
  anoFabricacao: number;
  qtdPortas: number = 0; 
  Marcas: string;
  Passageiros: number; 

  constructor(Modelo: string, anoFabricacao: number, Marcas: string, Passageiros: number) {
    this.Modelo = Modelo;
    this.anoFabricacao = anoFabricacao;
    this.Marcas = Marcas;
    this.Passageiros = Passageiros;
  }
}
