import express from 'express';
import taskController from '../controllers/taskController';

const router = express.Router({mergeParams: true});

router.route('/')
    /* Create new task */
    .post((request, response, next) => {
        taskController.save(request, response);
    })
    /* Get all tasks by categoryId and boardId */
    .get((request, response, next) => {
        taskController.getAll(request,response);
    });

router.route('/:taskId')
    /** Get a category from a board */
    .get((request, response, next) => {
        taskController.getById(request.params.taskId, request, response)
    })
    /* update the category */
    .put((request, response, next) => {
        taskController.update(request.params.taskId, request, response);
    })
    /* remove category */
    .delete((request, response, next) => {
        taskController.delete(request.params.taskId, request, response);
    });    

export default router;
