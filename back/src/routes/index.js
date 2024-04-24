const { Router } = require("express");
const moviesRouter = require("./moviesRouter");
const moviesService = require("../services/moviesService");
const movieController = require("../controllers/movieController");

const router = Router();

router.use("/movies", moviesRouter);

router.post("/movies", movieController.createMovie);

module.exports = router;