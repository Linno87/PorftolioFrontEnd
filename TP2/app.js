
const db = require("./app-tareas");
const argv = require("process").argv;

const accion = argv[2];
const nombreTarea = argv[3];
let estadoTarea = argv[4];


switch (accion) {
    case "listar":
        db.listarJSON()
        break;
    case "agregar":
        const arrayVeri = ["terminada","en progreso","pendiente", undefined]
        const boolPertenece = arrayVeri.includes(estadoTarea);
        if(nombreTarea===undefined || !boolPertenece){
            console.log("Debe ingresar el nombre y el estado de la tarea");
            if(!boolPertenece){
                console.log("El estado de la tarea no es válido");
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
        break
    default:
        console.log("No entiendo qué quieres hacer");
        break;
}