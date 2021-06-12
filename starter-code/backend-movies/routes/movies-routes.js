const express = require('express');
const Movies = require('../models/Movies');
const router = express.Router();

//Iteracion 5
router.post('/movies/create', (req,res)=>{
Movies.create(req.body) 
.then(movies=>{
res.status(201).json({movies});
})
.catch(error=>{
    res.status(500).json({msj:"Algo salio mal",error})
})
})

//Iteracion 6
router.get('/movies', function(req,res,next){
    Movies.find()
    
    .then(allMovies=> res.status(200).json({allMovies}))
    .catch(error=>{
        res.status(500).json({msj:"Algo salio mal",error})
    })
});

//Iteracion 7
router.get("/movies/:id",(req,res,next)=>{
    const { id } = req.params
    Movies.findById(id)
    .populate("_cast")
    .then(
        movieDetail=>{
            res.status(200).json(movieDetail)
        }
    )
    .catch(error=>{
        res.status(500).json({msj:"Algo salio mal",error})
    })
})

//Iteracion 8
router.delete('/movies/:id/delete', (req,res,next) => {
    const{id} = req.params
    Movies.findByIdAndRemove(id)
    .then(()=> res.status(200).json({msj: "Se elimino correctamente"}))
    .catch(error=>{
        res.status(500).json({msj:"Algo salio mal",error})
    })
})

//Iteracion 9
router.patch("/movies/:id",(req,res,next)=>{
    const { id } = req.params
    Movies.findByIdAndUpdate(id,req.body, {new:true})
    .then(
        newMovie=>{
            res.status(200).json(newMovie)
        }
    )
    .catch(error=>{
        res.status(00).json({msj:"Algo salio mal",error})
    })
})

module.exports = router;
