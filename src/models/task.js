import mongoose from 'mongoose';

export const taskSchema = new mongoose.Schema({
        title: String, 
        desc: String, 
        position: String
});

export const Task = mongoose.model('Task', taskSchema);