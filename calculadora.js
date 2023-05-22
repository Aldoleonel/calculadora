
function calculadora(operacion, numeroA, numeroB) {
    let resultado = 0;
    switch (operacion) {
      case "sumar":
        resultado = numeroA + numeroB;
        break;
      case "restar":
        resultado = numeroA - numeroB;
        break;
      case "multiplicar":
        resultado = numeroA * numeroB;
        break;
      case "dividir":
        resultado = numeroA / numeroB;
        break;
      case "potencia":
        resultado = Math.pow(numeroA, numeroB);
        break;
      default:
        console.log("Ups, no se que hacer");
        break;
    }
    return resultado;
  }
  
  module.exports = { calculadora };