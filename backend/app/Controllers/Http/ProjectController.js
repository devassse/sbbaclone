'use strict'

const AuthorizationService = use('App/Services/AuthorizationService');
const Project = use('App/Models/Project');

class ProjectController {
    async index({auth}){
        const user = await auth.getUser();
        return await user.projects().fetch();
    }

    async create({auth, request}){
        const user = await auth.getUser();
        const {title, shortdescription} = request.all();

        const project = new Project();
        project.fill({
            title,
            shortdescription
        });
        await user.projects().save(project);
        return project;
    }

    async destroy({auth, params}){
        const user = await auth.getUser();
        const {id} = params;
        const project = await Project.find(id);
        AuthorizationService.verifyPermission(project,user);
        await project.delete();
        return project;  
    }


    async update({auth, request, params}){
        const user = await auth.getUser();
        const {id} = params;
        const project = await Project.find(id);
        AuthorizationService.verifyPermission(project,user);
        project.merge(request.only([
            'title',
            'shortdescription'
        ]));
        await project.save();
        return project;
    }


}

module.exports = ProjectController
