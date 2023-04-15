function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}
function division(a, b) {
    if(b===0){
        return "No se puede dividir por cero";
    }   
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function raiz(a, b) {
    return a ** (1/b);
}

function potencia(a, b) {
    return a ** b;
}

function sumarFraccion(a, b) {
    const numerador1 = +a[0];
    
    const denominador1 = +a[2];
    
    const numerador2 = +b[0];
    
    const denominador2 = +b[2];
    

    const denominador = denominador1 * denominador2;
    const numeradorUnoSuma = multiplicacion(division(denominador,denominador1),numerador1);
    const numeradorDosSuma = multiplicacion(division(denominador,denominador2),numerador2);
    const numerador = suma(numeradorUnoSuma,numeradorDosSuma);
    const resultado = numerador+"/"+denominador;

    
    return resultado;

}




module.exports = {
    suma,
    resta,
    multiplicacion,
    division,
    modulo,
    raiz,
    potencia,
    sumarFraccion,
}