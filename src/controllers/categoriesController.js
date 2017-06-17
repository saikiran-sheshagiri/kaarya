import Categories from '../models/category';

class CategoriesController {


	getCategoriesForBoard(boardId, request, response) {
		Categories.find({boardId : boardId}, (error, categories) => {
			if (error)
				response.send('Unable to find category with board id: ' + boardId + '. ' + error);
			else
				response.json(categories);
		});
	}


	save(request, response) {
		const category = new Categories({
			title: request.body.title,
			boardId: request.body.boardId
		});
		category.save().then((category) => {
			response.json(category);
		});
	}

	update(id, request, response) {
		Categories.findByIdAndUpdate(id, 
									{ title: request.body.title, 
									 boardId : request.body.boardId }, 
										   { new: true }, (error, updatedCategory) => {
			if (error)
				response.send('Unable to find category with id: ' + id + '. ' + error);
			else
				response.json(updatedCategory);
		});
	}

	delete(id, request, response) {
		Categories.findByIdAndRemove(id, (error, removeCategory) => {
			if (error)
				response.send('unable to remove document with id : ' + id + '. ' + error);
			else
				response.json(removeCategory);
		});
	}
}
export default new CategoriesController();