class Computador {
  private id: number = 0;
  public nome: string;
  private ram: number;
  private cpu: number;
  private ligado: boolean;

  constructor(nome: string, ram: number, cpu: number, ligado: boolean) {
    // Função da classe -> é chamada metodo
    this.nome = nome;
    this.ram = ram;
    this.cpu = cpu;
    this.ligado = ligado;
    this.id = 0;
  }

  info(): void {
    console.log(`Nome...: ${this.nome}`);
    console.log(`Ram...: ${this.ram}`);
    console.log(`Cpu...: ${this.cpu}`);
    console.log(`Ligado...: ${this.ligado ? "Sim" : "Não"}`);
    console.log(" =========================== ");
  }

  ligar(): void {
    this.ligado = true;
  }

  desligar(): void {
    this.ligado = false;
  }

  upRam(quantidade: number): void {
    if (quantidade > 0 && quantidade <= 1000) {
      this.ram = quantidade;
    } else {
      console.log(`Quantidade ${quantidade} não é permitido`);
    }
  }
}

// Instanciar uma classe -> criar um objeto da classe.
const comp1 = new Computador("Rapidão", 16, 15, false);
const comp2 = new Computador("Gamer", 32, 25, false);

comp1.info();
comp2.info();

comp1.ligar();
comp2.ligar();

comp1.info();
comp2.info();

comp1.upRam(100);

comp1.info();
