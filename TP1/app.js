console.clear()

const process = require("process")
const operaciones = require("./calculadora.js")

let n1 = +process.argv[2]
let n2 = process.argv[3]
let n3 = +process.argv[4]

if( isNaN(n1)|| isNaN(n3) ){
    console.log("Por favor, ingrese caracteres numericos")}

const operacion = ["suma", "resta", "multiplicacion", "division", "+", "-", "*", "/"];
if(!operacion.includes(n2)){
    console.log("Operacion no valida")
}


console.log(n1, n2, n3)



