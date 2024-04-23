const Movies = require("../models/movies");

module.exports = {
    getMoviesService: async () => {
        const movies = await Movies.find();
        return movies;
    }
};