
const fs = require('fs');


function leerJSON(){
    let archivo = fs.readFileSync('./app-tareas/tareas.json', 'utf8')
    archivo = parsearJSON(archivo);
    return archivo
}

function parsearJSON(archivo){
    return JSON.parse(archivo);
}

function escribirJSON(arrayTarea){
    const archivo =  JSON.stringify(arrayTarea,null,3)
    fs.writeFileSync('./app-tareas/tareas.json',archivo, "utf-8");
    arrayTarea = leerJSON();
    return arrayTarea;
}

module.exports = {
    listarJSON : (arrayList) => {
        const array = arrayList ? arrayList :leerJSON();
        for (let i= 0; i<array.length; i++) {
            console.log(`${i+1}.  ${array[i].nombre} - ${array[i].estado}`)  
        }
    },
    leerJSON,
    guardarJSON: (tarea) => {
        const  arrayTarea = leerJSON();
        arrayTarea.push(tarea);
        const nuevoArchivo =  escribirJSON(arrayTarea);
        return nuevoArchivo;
    },
}