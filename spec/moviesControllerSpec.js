describe("Movies Controller", function() {

    // create Mock Objects
    var movieController, movie, req, res;
    movie = { find: jasmine.createSpy(), findById: jasmine.createSpy() };
    res = { find: jasmine.createSpy() };
    req = { params: { id: 1 } };

    movieController = require('./../controllers/moviesController')(movie);
    describe("Get", function() {
        it('should call Movie.find function', function() {
            movieController.get(req, res);
            expect(movie.find).toHaveBeenCalled();
        });
    });

    describe("getById", function() {
        it('should call Movie.findById function', function() {
            movieController.getById(req, res);
            expect(movie.findById).toHaveBeenCalled();
        });
    });
});