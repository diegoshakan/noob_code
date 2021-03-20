"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompraCarro = /** @class */ (function () {
    function CompraCarro(cli, fun, car) {
        this.cliente = cli;
        this.funcionario = fun;
        this.carro = car;
        this.carro.setValor(this.darDesconto(this.carro.getValor()));
        this.precoFinal = this.carro.getValor();
        this.funcionario.setComissao(this.addComissao(this.precoFinal));
        this.valorComDesconto = 0;
    }
    CompraCarro.prototype.darDesconto = function (preco) {
        if (this.carro.getAno() < 2000) {
            this.valorComDesconto = this.carro.getValor() * 0.90;
            this.carro.setValor(this.valorComDesconto);
        }
        else {
            this.carro.setValor(preco);
        }
        if (this.cliente.getRenda() < 5000) {
            this.valorComDesconto = this.carro.getValor() * 0.90;
            return this.carro.setValor(this.valorComDesconto);
        }
        else {
            return this.carro.setValor(this.carro.getValor());
        }
    };
    CompraCarro.prototype.addComissao = function (valor) {
        return this.funcionario.setComissao(valor * 0.02);
    };
    CompraCarro.prototype.detalharCompra = function () {
        console.log("Nome: " + this.cliente.getNome() + "\nCarro: " + this.carro.getModelo() + ", Ano: " + this.carro.getAno() + ", Valor: " + this.carro.getValor() + "\nFuncion\u00E1rio: " + this.funcionario.getNome() + ", Comiss\u00E3o: R$ " + this.funcionario.getComissao());
    };
    return CompraCarro;
}());
exports.default = CompraCarro;
