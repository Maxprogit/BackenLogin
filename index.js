const express = require('express')
const mongoose = require('mongoose')
const  bodyparser = require('body-parser')
require('dotenv').config()

const app = express()

//Capturar body

app.use(bodyparser.urlencoded({
    extended: false
}))
 app.use(bodyparser.json())

 //conexion a BD

 //Importar las rutas

 //ruta para el middleware
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'Funciona Correcto'
    })
})

 // Arrancar el servidor
 const PORT = process.env.PORT || 3005

 app.listen(PORT, () => {
    console.log(`Server en Ejecucion: ${PORT}`)
 })