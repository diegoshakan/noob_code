"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jerry = /** @class */ (function () {
    function Jerry(n) {
        this.nome = n;
    }
    Jerry.prototype.fugir = function () {
        console.log("corre, lá vem o Tom");
    };
    return Jerry;
}());
var r = new Jerry("Jerry");
r.idade = "2 anos";
console.log(r.nome);
console.log(r.idade);
