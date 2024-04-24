const moviesService = require('../services/moviesService');
const { getMoviesService } = require('../services/moviesService');

module.exports = {
    getAllMovies: async (req, res) => {
        const movie = await getMoviesService();
        res.status(200).send(movie)
    },

    createMovie: async (req, res) => {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        const newMovie = await moviesService.createMovie({ title, year, director, duration, genre, rate, poster });
        res.status(201).json(newMovie);
    }
}

