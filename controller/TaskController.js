import { Task } from "../models/Task.js";

export const createTask = async (req, res) => { 
        console.log("createtask en progreso")
        const { body } = req
        try {
           console.log("alta en progreso")
       
           const task = await Task.create(body)

            if (!task) {
                return res.status(400).json({
                    ok: false,
                    msg: "El producto no se ha creado correctamente"
                })
            }

            res.json({
                ok: true,
                msg: "tarea agregada",
                task: task
            })

        } catch (error) {
             console.error(error)
               res.status(500).json({
                ok: false,
                msg: "Internal error"
            })
        }

}
export const getTasks = async (req, res) => {
     console.log("llega a getTasks")
     //const { text } = req.query
    try {
       //const query = text ? { text: new RegExp(text, "i") } : undefined
        const tasks = await Task.find()
        // traigo todas las tareas
        res.json({
            ok: true,
            tasks: tasks
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Internal error"
        })
    }
} 