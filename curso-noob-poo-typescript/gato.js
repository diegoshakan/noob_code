"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Gato = /** @class */ (function () {
    function Gato(n, c) {
        this.nome = n;
        this.cor = c;
    }
    Gato.prototype.miar = function () {
        console.log("miau!");
    };
    return Gato;
}());
var Tom = /** @class */ (function (_super) {
    __extends(Tom, _super);
    function Tom(n, c, i) {
        var _this = _super.call(this, n, c) || this;
        _this.idade = i;
        return _this;
    }
    return Tom;
}(Gato));
var g = new Tom("Tom", "cinza", 2);
console.log(g.nome);
console.log(g.cor);
console.log(g.idade);
g.miar();
