import express from 'express';
import boardsRouter from './boards';
import categoriesRouter from './categories';
import tasksRouter from './tasks';

const router = express.Router();

router.get('/heartbeat', (request, response) => {
    response.send('API is running');
    console.log('API is running!');
});

router.use('/boards', boardsRouter);
router.use('/categories', categoriesRouter);
router.use('/tasks', tasksRouter);

export default router;