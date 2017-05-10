import express from 'express';
import router from './router'

const app = express();

//mount the routes on api
app.use('/api', router);

app.listen(3000, () => {
    console.log(`Example running on at 3000`);
});