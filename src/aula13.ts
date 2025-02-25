// PARAMETROS PADRÕES E OPCIONAIS
// Valor padrão -> valor vai ser inicializado com um valor padrão se nao passar nenhum valor pra variavel
// Valor opcional -> valor não é obrigatorio passar um valor para ele

function soma(n1: number = 0, n2: number = 0): number {
  return n1 + n2;
}
console.log(soma());

function novoUser(user: string, pass: string, nome?: string): void {
  let dados = { user, pass, nome };
  console.log(dados);
}

novoUser("Yogo", "147852");
