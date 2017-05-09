import express from 'express';

const app = express();

const router = express.Router();

router.get('/', (request, response) => {
    response.send('Hello World...!!!');
})

app.use(router);

const server = app.listen(3000, () => {
    const {address, port} = server.address();
    console.log(`Example running on at http://${address}: ${port}`);
});