
const db = require("./app-tareas");
const argv = require("process").argv;

const accion = argv[2];
const nombreTarea = argv[3];
const estadoTarea = argv[4];


switch (accion) {
    case "listar":

        const array = db.listarJSON();
        for (let i= 0; i<array.length; i++) {
            console.log(`${i+1}.- La tarea ${array[i].nombre} se encuentra ${array[i].estado}`)  
        }
        break;
    case "agregar":
        if([nombreTarea,estadoTarea].length === 0){
            console.log("Debe ingresar el nombre y el estado de la tarea");
        }else {
            const tarea ={
                nombre: nombreTarea,
                estado: estadoTarea
            }
            console.log(db.guardarJSON(tarea));
        }
        break
     case undefined:
        console.log("Debe ingresar una accion");
        break
    default:
        console.log("Accion no reconocida");
        break;
}