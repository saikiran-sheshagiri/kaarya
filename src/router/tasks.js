import express from 'express';
import taskController from '../controllers/taskController';

const router = express.Router();

router.route('/')
    /* Create new task */
    .post((request,response,next) => {
        taskController.save(request,response);
    });

router.route('/:taskId')
    /* update the task */
    .put((request, response, next) => {
        taskController.update(request.params.taskId, request, response);
    });

router.route('/:taskId')
    /* remove task */
    .delete((request, response, next) => {
        taskController.delete(request.params.taskId, request, response);
    });    

export default router;
