import { Task } from "../models/Task.js";

export const createTask = async (req, res) => { 
        console.log("createtask en progreso")
        const { body } = req
        try {
            console.log("alta en progreso")
           
            const exists = await Task.findOne({ title: body.title })

            if (exists){
                console.log (exists)

                const {_id: id} = exists
                // renombro a id
                console.log("body", body)
                const editTask = await Task.findByIdAndUpdate(id, body, {new: true})
                
                const { _id, createdAt, updatedAt, __v, ...task } = editTask.toObject()

                //const task = { _id, createdAt, updatedAt, __v, ...editTask}

                return res.json({
                    ok: true,
                    msg: "⚠️ Tarea actualizada",
                    Task: task
                })
            }


            const task = await Task.create(body)

            if (!task) {
                return res.status(400).json({
                    ok: false,
                    msg: "El producto no se ha creado correctamente"
                })
            }
 
           // remuevo campos
            //const newTask = { _id, createdAt, updatedAt, __v, ...task}
            const { _id, createdAt, updatedAt, __v, ...newTask} = task.toObject()
            res.json({
                ok: true,
                msg: "tarea agregada",
                task: newTask
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
 
    try {
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