// NULL -> é um tipo de valor. valor vazio
// UNDEFINED -> variavel sem atribuição;
// UNKNOWN -> Pode ser atribuido em tipos unknown ou any. Pode receber qualquer valor

let vnome: string | null;
vnome = null;
console.log(vnome);

let vnome2;
console.log(typeof vnome2);

let vnome3: unknown = vnome;
console.log(vnome3);
