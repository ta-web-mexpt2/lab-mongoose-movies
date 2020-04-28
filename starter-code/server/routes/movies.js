const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie");


// Iteration #5: Adding New Movies
router.post("/create", (req, res) => {
    Movie.create(req.body)
        .then(movie => {
            res.status(200).json({ "Congratulations, the movie was created!": movie });
        })
        .catch((err) => res.status(500).json(err));
});


// Iteration #6: Listing Our Movies
router.get("/", (req, res) => {
    Movie.find()
        .populate({
            path: 'cast',
            select: 'name -_id'
        })
        .then(movies => {
            res.status(200).json({ movies });
        })
        .catch((err) => res.status(500).json(err));
})


//Iteration #7: The Movie Details - Getting an specific movie by ID 
router.get("/:id", (req, res) => {
    const { id } = req.params;
    Movie.findById(id)
        .populate({
            path: 'cast'
        })
        .then(movie => {
            res.status(200).json({ movie });
        })
        .catch((err) => res.status(500).json(err));
})


//Iteration #8: Deleting Movies
router.post("/:id/delete", (req, res) => {
    const { id } = req.params;
    Movie.findByIdAndRemove(id)
        .then(movie => {
            res.status(200).json({ "The movie has been deleted": movie });
        })
        .catch((err) => res.status(500).json(err));
})


//Iteration #9: Editing Movies
router.patch("/:id", (req, res) => {
    const { id } = req.params;
    Movie.findByIdAndUpdate(id, req.body, { new: true })
        .then(movie => {
            res.status(200).json({ "The movie has been updated": movie });
        })
        .catch((err) => res.status(500).json(err));
})

module.exports = router;
