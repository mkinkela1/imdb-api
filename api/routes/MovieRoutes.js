const Express = require('express');
const Router = Express.Router({ mergeParams: true });

const MoviesController = require('./../controllers/MoviesController');

Router.post('/', MoviesController.createMovie);
Router.get('/', MoviesController.getMovies);

module.exports = Router;