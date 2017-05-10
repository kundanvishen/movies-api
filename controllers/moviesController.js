var Movie = require('./../models/movieModel');



var get = function(req, res) {
    Movie.find(function(err, movies) {
        if (err) {
            res.status(500);
            res.send("Internal Server Error");
        } else {
            res.status(200);
            res.send(movies);
        }
    });
};

var add = function(req, res) {
    var movie = new Movie(req.body);
    movie.save(function(err) {
        if (err) {
            res.status(500);
            res.send("Failed");
        } else {
            res.status(201);
            res.send(movie);
        }
    });
};

var getById = function(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
        if (err) {
            res.staus(404);
            res.send("Not found");
        } else {
            res.status(200);
            res.send(movie);
        }
    });
};

module.exports = {
    add: add,
    get: get,
    getById: getById
};