"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Funcionario = /** @class */ (function () {
    function Funcionario(n) {
        this.comissao = 0;
        this.nome = n;
    }
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.setNome = function (nome) {
        return this.nome = nome;
    };
    Funcionario.prototype.getComissao = function () {
        return this.comissao;
    };
    Funcionario.prototype.setComissao = function (comissao) {
        return this.comissao = comissao;
    };
    return Funcionario;
}());
exports.default = Funcionario;
