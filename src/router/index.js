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
boardsRouter.use('/:boardId/categories', categoriesRouter);

categoriesRouter.use('/:categoryId/tasks', tasksRouter);

export default router;