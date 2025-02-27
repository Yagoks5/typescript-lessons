// Extrair dados de um objeto ou array, para variaveis simples.

let [aa, bb, cc, dd] = ["Verde", "Amarelo", "Azul", "Branco"];

const obj = {
  cor1: "Verde",
  cor2: "Amarelo",
  cor3: "Azul",
  cor4: "Branco",
};

let { cor1, cor2, cor3, cor4 } = obj;

let [nu1 = 0, nu2 = 0, ...nu3] = [10, 20, 30, 40, 50, 60, 70, 80];

const fcores = () => {
  return ["Verde", "Amarelo", "Azul", "Branco"];
};

let [co1, co2, co3, co4] = fcores();

let texto = "Curso de Typescript";
let [...t] = texto.split(" ");
let [p1, p2, p3] = texto.split(" ");

console.log(p1);
console.log(p2);
console.log(p3);

console.log(t);

console.log(co1);
console.log(co2);
console.log(co3);
console.log(co4);

console.log(nu1);
console.log(nu2);
console.log(nu3);

console.log(cor1);
console.log(cor2);
console.log(cor3);
console.log(cor4);
