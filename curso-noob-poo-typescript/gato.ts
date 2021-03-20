abstract class Gato {
  nome: string;
  cor: string;

  constructor(n: string, c: string){
    this.nome = n;
    this.cor = c;
  }

  miar(){
    console.log("miau!")
  }
}

class Tom extends Gato{
  idade: number;

  constructor(n: string, c: string, i:number){
    super(n, c)
    this.idade = i;
  }
}

let g = new Tom("Tom", "cinza", 2)

console.log(g.nome)
console.log(g.cor)
console.log(g.idade)
g.miar()