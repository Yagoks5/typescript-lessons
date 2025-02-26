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
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log(`Tipo...PF`);
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log("==========================");
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cpf, titular) {
        super(titular);
        this.cnpj = cpf;
    }
    info() {
        console.log(`Tipo...PJ`);
        super.info();
        console.log(`CNPF: ${this.cnpj}`);
        console.log("==========================");
    }
}
const cont1 = new ContaPF(145, "Yago PF");
const cont2 = new ContaPJ(155523, "Yago PJ");
cont1.info();
cont2.info();
