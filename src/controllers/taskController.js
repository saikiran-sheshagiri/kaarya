import {taskSchema, Task } from '../models/task';
import Categories from '../models/category';

class TasksController {

    getAll(request, response){
        Categories
			.findById(request.params.categoryId, 
				(error, category) => {
					if (error) response.send('Unable to find category with category id: ' + categoryId + '. ' + error);
					else {
                        response.json(category.tasks);
                    };
				});
    }

    getById(taskId, request, response) {
        Categories
			.findById(request.params.categoryId, 
				(error, category) => {
					if (error) response.send('Unable to find category with category id: ' + categoryId + '. ' + error);
					else {
                        const task = category.tasks.id(taskId);
                        if(task) response.json(task);
                        else response.send('unable to find the task with id: ' + taskId);
                    };
				});
    }

    save(request,response){

        Categories
			.findById(request.params.categoryId, 
				(error, category) => {
					if (error) response.send('Unable to find category with category id: ' + categoryId + '. ' + error);
					else {
                        category.tasks.push({
                                                title : request.body.title,
                                                desc: request.body.desc,
                                                position : request.body.position
                                            });
                        category.save((error, category) => {
                            if (error) response.send('unable to save task');
                            else response.json(category);
                        })
                    };
				});
    }

    update(taskId,request, response){
        Categories
			.findById(request.params.categoryId, 
				(error, category) => {
					if (error) response.send('Unable to find category with category id: ' + categoryId + '. ' + error);
					else {
                        let task = category.tasks.id(taskId);

                        task.title = request.body.title;
                        task.desc = request.body.desc;
                        task.position = request.body.position;

                        category.save((error, category) => {
                            if (error) response.send('unable to save task');
                            else response.json(category);
                        })
                    };
				});
    }

    delete(taskId, request, response){
        Categories
			.findById(request.params.categoryId, 
				(error, category) => {
					if (error) response.send('Unable to find category with category id: ' + categoryId + '. ' + error);
					else {
                        category.tasks.pull(taskId);

                        category.save((error, category) => {
                            if (error) response.send('unable to save task');
                            else response.json(category);
                        })
                    };
				});
    }
}

export default new TasksController();
