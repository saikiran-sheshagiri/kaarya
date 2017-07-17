import express from 'express';
import categoriesController from '../controllers/categoriesController';

const router = express.Router();

router.route('/')
    /* Create new categorie */
    .post((request,response,next) => {
        categoriesController.save(request,response);
    });

router.route('/:boardId')
    /* Get all categaories by boardId */
    .get((request, response, next) => {
        categoriesController.getCategoriesForBoard(request.params.boardId,request,response);
    });

router.route('/:categoryId')
    /* update the category */
    .put((request, response, next) => {
        categoriesController.update(request.params.categoryId, request, response);
    });

router.route('/:categoryId')
    /* remove category */
    .delete((request, response, next) => {
        categoriesController.delete(request.params.categoryId, request, response);
    });    

router.route('/:categoryId')
    /* Create new task */
    .post((request,response,next) => {
        categoriesController.saveTask(request,response);
    });

router.route('/:categoryId/:taskId')
    /* remove task */
    .delete((request, response, next) => {
        categoriesController.deleteTask(request.params.categoryId, request.params.taskId, request, response);
    });

/*To differentiate between update task and update category passing taskId as paramater, need to think about payload
 whether we goona send from parent root level or just child root level*/    
router.route('/:categoryId/:taskId')
    /* update task */
    .put((request, response, next) => {
        categoriesController.updateTask(request.params.categoryId, request, response);
    });    

router.route('/:categoryId/:taskId')
    /* Get task  by categoryId */
    .get((request, response, next) => {
        categoriesController.getTaskByCategoryId(request.params.categoryId,request.params.taskId,request,response);
    });    
export default router;