const { getMoviesService } = require('../services/moviesService');

module.exports = {
    getAllMovies: (req, res) => {
        const movie = getMoviesService();
        res.status(200).send(movie)
    }
}