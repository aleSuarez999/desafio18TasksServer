import express from "express"
import dotenv from "dotenv"
import tasksRoutes from "./routes/tasks.routes.js"
import { dbConnection } from "./database/dbConection.js"

const server = express()

import cors from "cors" // esto es para poder llamar desde el mismo localhost a la api

const api = async () => {
   
    dotenv.config() // agrega las variables del .env
    const EXPRESS_PORT = process.env.EXPRESS_PORT
    server.use(cors())
    server.use(express.json())
    
    await dbConnection()

    server.use("/api/tasks", tasksRoutes)

    server.listen(EXPRESS_PORT, () => {
        console.log(`el servidor está corriendo en el puerto ${EXPRESS_PORT}`)
        console.log(`http://localhost:${EXPRESS_PORT}/api/tasks/`)
    })

}

api()