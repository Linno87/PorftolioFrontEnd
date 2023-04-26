
const db = require("./app-tareas");
const argv = require("process").argv;

const accion = argv[2];
const nombreTarea = argv[3];
let estadoTarea = argv[4];

let accionesDisponibles = ["listar","agregar"];

switch (accion) {
    case "listar":
        db.listarJSON()
        break;
    case "agregar":
        const arrayVeri = ["terminada","en progreso","pendiente", undefined]
        const boolPertenece = arrayVeri.includes(estadoTarea);
        if(nombreTarea===undefined || estadoTarea===undefined || !boolPertenece){
            console.log("Debe ingresar el nombre y el estado de la tarea");
            if(!boolPertenece){
                console.log("Recuerde, el estado de la tarea debe ser terminada, pendiente o en progreso");
            }
            
        }else {
            const tarea ={
                nombre: nombreTarea,
                estado: estadoTarea
            }
           const actualizado = db.guardarJSON(tarea);
           db.listarJSON(actualizado)

        }
        break
     case undefined:
        console.log("Atencion - Tienes que pasar una acción");
        console.log("Las acciones disponibes son:"+ accionesDisponibles);
        break
    default:
        console.log("No entiendo qué quieres hacer");
        console.log("Las acciones disponibes son : "+ accionesDisponibles);
        break;
}