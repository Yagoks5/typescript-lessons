// Enums -> conjunto de dados que podemos utilizar e classificar por valores numerais ou textuais.

enum dias {
  domingo,
  segunda,
  terca,
  quarta,
  quinta,
  sexta,
  sabado,
}

// console.log(dias.domingo);

// console.log(dias["domingo"]);
// console.log(dias[1]);

const d = new Date();
// console.log(d.getDate());
// console.log(dias[d.getDay()]);

enum cores {
  branco = "#fff",
  preto = "#000",
  vermelho = "#f00",
  azul = "#00f",
}

console.log(cores.branco);
console.log(cores["branco"]);

enum tipoUsuario {
  USER,
  ADMIN,
  SUPER,
}

console.log(tipoUsuario.SUPER);

const tp: tipoUsuario = tipoUsuario.USER;
console.log(tp);
