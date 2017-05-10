var express = require('express');
var MovieModel = require('./../models/movieModel');
var moviesController = require('./../controllers/moviesController')(MovieModel);

var moviesRouter = express.Router();

moviesRouter.route('') // movies
    .get(moviesController.get)
    .post(moviesController.add)
    .delete(moviesController.remove);

moviesRouter.route('/:id') //movies/:id
    .get(moviesController.getById)
    .put(moviesController.update)
    .patch(moviesController.patch);

module.exports = moviesRouter;