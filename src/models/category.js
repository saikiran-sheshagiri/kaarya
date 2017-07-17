import mongoose from 'mongoose';
import Task from './task';

const categoriesSchema = new mongoose.Schema({
	title : String,
	boardId : String,	
	tasks : [Task]
	
});

export default mongoose.model('Categories', categoriesSchema);