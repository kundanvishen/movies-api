var express = require('express');
var moviesRouter = require('./routes/moviesRouter');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect("mongodb://localhost/MoviesDb");

var app = express();

app.listen(3000, function() {

});

app.use('/movies', moviesRouter);