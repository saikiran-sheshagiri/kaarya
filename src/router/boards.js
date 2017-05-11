import express from 'express';
import boardController from '../controllers/boardController'

const router = express.Router();

router.route('/')
    /** Get all boards */
    .get((request, response, next) => {
        boardController.getAll(request, response);
    })
    /** Create a new board */
    .post((request, response, next) => {
        boardController.save(request, response);
    });

router.route('/:boardId')
    /** Get a board with ID */
    .get((request, response, next) => {
        boardController.getById(request.params.boardId, request, response);
    })
    /** Update a board */
    .put((request, response, next) => {
        boardController.update(request.params.boardId, request, response);
    })
    /** Remove a board */
    .delete((request, response, next) => {
        boardController.delete(request.params.boardId, request, response);
    });

export default router;