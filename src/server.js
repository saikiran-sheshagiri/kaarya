import express from 'express';

const app = express();

const server = app.listen(3000, () => {
    const {address, port} = server.address();
    console.log(`Example running on at http://${address}: ${port}`);
});