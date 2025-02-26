"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cpf, titular) {
        super(titular);
        this.cnpj = cpf;
    }
}
const cont1 = new ContaPF(145, "Yago PF");
const cont2 = new ContaPJ(155523, "Yago PJ");
console.table(cont1);
console.table(cont2);
