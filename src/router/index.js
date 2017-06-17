import express from 'express';
import boardsRouter from './boards';
import categoriesRouter from './categories';

const router = express.Router();

router.get('/heartbeat', (request, response) => {
    response.send('API is running');
    console.log('API is running!');
});

router.use('/boards', boardsRouter);
router.use('/categories', categoriesRouter);

export default router;