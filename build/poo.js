"use strict";
class Veiculo {
    _marca;
    _modelo;
    velocidade = 0;
    constructor(marca, modelo) {
        this._marca = marca;
        this._modelo = modelo;
    }
    get marca() {
        return this._marca;
    }
    get modelo() {
        return this._modelo;
    }
    frear() {
        if (this.velocidade > 0) {
            this.velocidade -= 10;
            console.log(`Freando... Velocidade atual: ${this.velocidade} km/h`);
        }
        else {
            console.log("O veículo já está parado.");
        }
    }
    exibirInfo() {
        console.log(`Marca: ${this._marca}, Modelo: ${this._modelo}, Velocidade: ${this.velocidade} km/h`);
    }
}
class Carro extends Veiculo {
    _numeroPortas;
    constructor(marca, modelo, numeroPortas) {
        super(marca, modelo);
        this._numeroPortas = numeroPortas;
    }
    acelerar(quantidade) {
        this.velocidade += quantidade;
        console.log(`Acelerando o carro... Velocidade atual: ${this.velocidade} km/h`);
    }
    exibirInfo() {
        super.exibirInfo();
        console.log(`Número de portas: ${this._numeroPortas}`);
    }
}
class Moto extends Veiculo {
    _cilindradas;
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this._cilindradas = cilindradas;
    }
    acelerar(quantidade) {
        this.velocidade += quantidade;
        console.log(`Acelerando a moto... Velocidade atual: ${this.velocidade} km/h`);
    }
    exibirInfo() {
        super.exibirInfo();
        console.log(`Cilindradas: ${this._cilindradas}`);
    }
}
const carro = new Carro("Toyota", "Corolla", 4);
const moto = new Moto("Honda", "CBR 600", 600);
carro.exibirInfo();
carro.acelerar(30);
carro.frear();
moto.exibirInfo();
moto.acelerar(50);
moto.frear();
