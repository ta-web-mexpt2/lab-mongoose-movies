const express = require("express");
const router = express.Router();
const Movie = require("../models/movie")

router.get("/", (req,res,next)=>{
    Movie.find()
    .then(allMovies => {
      res.status(200).json({allMovies})
    })
    .catch(error => {
      res.status(400).json({msj:"Could not find Movies",error})
    })
  })

router.get("/:id", (req,res,next)=> {
    const movieId = req.params.id;
    Movie.findOne({_id:movieId})
    .populate('_cast')//Will this work?
    .then(movie => {
        res.status(200).json({movie})
    })
    .catch(error => {
        res.status(400).json({msj:"Could not find the movie",error})
    })
})

router.post("/create", (req,res,next)=>{
  Movie.create(req.body)
  .then(movie => {
    res.status(200).json({msj:"Congrats, movie was created", movie})
  })
  .catch(error => {
    res.status(500).json({msj:"Try again",error})
  })
})

router.delete("/:id/delete", (req,res,next)=> {
    const movieId = req.params.id;
    Movie.findByIdAndRemove({_id:movieId})
    .then(movie => {
        res.status(200).json({msj:"movie deleted succesfully"})
    })
    .catch(error => {
        res.status(400).json({msj:"Could not delete movie", error})
    })
})

router.patch("/:id/update", (req,res,next)=> {
    const movieId = req.params.id;
    Movie.findByIdAndUpdate(movieId, req.body, {new:true})
    .then(newMovie => {
      res.status(200).json({newMovie})
    })
    .catch(error => {
      res.status(400).json({msj:"Could not update",error})
    })
})

module.exports = router;
