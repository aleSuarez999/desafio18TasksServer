import { model, Schema } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    descript: {
        type: String,
        require: true
    }
    
}, {timestamps: true})

export const Task = model("Task", taskSchema)
// exporto el modelo