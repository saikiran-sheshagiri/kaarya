import mongoose from 'mongoose';

const categoriesSchema = new mongoose.Schema({
	title : String,
	boardId : String
	
});

export default mongoose.model('Categories', categoriesSchema);