const express = require('express');
const router  = express.Router();
const Movie = require("../models/movie")
/* GET home page */
router.get('/movies', (req, res, next) => {
  Movie.find()
    .populate("cast")
    .then(movies => {
      res.status(200).json(movies);
    })
    .catch(e=>{
      console.log(e);
    });
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findOne({"_id": req.params.id})
    .populate("cast")
    .then(movie => {
      res.status(200).json(movie);
    })
    .catch(e=>{
      console.log(e);
    });
});

router.post('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then((movie) => {
      res.status(200).json({message: `La pelicula ${movie.title} fue removida`});
    })
    .catch(e=>{
      console.log(e);
    });
});

router.post('/movies/:id', (req, res, next) => {
  const {title, genre, plot, cast} = req.body;
  Movie.findByIdAndUpdate(req.params.id, {title, genre, plot, cast})
    .then((movie) => {
      res.status(200).json({message: `La pelicula ${movie.title} fue actualizada`});
    })
    .catch(e=>{
      console.log(e);
    });
});

router.post('/movies/create', (req, res, next) => {
  const {title, genre, plot, cast} = req.body;
    const newMovie = new Movie({title, genre, plot, cast});
    newMovie.save()
        .then(()=>{
            res.status(200).json({message:"Congratulations the movie was created."});
            console.log("New movie added");
        })
        .catch(e=>{
            res.status(500);
            console.log(e);
        });
});

module.exports = router;