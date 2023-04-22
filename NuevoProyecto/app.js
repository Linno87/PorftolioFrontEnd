const dataBase = require('./data');

let arrayProducto = dataBase.leerProducto();
for (let i = 0; i < arrayProducto.length; i++) {
    console.log(`${ i +1} - ${arrayProducto[i].nombre} - ${arrayProducto[i].precio} - ${arrayProducto[i].cantidad} - ${arrayProducto[i].descripcion}}`);
}

const producto = {
    nombre: "Mayonesa",
    precio: 120,
    cantidad: 101,
    descripcion: "250 gr"
}




console.log(arrayProducto);