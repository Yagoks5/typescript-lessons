// Parametro REST -> Pode trabalhar com varios valores ao mesmo tempo

function fsoma(...n: number[]): number {
  let s: number = 0;

  for (let en of n) {
    s += en;
  }

  //   n.forEach((en) => {
  //     s += en;
  //   });
  return s;
}

console.log(fsoma(10, 20, 30, 14, 52, 9, 5, 9, 29));
