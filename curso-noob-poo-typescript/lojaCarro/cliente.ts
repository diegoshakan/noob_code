export default class Cliente{
  nome:string;
  renda: number;

  constructor(n: string, r: number){
    this.nome = n;
    this.renda = r;
  }

  public getNome(){
    return this.nome
  }

  public setNome(nome: string){
    this.nome = nome;
  }

  public getRenda(){
    return this.renda
  }

  public setRenda(renda: number): number{
    return this.renda = renda;
  }
}