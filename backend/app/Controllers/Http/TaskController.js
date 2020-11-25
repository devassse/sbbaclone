'use strict'

const AuthorizationService = use("App/Services/AuthorizationService");
const Project = use('App/Models/Project');
const Task = use('App/Models/Task');

class TaskController {

    async index({auth, params}){
        const user = await auth.getUser();
        const {id} = params;
        const project = await Project.find(id);
        AuthorizationService.verifyPermission(project,user);
        return await project.tasks().fetch();
    }

    async create({auth, request, params}){
        const user = await auth.getUser();
        const {title, description, completed} = request.all();
        const {id} = params;
        const project = await Project.find(id);
        AuthorizationService.verifyPermission(project,user);
        const task = new Task();
        task.fill({
            title,
            description,
            completed
        })
        await project.tasks().save(task);
        return task;
    }

    async update({auth, request, params}){
        const user = await auth.getUser();
        const {id} = params;
        const task = await Task.find(id);
        const project = await task.project().fetch();
        AuthorizationService.verifyPermission(project, user);
        task.merge(request.only([
            'title',
            'description',
            'completed'
        ]));
        await task.save();
        return task;
    }

    async destroy({auth, params}){
        const user = await auth.getUser();
        const {id} = params;
        const task = await Task.find(id);
        const project = await task.project().fetch();
        AuthorizationService.verifyPermission(project, user);
        await task.delete();
        return task;
    }

}

module.exports = TaskController
