const { Router } = require("express");
const movieController = require("../controllers/movieController")

const movieRouter = Router();

movieRouter.get("/", movieController.getAllMovies);

movieRouter.post("/", movieController.createMovie);

module.exports = movieRouter;