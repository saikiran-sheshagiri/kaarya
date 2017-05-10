import express from 'express';
import router from './router'
import mongoose from 'mongoose';

const app = express();

//connect to the mongodb instance
mongoose.connect('mongodb://localhost:27017/kaarya');
mongoose.connection.on('error', () => {
    console.log('Unable to connect to database');
});

mongoose.connection.once('open', () => {
    console.log('Connected to local instance of the database');
});


//mount the routes on api
app.use('/api', router);

app.listen(3000, () => {
    console.log(`Example running on at 3000`);
});