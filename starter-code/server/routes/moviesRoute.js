const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Get
router.get('/', (req, res) => {
    Movie.find().populate('cast').then(movies => {
        res.status(200).json({ movies })
    })
})

// Create
router.post('/create', (req, res) => {
    Movie.create(req.body).then(movie => {
      res.status(201).json({ movie })
    })
    .catch(err => res.status(400).json({ err }))
});

  module.exports = router;