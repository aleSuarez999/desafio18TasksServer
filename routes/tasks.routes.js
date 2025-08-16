import express from "express"
import {body} from "express-validator"
import { validationErrorResponse } from "../middleware/validateResponse.js"
import { createTask, getTasks } from "../controller/TaskController.js"
//* La aplicación debe tener dos rutas: una para crear una nueva tarea y otra para obtener
//todas las tareas existentes en la base de datos.

const route = express.Router()
console.log("Carga de rutas") // esto se carga al iniciar el server
route
    .get("/", getTasks)
    .post("/", [
    body("title").isString()
                .isLength({min: 5, max: 50})
                .withMessage("Ingrese entre 5 y 50 Caracteres"),
    body("descript").isString()
                .isLength({min: 10, max: 100})
                .withMessage("Ingrese entre 10 y 100 Caracteres"),
    validationErrorResponse
], createTask)

export default route