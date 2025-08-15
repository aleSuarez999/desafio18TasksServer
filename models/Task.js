import { model, Schema } from "mongoose";

const taskSchema = new Schema({
    text: {
        type: String,
        require: true
    } 
}, {timestamps: true})

export const Task = model("Task", taskSchema)
// exporto el modelo