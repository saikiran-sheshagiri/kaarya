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

export default router;