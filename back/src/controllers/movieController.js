const { getMoviesService } = require('../services/moviesService');

module.exports = {
    getAllMovies: async (req, res) => {
        const movie = await getMoviesService();
        res.status(200).send(movie)
    }
}