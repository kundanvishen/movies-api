var express = require('express');
var moviesRouter = require('./routes/moviesRouter');

var app = express();

app.listen(3000, function() {

});

app.use('/movies', moviesRouter);