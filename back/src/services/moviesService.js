const { createMovie } = require("../controllers/movieController");
const Movie = require("../models/movies");
const Movies = require("../models/movies");

module.exports = {
    getMoviesService: async () => {

        try {
            const movies = await Movies.find();
            return movies;
            
        } catch (error) {
            throw error.message;
        }
    },

    createMovie: async (movie) => {
        const newMovie = await Movie.create(movie);
        return newMovie;
    }
};