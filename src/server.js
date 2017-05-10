import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


import router from './router';

const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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