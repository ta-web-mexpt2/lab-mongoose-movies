const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movies");

/* GET home page */
router.get("/", (req, res, next) => {
  res.status(200).json({ message: "estas listo para la accion" });
});

//Iteration #2: Adding New Celebrities
router.post("/celebrities/create", (req, res) => {
  Celebrity.create(req.body)
    .then((celebrity) => {
      res
        .status(200)
        .json({ "congratulations, the celebrity was created": celebrity });
    })
    .catch((err) => res.status(500).json(err));
});

//Iteration #3: Listing Our Celebrities
router.get("/celebrities", (req, res) => {
  Celebrity.find().then((celebrities) => {
    res
      .status(200)
      .json({ celebrities })
      .catch((err) => res.status(500).json(err));
  });
});

//Iteration #5: Adding New Movies
router.post("/movies/create", (req, res) => {
  Movie.create(req.body)
    .then((movie) => {
      res.status(200).json({ "congratulations, the movie was created": movie });
    })
    .catch((err) => res.status(500).json(err));
});

//Iteration #6: Listing Our Movies
router.get("/movies", (req, res) => {
  Movie.find().then((movies) => {
    res
      .status(200)
      .json({ movies })
      .catch((err) => res.status(500).json(err));
  });
});

module.exports = router;
