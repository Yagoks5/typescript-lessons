"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu, ligado) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
        console.log(`"Novo computador criado"`);
    }
}
const comp1 = new Computador("Rapidão", 16, 15, false);
const comp2 = new Computador("Gamer", 32, 25, false);
console.log(comp1);
console.log(comp2);
console.table(comp1);
console.table(comp2);
