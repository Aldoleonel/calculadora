const argv = require('process').argv;
const { calculadora } = require("./calculadora");
const operacion = argv[2];
const numeroA = +argv[3];
const numeroB = +argv[4];

let resultado = calculadora(operacion, numeroA, numeroB);

console.log(`El resultado de la operación ${operacion} es: ${resultado}`);