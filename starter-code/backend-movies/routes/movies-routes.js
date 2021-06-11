const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

//Iteration #5: Adding New Movies
router.post('/create', (req, res, next) => {
    Movie.create(req.body)
    .then(newMovie => res.status(201).json({msj: "New movie was added successfully!", newMovie}))
    .catch(error => res.status(500).json({msj: "Something Failed!", error}))
})

//Iteration #6: Listing Our Movies
router.get('/', (req, res, next) => {
    Movie.find()
    .populate("_cast")
    .then(allMovies => res.status(200).json({allMovies}))
    .catch(error => res.status(500).json({msj: "Something Failed!", error}))
})

//Iteration #7: The Movie Details
router.get('/find/:id', (req, res, next) => {
    const {id} = req.params
    Movie.findById(id, req.body)
    .populate("_cast")
    .then(specificMovie => res.status(200).json({specificMovie}))
    .catch(error => res.status(500).json({msj: "Something Failed!", error}))
})

//Iteration #8: Deleting Movies
router.delete('/delete/:id', (req, res, next) => {
    const {id} = req.params
    Movie.findByIdAndDelete(id)
    .then(() => res.status(200).json({msj: "Movie has been deleted successfully"}))
    .catch(error => res.status(400).json(error))
})

//Iteration #9: Editing Movies
router.patch('/update/:id', (req, res, next) => {
    const {id} = req.params
    Movie.findByIdAndUpdate(id, req.body, {new: true})
    .then(updated => res.status(200).json({updated}))
    .catch(error => res.status(500).json({msj: "Something Failed!", error}))
})

module.exports = router;