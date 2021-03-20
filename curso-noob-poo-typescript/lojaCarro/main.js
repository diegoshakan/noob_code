"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = __importDefault(require("./carro"));
var cliente_1 = __importDefault(require("./cliente"));
var funcionario_1 = __importDefault(require("./funcionario"));
var compraCarro_1 = __importDefault(require("./compraCarro"));
var car = new carro_1.default("Logan", 2000, 10000);
var cliente = new cliente_1.default("Diego", 5000);
var funcionario = new funcionario_1.default("João");
var compra = new compraCarro_1.default(cliente, funcionario, car);
compra.detalharCompra();
