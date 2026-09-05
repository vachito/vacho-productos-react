//Continuear en el video 365

import express from 'express'
import router from './router'
import db from './config/db'
import colors from 'colors'
//conectar con la base de datos
async function connectDB() {
    try {
       await db.authenticate() 
       db.sync()
       console.log(colors.bgGreen('Conexion exitosa a la base de datos'))
    } catch (error) {
        console.log(error)
        console.log(colors.bgRed('Hubo un error al  conectar a la BD'))
    }
}
connectDB()
const server = express()
server.use(express.json())

server.use('/api/products',router)

export default server