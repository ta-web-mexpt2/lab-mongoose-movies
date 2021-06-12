const express = require ("express");
const { populate } = require("../models/Movie");
const Movie = require("../models/Movie");
const router = express.Router();

//Create movie
router.post("/movies/create	",(req,res)=>{
Movie.create(req.body)
.then(newmovie =>{
    res.status(201).json({newmovie})
})
.catch(error=>{
    res.status(400).json({msj:"something went wrong", error})
})
})


//all movies
router.get("/movies",(req, res,next)=>{
    Movie.find()
    .populate("_cast")
      .then(allMovies=>{
        res.status(200).json({ allMovies })
      })
      .catch(error=>{
          res.status(400).json({msj:"something went wrong",error})
      })
  })

  //find single movie
  router.get("/movies/:id",(req, res,next)=>{
      const { id } = req.params
    Movie.findById(id)
    .pouplate("_cast")
      .then(film=>{
        res.status(200).json({ film })
      })
      .catch(error=>{
          res.status(400).json({msj:"something went wrong",error})
      })
  })

  //delete movie
  router.delete("/movies/:id/delete", (req,res,next)=> {
    const {id} = req.params;
    Movie.findByIdAndDelete({ id })
    .then(movie => {
        res.status(200).json({msj:"movie deleted"})
    })
    .catch(error => {
        res.status(400).json({msj:"something wen wrong", error})
    })
})

// update movie
router.patch("/movies/:id", (req,res,next)=> {
    const {id} = req.params;
    Movie.findByIdAndUpdate(id, req.body, {new:true})
    .then(newMovie => {
      res.status(200).json({newMovie})
    })
    .catch(error => {
      res.status(400).json({msj:"something went wrong",error})
    })
})


module.exports = router;
  