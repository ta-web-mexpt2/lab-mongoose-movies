const express = require('express');
const router  = express.Router();

const Movie = require("./models/movies")


// no afecta nada esta carpeta, es solo para ver
//como se hizo el .post y .get



  
  router.post("/movies", (req, res)=>{
    Movie.create(req.body)
    .then( ()=>{res.status(200).json("congratulations the movie was created"    )   })
    .catch(   ()=>{  res.status(500).json("error, try again")        }      )
  }    )

  router.get("/movies", (req, res) => {
    Movie.find()
    .then( (movies)=>{res.status(200).json(  {movies}  )   })
    .catch( ()=>{res.status(500).json("error, try again")})
  })

  module.exports = router
  