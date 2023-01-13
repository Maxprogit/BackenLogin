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
const url = `mongodb+srv://maxi:maxi@cluster0.cbdpc9z.mongodb.net/prueba?retryWrites=true&w=majority`
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('conectado a la base de datos')).catch((error) => console.log('Error de conexion ' + error))
 //Importar las rutas
const authRoutes = require('./routes/auth')
 //ruta para el middleware
app.use('/api/user', authRoutes)

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