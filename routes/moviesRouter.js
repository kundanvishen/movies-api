var express = require('express');
var moviesController = require('./../controllers/moviesController');

var moviesRouter = express.Router();

moviesRouter.route('') // movies
    .get(moviesController.get)
    .post(moviesController.add);

moviesRouter.route('/:id') //movies/:id
    .get(moviesController.getById);


module.exports = moviesRouter;