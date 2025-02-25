// Type Assertion -> Definir o tipo para o unknow para atribuição
//  e Typecast

let nvalor: number;
let svalor: string;
let uvalor: unknown;

uvalor = 10;
svalor = "20";

nvalor = Number.parseInt(svalor);

svalor = nvalor.toString();

// nvalor = <number>uvalor;
// svalor = <string>uvalor;

// console.log(typeof uvalor);
// console.log(uvalor);

console.log(typeof svalor);
console.log(svalor);

console.log(typeof nvalor);
console.log(nvalor);

// console.log(nvalor);
