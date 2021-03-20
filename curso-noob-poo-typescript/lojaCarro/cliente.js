"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(n, r) {
        this.nome = n;
        this.renda = r;
    }
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Cliente.prototype.getRenda = function () {
        return this.renda;
    };
    Cliente.prototype.setRenda = function (renda) {
        return this.renda = renda;
    };
    return Cliente;
}());
exports.default = Cliente;
