"use strict";
class Computador {
    nome = "";
    ram = 0;
    cpu = 0;
    ligado = false;
}
const comp1 = new Computador();
const comp2 = new Computador();
comp1.nome = "Rapidão";
comp2.nome = "Gamer";
console.log(comp1.nome);
console.log(comp2.nome);
