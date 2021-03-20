import Carro from "./carro";
import Cliente from "./cliente";
import Funcionario from "./funcionario";
import CompraCarro from "./compraCarro";

let car = new Carro("Logan", 2000, 10000)

let cliente = new Cliente("Diego", 5000)
let funcionario = new Funcionario("João")

let compra = new CompraCarro(cliente, funcionario, car)

compra.detalharCompra()