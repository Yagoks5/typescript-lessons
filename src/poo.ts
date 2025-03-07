// Abstração: Classe base que define a estrutura comum para todos os veículos
abstract class Veiculo {
  // Encapsulamento: Propriedades privadas e protegidas
  private _marca: string;
  private _modelo: string;
  protected velocidade: number = 0;

  constructor(marca: string, modelo: string) {
    this._marca = marca;
    this._modelo = modelo;
  }

  // Encapsulamento: Getters e Setters
  get marca(): string {
    return this._marca;
  }

  get modelo(): string {
    return this._modelo;
  }

  // Método abstrato: Deve ser implementado pelas classes filhas
  abstract acelerar(quantidade: number): void;

  // Método concreto: Pode ser usado diretamente ou sobrescrito
  frear(): void {
    if (this.velocidade > 0) {
      this.velocidade -= 10;
      console.log(`Freando... Velocidade atual: ${this.velocidade} km/h`);
    } else {
      console.log("O veículo já está parado.");
    }
  }

  // Método para exibir informações do veículo
  exibirInfo(): void {
    console.log(
      `Marca: ${this._marca}, Modelo: ${this._modelo}, Velocidade: ${this.velocidade} km/h`
    );
  }
}

// Herança: Carro herda de Veiculo
class Carro extends Veiculo {
  private _numeroPortas: number;

  constructor(marca: string, modelo: string, numeroPortas: number) {
    super(marca, modelo);
    this._numeroPortas = numeroPortas;
  }

  // Implementação do método abstrato
  acelerar(quantidade: number): void {
    this.velocidade += quantidade;
    console.log(
      `Acelerando o carro... Velocidade atual: ${this.velocidade} km/h`
    );
  }

  // Polimorfismo: Sobrescrevendo o método exibirInfo
  exibirInfo(): void {
    super.exibirInfo();
    console.log(`Número de portas: ${this._numeroPortas}`);
  }
}

// Herança: Moto herda de Veiculo
class Moto extends Veiculo {
  private _cilindradas: number;

  constructor(marca: string, modelo: string, cilindradas: number) {
    super(marca, modelo);
    this._cilindradas = cilindradas;
  }

  // Implementação do método abstrato
  acelerar(quantidade: number): void {
    this.velocidade += quantidade;
    console.log(
      `Acelerando a moto... Velocidade atual: ${this.velocidade} km/h`
    );
  }

  // Polimorfismo: Sobrescrevendo o método exibirInfo
  exibirInfo(): void {
    super.exibirInfo();
    console.log(`Cilindradas: ${this._cilindradas}`);
  }
}

// Exemplo de uso
const carro = new Carro("Toyota", "Corolla", 4);
const moto = new Moto("Honda", "CBR 600", 600);

carro.exibirInfo();
carro.acelerar(30);
carro.frear();

moto.exibirInfo();
moto.acelerar(50);
moto.frear();
