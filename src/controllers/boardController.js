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
        let query = { _id: id }
        Board.findOneAndUpdate(query, { title: request.body.title }, (error, updatedBoard) => {
            if(error)
                response.send('Unable to find board with id: ' + id + '. ' + error);
            else
                response.json(updatedBoard);
        });
    }

    delete() {
        
    }

}

export default new BoardController(); 

