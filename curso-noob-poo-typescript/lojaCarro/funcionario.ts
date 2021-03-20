export default class Funcionario{
  nome: string;
  comissao: number = 0;

  constructor(n: string){
    this.nome = n;
  }

  public getNome(){
    return this.nome
  }

  public setNome(nome: string): string{
    return this.nome = nome;
  }

  public getComissao(){
    return this.comissao
  }

  public setComissao(comissao: number): number{
    return this.comissao = comissao;
  }
}