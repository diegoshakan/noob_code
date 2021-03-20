"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = /** @class */ (function () {
    function Carro(m, a, v) {
        this.modelo = m;
        this.ano = a;
        this.valor = v;
    }
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (modelo) {
        return this.modelo = modelo;
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.setAno = function (ano) {
        this.ano = ano;
    };
    Carro.prototype.getValor = function () {
        return this.valor;
    };
    Carro.prototype.setValor = function (valor) {
        return this.valor = valor;
    };
    return Carro;
}());
exports.default = Carro;
