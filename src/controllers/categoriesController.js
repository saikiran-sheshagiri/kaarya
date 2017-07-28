import Categories from '../models/category';
import Task from '../models/task';

class CategoriesController {

	getAll(boardId, request, response) {
		Categories
			.find({ boardId: boardId }, 
				(error, categories) => {
					if (error) response.send('Unable to find category with board id: ' + boardId + '. ' + error);
					else response.json(categories);
				});
	}
	
	getById(categoryId, request, response) {
		Categories
			.findById(categoryId, 
				(error, category) => {
					if (error) response.send('Unable to find category with category id: ' + categoryId + '. ' + error);
					else response.json(category);
				});
	}

	save(request, response) {
		const category = new Categories({
			title: request.body.title, 
			boardId: request.params.boardId,
			tasks: []	//defaulting tasks to empty
		});
		category
			.save()
			.then((category) => {
				response.json(category);
			});
	}

	update(id, request, response) {
		Categories
		.findByIdAndUpdate(id, { title: request.body.title }, { new: true }, 
			(error, updatedCategory) => {
				if (error) response.send('Unable to find category with id: ' + id + '. ' + error);
				else response.json(updatedCategory);
			});
	}

	delete(id, request, response) {
		Categories
			.findByIdAndRemove(id, 
				(error, removeCategory) => {
					if (error) response.send('unable to remove document with id : ' + id + '. ' + error);
					else response.json(removeCategory);
			});
	}

	

	// saveTask(categoryId, request, response) {
	// 	const category = getCategory(categoryId);
	// 	if (category != null) {
	// 		category.tasks.push({
	// 							title: request.body.tasks[0].title, 
	// 							desc: request.body.tasks[0].desc, 
	// 							position: request.body.tasks[0].position
	// 						});
	// 		var subdoc = category.tasks[0];
	// 		console.log(subdoc) // { _id: '501d86090d371bab2c0341c5', name: 'Liesl' }
	// 		subdoc.isNew;
	// 		category
	// 			.save()
	// 			.then((category) => {
	// 				response.json(category);
	// 			});
	// 	} else {
	// 		response.json(null);
	// 	}
	// }

	// deleteTask(categoryId, taskId, request, response) {
	// 	const category = getCategory(categoryId);
	// 	if (category != null) {
	// 		category
	// 			.tasks
	// 			.id(taskId)
	// 			.remove();
	// 		category
	// 			.save(function (err) {
	// 				if (err) return handleError(err);
	// 				console.log('the task: ' + taskId + ' were removed from category ' + categoryId);
	// 			});
	// 	}
	// }

	// updateTask(categoryId, request, response) {
	// 	Categories
	// 		.findOneAndUpdate({ "_id": categoryId, "tasks._id": request.body.tasks[0]._id }, 
	// 							{ "$set": { "tasks.$": request.body.tasks[0] } }, 
	// 							(error, updatedDoc) => { 
	// 								if (error) response.send('Unable to update task for category id: ' + categoryId + '. ' + error);
	// 								else response.json(updatedDoc);
	// 						});
	// }

	// getTaskByCategoryId(categoryId, taskId, request, response) {
	// 	const category = getCategory(categoryId);
	// 	if (category != null) {
	// 		const task = category.tasks.id(taskId);
	// 		response.json(task);
	// 	} else { 
	// 		response.json(null); 
	// 	}
	// }
}

export default new CategoriesController();