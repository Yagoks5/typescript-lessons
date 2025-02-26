"use strict";
class Computador {
    id = 0;
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu, ligado) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
        this.id = 0;
    }
    info() {
        console.log(`Nome...: ${this.nome}`);
        console.log(`Ram...: ${this.ram}`);
        console.log(`Cpu...: ${this.cpu}`);
        console.log(`Ligado...: ${this.ligado ? "Sim" : "Não"}`);
        console.log(" =========================== ");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(quantidade) {
        if (quantidade > 0 && quantidade <= 1000) {
            this.ram = quantidade;
        }
        else {
            console.log(`Quantidade ${quantidade} não é permitido`);
        }
    }
}
const comp1 = new Computador("Rapidão", 16, 15, false);
const comp2 = new Computador("Gamer", 32, 25, false);
comp1.info();
comp2.info();
comp1.ligar();
comp2.ligar();
comp1.info();
comp2.info();
comp1.upRam(100);
comp1.info();
