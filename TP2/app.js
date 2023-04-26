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
        const tarea ={
            nombre: nombreTarea,
            estado: estadoTarea
        }
        console.log(db.guardarJSON(tarea));
    default:
        break;
}