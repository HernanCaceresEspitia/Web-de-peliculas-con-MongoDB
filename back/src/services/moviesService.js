const Movies = require('../Extra/classMovie')

module.exports = {
    getMoviesService: async () => {
        const movies = await Movies.find();
        return movies;
    }
};