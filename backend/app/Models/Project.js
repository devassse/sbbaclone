'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {

    user(){
        return this.belongsTo('App/Models/User');
    }

     /**
   * A project may have many Tasks
   */
  tasks () {
    return this.hasMany('App/Models/Task')
  }

}


module.exports = Project
