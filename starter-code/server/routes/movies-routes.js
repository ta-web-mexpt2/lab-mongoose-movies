const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

// Get route

router.get("/", (req, res) => {
  Movie.find().then(movies => {
    res.status(200).json({ movies })
  })
  .catch((err) => res.status(500).json(err));
});

// Post route

router.post("/create", (req, res) => {
  Movie.create(req.body)
  .then(movie => {
    res.status(200).json({ movie });
  })
  .catch((err) => res.status(500).json(err));
});

// Get movies by ID 

router.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  Movie.findById(id, req.body, { new: true})
   .then(() => {
    res.status(200).json({message: "Movie was found."});
  })
  .catch((err) => res.status(500).json(err));
 });

 // Delete movies

 router.delete("/movies/:id/delete", (req, res) => {
  const { id } = req.params;
  Movie.findByIdAndRemove(id).then(movie => {
    res.status(200).json({message: 'Movie was deleted'})
  })
})

// Update movies 

router.patch("/movies/:id", (req, res) => {
  const { id } = req.params;
  Movie.findByIdAndUpdate(id, req.body, { new: true})
   .then((movie) => {
   res.status(200).json({message: 'Movie was updated'});
  })
 });

module.exports = router;