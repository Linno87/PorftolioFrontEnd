
const db = require("./app-tareas");
const argv = require("process").argv;

const accion = argv[2];
const nombreTarea = argv[3];
const estadoTarea = argv[4];


switch (accion) {
    case "listar":
        db.listarJSON()
        break;
    case "agregar":
        if(nombreTarea===undefined || estadoTarea===undefined){
            console.log("Debe ingresar el nombre y el estado de la tarea");
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
        console.log("Debe ingresar una accion");
        break
    default:
        console.log("Accion no reconocida");
        break;
}