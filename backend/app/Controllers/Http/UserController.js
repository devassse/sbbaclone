'use strict'

const User = use('App/Models/User');

class UserController {

    /**
     * Used to Register New User
     * @params all UserData
    */
    async register({request}){
        const {username, email, password, repassword} = request.all();
        await User.create({
            username,
            email,
            password,
            repassword
        })  
          
        return this.login(...arguments);
    }

    /**
     * Used to Login Users into the App
     * @params username or email, password
    */
    async login({request, auth}){
        const {email, password} = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }
}

module.exports = UserController
