var express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

//Crear el CRUD

//Post create
router.post("/",(req,res)=>{
    Movie.create(req.body)
    .then(movie=>{
      res.status(201).json({movie})
    })
    .catch(error=>{
      res.status(500).json({msj:"Algo salio mal",error})
    })
});

//get todos las peliculas
router.get("/",(req,res)=>{
    Movie.find()
    .populate("_cast")
    .then(allMovies=>{
        res.status(200).json({allMovies})
    })
    .catch(error=>{
        res.status(500).json({msj:"Algo salio mal",error})
    })
});

//get una pelicula por id
router.get("/movies/:id",(req,res)=>{
  const{id} = req.params;
  Movie.findById(id)
  .populate("_cast")
  .then(movie=>{
      res.status(200).json({movie})
  })
  .catch(error=>{
      res.status(500).json({msj:"Algo salio mal",error})
  })
});


//Patch edit movie
router.patch("/movies/:id",(req,res)=>{
    const{id} = req.params;
    Movie.findByIdAndUpdate(id, req.body, {new:true})
      .then(updatedMovie=>{
        res.status(200).json({updatedMovie})
      })
      .catch(error=>{
        res.status(500).json({msj:"Algo salio mal",error})
      })
});

//Delete movie
router.delete("/movies/:id/delete",(req,res)=>{
    const{id} = req.params;
    Movie.findByIdAndDelete(id)
      .then(updatedMovies=>{
        res.status(200).json({msj:"Pelicula eliminada",id})
      })
      .catch(error=>{
        res.status(500).json({msj:"Algo salio mal",error})
      })
});

module.exports = router;