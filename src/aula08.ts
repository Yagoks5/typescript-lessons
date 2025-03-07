let dados = {
  nome: "Tiltes",
  idade: 24,
  status: "A",

  ola: () => {
    console.log("Oi");
  },

  info: (p: string) => {
    console.log(p);
  },
};

console.log(typeof dados);
console.log(dados);
console.log(dados.idade);

dados.ola();

dados.info("Testando =D");
