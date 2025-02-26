"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPF extends Conta {
}
class ContaPj extends Conta {
}
const cont1 = new ContaPF(1457, "Yago");
console.log(cont1.titular);
console.log(cont1.numero);
