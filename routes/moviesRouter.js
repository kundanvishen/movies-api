var express = require('express');
var moviesController = require('./../controllers/moviesController');

var moviesRouter = express.Router();

moviesRouter.route('')
    .get(moviesController);


module.exports = moviesRouter;