interface curso {
  titulo: string;
  descricao: string;
  //   iniciarCurso(teste: string): void;
}

interface cursoProg extends curso {
  aulas: number;
  maxAlunos?: number;
}

interface cursoArtes extends curso {
  aulas: number;
  maxAlunos?: number;
}

let curso1: cursoProg;
let curso2: cursoArtes;

curso1 = {
  titulo: "Typescript",
  descricao: "Curso typescript",
  aulas: 35,
  maxAlunos: 20,
};
curso2 = {
  titulo: "C#",
  descricao: "Curso C#",
  aulas: 100,
};
