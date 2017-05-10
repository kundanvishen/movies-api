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

var update = function(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
        if (err) {
            res.status(404);
            res.send("Not found");
        } else {
            movie.title = req.body.title;
            movie.genre = req.body.genre;
            movie.rating = req.body.rating;
            movie.isReleased = req.body.isReleased;

            movie.save(function(err) {
                if (!err) {
                    res.status(200);
                    res.send(movie);
                } else {
                    res.status(500);
                    res.send("Failed");
                }
            });
        }
    });
};

module.exports = {
    add: add,
    get: get,
    getById: getById,
    update: update
};