"use strict";
const teste = (txt = ";;;") => {
    console.log(txt);
};
const fsoma2 = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
teste("testeasdsads");
teste();
console.log("===================");
let arrayNumeros = [10, 15, 78, 95, 32, 0, 1];
console.log(fsoma2(arrayNumeros));
