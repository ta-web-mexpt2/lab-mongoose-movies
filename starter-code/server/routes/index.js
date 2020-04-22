const express = require('express');
const router  = express.Router();

const Celebrity = require("./models/celebrities")
const Movie = require("./models/movies")
/* GET home page */
router.get('/', (req, res, next) => {
  res.status(200).json({message:"estas listo para la accion"});
});

// RUTA DE MOVIES:ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Movie.findById(id, req.body)
      .populate("cast")
      .then((movie) => {
            res.status(200).json({ movie });  })
      .catch((err) => res.status(500).json(err));
});

// DELETE MOVIE ROUTE 
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Movie.findByIdAndRemove(id)
    .then((movie) => {
      res.status(200).json({ movie });
    })
    .catch((err) => res.status(400).json(err));
});

// UPDATE MOV ROUTE
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  Movie.findByIdAndUpdate(id, req.body, { new: true })
    .then(    (movie) => {  res.status(200).json({ movie });  })
    .catch(   (err) => res.status(400).json(err));     });



//CELEBRITY
router.post("/celebrities", (req, res)=>{
  Celebrity.create(req.body)
  .then( ()=>{res.status(200).json("congratulations the celebrity was created"    )   })
  .catch(   ()=>{  res.status(500).json("error, try again")        }      )
}    )

router.get("/celebrities", (req, res) => {
  Celebrity.find()
  .then( (celebrities)=>{res.status(200).json(  {celebrities}  )   })
  .catch( ()=>{res.status(500).json("error, try again") })
})

//MOVIE
  
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











module.exports = router;
