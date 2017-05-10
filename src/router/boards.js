import express from 'express';

const router = express.Router();

router.route('/')
    /** Get all boards */
    .get((request, response, next) => {
        response.send('Getting all boards');
    })
    /** Create a new board */
    .post((request, response, next) => {
        response.send('Saving a new board to the boards collection');
    });

router.route('/:boardId')
    /** Get a board with ID */
    .get((request, response, next) => {
        response.send('Get a single board with Id: ' + boardId);
    })
    /** Update a board */
    .put((request, response, next) => {
        response.send('Updating the baord with id: ' + boardId);
    })
    .delete((request, response, next) => {
        response.send('deleting board with id: ' + boardId);
    });

export default router;