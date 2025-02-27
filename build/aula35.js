"use strict";
let [aa, bb, cc, dd] = ["Verde", "Amarelo", "Azul", "Branco"];
const obj = {
    cor1: "Verde",
    cor2: "Amarelo",
    cor3: "Azul",
    cor4: "Branco",
};
let { cor1, cor2, cor3, cor4 } = obj;
let [nu1 = 0, nu2 = 0, nu3 = 0] = [10];
console.log(cor1);
console.log(cor2);
console.log(cor3);
console.log(cor4);
