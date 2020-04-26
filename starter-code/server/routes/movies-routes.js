const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

router.get("/", (req, res) => {
  Movie.find()
    .populate("cast")
    .then((movies) => {
      res.status(200).json({ movies });
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Movie.findById(id, req.body)
    .populate("cast")
    .then((movie) => {
      res.status(200).json({ movie });
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/create", (req, res) => {
  Movie.create(req.body)
    .then((movies) => {
      res.status(200).json({ movies });
    })
    .catch((err) => res.status(500).json(err));
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  Movie.findByIdAndUpdate(id, req.body, { new: true })
    .then((movie) => {
      res.status(200).json({ movie });
    })
    .catch((err) => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Movie.findByIdAndRemove(id)
    .then((movie) => {
      res.status(200).json({ movie });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
