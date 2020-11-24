const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js')

router.post('/movies/create', (req, res, next) => {
    //Genero las variables
    const { title, genre, plot, cast } = req.body;

    //La instancia del nuevo libro
    const newMovie = new Movie({ title, genre, plot, cast });

    //Guardado en base de datos
    newMovie.save()
        .then((movie) => {
            res.json({ error: 200, msg: 'congratulations, the movie was created' });
        })
        .catch((error) => {
            res.json({ error: 500 });
        })
});

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(movies => {
            res.json({ error: 200, allMovies: movies });
        })
        .catch(error => {
            res.json({ error: 500 });
        })
});