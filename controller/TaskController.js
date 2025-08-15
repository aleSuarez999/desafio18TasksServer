import { Task } from "../models/Task.js";

export const createTask = async (req, res) => { 
        console.log("createtask en progreso")
        try {
            console.log(req.body)
            res.json({
            ok: true,
            msg: "alta en progreso"
            //tasks: tasks
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
     const { text } = req.query
    try {
       //const query = text ? { text: new RegExp(text, "i") } : undefined
        const tasks = await Task.findAll()
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