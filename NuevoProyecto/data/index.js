const fs = require("fs")

function leerProductos() {

    const productos = fs.readFileSync("./data/productos.json", "utf-8")
    return productos;
}

function parseProductos(producto){
    return JSON.parse(producto)
}

function guardarProductos(productos){ 
    fs.writeFileSync("./data/productos.json", JSON.stringify(productos))
}

module.exports = {
    leerProducto : () => {
        return parseProductos(leerProductos());
        
    },
    agregarProducto : (producto) => {
        guardarProductos(producto)
        return "producto guardado"
    },
}