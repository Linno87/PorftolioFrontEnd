
const fs = require('fs');


function leerJSON(){
    const archivo = fs.readFileSync('./app-tareas/tareas.json', 'utf8')
    return archivo
}

function parsearJSON(archivo){
    return JSON.parse(archivo);
}

function escribirJSON(arrayTarea){
    const archivo =  JSON.stringify(arrayTarea,null,3)
    fs.writeFileSync('./app-tareas/tareas.json',archivo, "utf-8");
    arrayTarea = parsearJSON(leerJSON());
    return arrayTarea;
}

module.exports = {
    listarJSON : () => {
        const arrayTarea = parsearJSON(leerJSON())
        return arrayTarea;
    },
    guardarJSON: (tarea) => {
        const  arrayTarea = parsearJSON(leerJSON());
        arrayTarea.push(tarea);
        const nuevoArchivo =  escribirJSON(arrayTarea);
        return nuevoArchivo;
    },
}