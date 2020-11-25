'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/** Just for Funny, I will use this to Say its Illegal - 606, to use direct acess */
Route.get('/', () => {
  return { illegal: '606 - Do not do That Again' }
})

/**
 * Routes Used to Navigate Into de api, Possibility to use different prefixs
 * 
 * v0 - First Version || Under Develpment
*/
Route.group(() => {
  Route.post('auth/register', 'UserController.register');
  Route.post('auth/login', 'UserController.login');

  Route.get('projects', 'ProjectController.index').middleware('auth');
  Route.post('projects', 'ProjectController.create').middleware('auth');
})
.prefix('api/v0');
