import Board from '../models/board';

class BoardController {
    getAll(request, response) {
        Board.find((error, boards) => {
            if (error)
                response.send('Unable to find boards: ' + error)
            else
                response.json(boards);
        });
    }

    getById(id, request, response) {
        Board.findById(id, (error, board) => {
            if (error)
                response.send('Unable to find board with id: ' + id + '. ' + error);
            else
                response.json(board);
        });
    }

    save(request, response) {
        const board = new Board({
            title: request.body.title
        });

        board.save()
            .then((board) => {
                response.json(board);
            });
    }

    update(id, request, response) {
        Board.findByIdAndUpdate(id, { title: request.body.title }, { new: true }, (error, updatedBoard) => {
            if(error)
                response.send('Unable to find board with id: ' + id + '. ' + error);
            else
                response.json(updatedBoard);
        });
    }

    delete(id, request, response) {
        Board.findByIdAndRemove(id, (error, removedBoard) => {
            if(error)
                response.send('Unable to remove the document with id: ' + id + '. ' + error);
            else
                response.json(removedBoard);
        });
    }

}

export default new BoardController(); 

