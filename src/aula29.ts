function f_teste<T, U>(valor: T, r: U): U {
  return r;
}
function f_teste2<T>(valor: T): T {
  return valor;
}

console.log(f_teste<number, string>(10, "teste"));
console.log(f_teste2<string>("10"));
console.log(f_teste2<boolean>(false));

class C_teste<T> {
  public valor: T;

  constructor(valor: T) {
    this.valor = valor;
  }
}

const ct1 = new C_teste<number>(30);
const ct2 = new C_teste<string>("alou");
