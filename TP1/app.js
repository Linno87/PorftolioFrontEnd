console.clear()

const process = require("process")
const operaciones = require("./calculadora.js")


let numeroUno = process.argv[2]
let operacionARealizar = process.argv[3]
let numeroDos = process.argv[4]
const operacion = numeroUno + operacionARealizar + numeroDos;

const numeroA = +numeroUno;
const numeroB = +numeroDos;

if(numeroUno.includes("/") ||numeroDos.includes("/")){
    const resultadoFraccion = eval(operacion);
    console.log(resultadoFraccion);
    
}else if(isNaN(numeroA)||isNaN(numeroB)){
    console.log("Verifique los datos ingresados")
}else{
    const resultado = function (n1, n2, n3){
        n2 = n2.toLowerCase();
    
        const operacion = ["sumar", "restar", "multiplicar", "dividir", "modulo","raiz","potencia","^", "+", "-", "*", "/", "%"];
        if(!operacion.includes(n2)){
            if( isNaN(n2) ){
                return "Operacion no valida";
            } else {
                return "El formato debe ser ´A Operacion B´ ";
            }
        }
        if(n2 === "sumar" || n2==="+"){
            return operaciones.suma(n1, n3);
        }
        if(n2==="restar" || n2==="-"){
            return operaciones.resta(n1, n3);
        }
        if(n2==="multiplicar" || n2==="*"){
            return operaciones.multiplicacion(n1, n3);
        }
        if(n2==="dividir" || n2==="/"){
            return operaciones.division(n1, n3);
        }
        
        if(n2==="modulo" || n2==="%"){
            return operaciones.modulo(n1, n3);
        }
    
        if(n2==="raiz"){
            return operaciones.raiz(n1, n3);
        }
    
        if(n2==="potencia" || n2==="^"){
            return operaciones.potencia(n1, n3);
        }
    
    }
    const result = resultado(numeroA,operacionARealizar, numeroB);
    if(isNaN(result)){
        console.log(result);
    }else{
        console.log(numeroUno +" "+operacionARealizar+" "+numeroDos+" = "+ result)
    }
}







