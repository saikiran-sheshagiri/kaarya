import mongoose from 'mongoose';
import { taskSchema, Task } from './task';

const categoriesSchema = new mongoose.Schema({
	title : String,
	boardId : String,	
	tasks : [taskSchema]
	
});

export default mongoose.model('Categories', categoriesSchema);