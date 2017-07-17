import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
title : String,
desc : String,
position : String
});

export default mongoose.model('Task',taskSchema);