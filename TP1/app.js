console.clear()

const process = require("process")
const operaciones = require("./calculadora.js")


let numeroUno = +process.argv[2]
let operacionARealizar = process.argv[3]
let numeroDos = +process.argv[4]

const resultado = function (n1, n2, n3){

    if( isNaN(n1)|| isNaN(n3) ){
     return "Por favor, ingrese caracteres numericos";
    }

    const operacion = ["suma", "resta", "multiplicacion", "division", "modulo", "+", "-", "*", "/", "%"];
    if(!operacion.includes(n2)){
        if( isNaN(n2) ){
            return "Operacion no valida";
        } else {
            return "El formato debe ser ´A Operacion B´ ";
        }
    }
    if(n2 === "suma" || n2==="+"){
        return operaciones.suma(n1, n3);
    }
    if(n2==="resta" || n2==="-"){
        return operaciones.resta(n1, n3);
    }
    if(n2==="multiplicacion" || n2==="*"){
        return operaciones.multiplicacion(n1, n3);
    }
    if(n2==="division" || n2==="/"){
        return operaciones.division(n1, n3);
    }
    
    if(n2==="modulo" || n2==="%"){
        return operaciones.modulo(n1, n3);
    }

}
const result = resultado(numeroUno,operacionARealizar, numeroDos);
console.log(result)



