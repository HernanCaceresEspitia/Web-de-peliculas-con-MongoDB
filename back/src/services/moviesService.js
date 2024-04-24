const Movies = require("../models/movies");

module.exports = {
    getMoviesService: async () => {

        try {
            const movies = await Movies.find();
            return movies;
            
        } catch (error) {
            throw error.message;
        }
    }
};