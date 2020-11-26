const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// ITERATION 5: ADDING NEW MOVIES

router.post('/movies/create', (req, res, next) => {
    const {title, genre, plot, cast} = req.body;

    Movie.create({title, genre, plot, cast})
        .then(() => {
            res.status(200).json({msg: 'Congratulations, the new movie was created'})
        })
        .catch(err => {
            res.status(204).json({msg: 'Error creating the new moviee'});
            console.log(err);
        })
});


//ITERATION 6: LISTING OUR MOVIES

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(movies => {
            res.status(200).json(movies)
        })
        .catch(err => {
            res.status(204);
            console.log(err)
        })
})

//ITERATION 7: FINDING THE MOVIE DETAILS

router.get('/movies/:id', (req, res, next) => {
    Movie.findOne({'_id' : req.params.id})
        .populate('cast')
        .then(movie => {
            res.status(200).json(movie)
        })
        .catch(err => {
            res.status(204).json({msg: 'Failed to get sait movie'})
            console.log(err)
        })
});

// ITERATION 8: DELETING MOVIES

router.post('/movies/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
        .then((movie) => {
            res.status(200).json({msg:`The movie ${movie.title} has been removed from the database`})
        })
        .catch( err => {
            res.status(204).json({msg:'Error in removing'})
            console.log(err)
        })
})

// ITERATION 9: EDITING MOVIES

router.post('/movies/:id', (req, res, next) => {
    const {title, genre, plot, cast} = req.body;
    Movie.findByIdAndUpdate(req.params.id, {title, genre, plot, cast})
        .then(movie => {
            res.status(200).json({msg:`The movie ${movie.title} has been updated`})
        })
        .catch(err => {
            res.status(204).json({msg:'Error editing the movie'})
            console.log(err)
        })
})

module.exports = router;