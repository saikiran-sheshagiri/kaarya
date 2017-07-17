import Task from '../models/task';

class taskController {

    save(request,response){
        const task = new Task({
            title : request.body.title,
            desc: request.body.desc,
            position : request.body.position
        });
        task.save().then((task) => {
            response.json(task);
        });
    }

    update(id,request, response){
        Task.findByIdAndUpdate(id,{
                               title: request.body.title,
                               desc : request.body.desc,
                               position: request.body.position},
                               { new: true }, 
                               (error,updatedTask) => {
                                    if (error)
                                        response.send('Unable to find task with id: ' + id + '. ' + error);
                                    else
                                        response.json(updatedTask);
                               });
    }

    delete(id,request,response){
        Task.findByIdAndRemove(id,(error,removedTask) => {
            if (error)
				response.send('unable to remove task document with id : ' + id + '. ' + error);
			else
				response.json(removedTask);
        });
    }

    getTasksByCategory(categoryId,request,response){

    }
}
