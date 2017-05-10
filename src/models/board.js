import mongoose from 'mongoose';

const boardSchema = new mongoose.Schema({
    title: String
});

export default mongoose.model('Board', boardSchema);

