const moviesController = (req, res) => {
    res.status(200).send("Estamos recibiendo información de las peliculas.");
};

module.exports = {
    moviesController,
}