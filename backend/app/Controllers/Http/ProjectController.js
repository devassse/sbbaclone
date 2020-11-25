'use strict'

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
          if(project.user_id !== user.id){
              return response.status(403);
          } 
        await project.delete();
        return project;  
    }


    async update({auth, request, params}){
        const user = await auth.getUser();
        const {id} = params;
        const project = await Project.find(id);

        //TODO: implement another method for errors

        project.merge(request.only('title', 'shortdescription'));
        await project.save();
        return project;
    }


}

module.exports = ProjectController
