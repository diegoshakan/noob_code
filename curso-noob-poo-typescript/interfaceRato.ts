export default interface Rato {
  nome: string;
  idade?: number | string;
  fugir(): void;
}

class Jerry implements Rato {
  nome: string;
  idade?: number | string;

  constructor(n: string){
    this.nome = n;
  }

  fugir(){
    console.log("corre, lá vem o Tom")
  }
}

let r = new Jerry("Jerry")

r.idade = "2 anos"
console.log(r.nome)
console.log(r.idade)