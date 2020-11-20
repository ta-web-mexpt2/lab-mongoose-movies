const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js')


router.get("/movies/create", (req, res, next) => {
    res.render("movies-create");
})

router.post('/movies/create', (req, res, next) => {
    const { title, genre, plot, cast } = req.body
    const newMovie = new Movie({title, genre, plot, cast})

    newMovie.save()
    .then((Movie) => {
      res.redirect('/movie')
    })
    .catch((error) => {
      console.log(error)
    })      
})

router.get('/routes/movies', (req, res, next) => {
    Movie.findOne({_id: req.query.movie_id})
      .then((movie) => {
        res.render("Celebrity", {movie})
      })
      .catch((error) => {
        console.log(error)
      })
  })

  router.get("/movies/:id", (req, res, next) => {
    const movieId = req.params.id;
  //REGEX
    if (!movie) {
      return res.status(200).render('not-found');
    }
  
  Movie.findOne({_id: movieId})
  .populate("cast")
  .then(movie => {
    if (!movie) {
      return res.status(200).removeListener("not-found")
    }
    res.render('movie-detail', { book });
    })
      .catch(next)
  })