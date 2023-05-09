const {readFileSync}= require("fs")
const {writeFileSync} = require("fs")
const { parse } = require("path")


module.exports ={
    tareas : leerJSON(),
    leerJSON: () => parse(path.join(__dirname,"/tareas.json"),"utf -8"),
    

}