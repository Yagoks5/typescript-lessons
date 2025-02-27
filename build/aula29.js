"use strict";
function f_teste(valor, r) {
    return r;
}
function f_teste2(valor) {
    return valor;
}
console.log(f_teste(10, "teste"));
console.log(f_teste2("10"));
console.log(f_teste2(false));
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new C_teste(30);
const ct2 = new C_teste("alou");
