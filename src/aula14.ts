// Arrow function / função anonima.

const teste = (txt: string = ";;;"): void => {
  console.log(txt);
};

const fsoma2 = (n: number[]): number => {
  let s: number = 0;
  n.forEach((e) => {
    s += e;
  });
  return s;
};

teste("testeasdsads");
teste();
console.log("===================");

let arrayNumeros: number[] = [10, 15, 78, 95, 32, 0, 1];

console.log(fsoma2(arrayNumeros));
