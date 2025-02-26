abstract class Conta {
  private readonly numero: number;
  protected titular: string;
  protected saldoConta: number;

  constructor(titular: string) {
    this.numero = this.gerarNumeroConta();
    this.titular = titular;
    this.saldoConta = 0;
  }

  private gerarNumeroConta(): number {
    return Math.floor(Math.random() * 100000) + 1;
  }

  protected info(): void {
    console.log(`Titular: ${this.titular}`);
    console.log(`Número: ${this.numero}`);
  }

  get saldo(): number {
    return this.saldoConta;
  }

  set saldo(saldoConta: number) {
    this.saldoConta = saldoConta;
  }

  protected deposito(valor: number) {
    this.saldoConta += valor;
  }

  protected saque(valor: number) {
    if (valor >= this.saldoConta) {
      this.saldoConta = -valor;
    }
    console.log("Saldo insuficiente");
  }
}

class ContaPF extends Conta {
  cpf: number;

  constructor(cpf: number, titular: string) {
    super(titular);
    this.cpf = cpf;
  }

  info(): void {
    console.log(`Tipo...PF`);
    super.info();
    console.log(`CPF: ${this.cpf}`);
    console.log("==========================");
  }

  protected deposito(valor: number) {
    this.saldoConta += valor;
  }
}

class ContaPJ extends Conta {
  cnpj: number;

  constructor(cpf: number, titular: string) {
    super(titular);
    this.cnpj = cpf;
  }

  info(): void {
    console.log(`Tipo...PJ`);
    super.info();
    console.log(`CNPF: ${this.cnpj}`);
    console.log("==========================");
  }
}

const cont1 = new ContaPF(145, "Yago PF");

const cont2 = new ContaPJ(155523, "Yago PJ");

cont1.info();
cont2.info();
