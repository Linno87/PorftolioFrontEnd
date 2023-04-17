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


module.exports = {
    suma,
    resta,
    multiplicacion,
    division,
    modulo,
    raiz,
    potencia,
}