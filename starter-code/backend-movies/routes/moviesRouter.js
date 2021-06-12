const express = require('express');
const { request } = require('../app');
const Movies = require('../models/Movies');
const router = express.Router();


router.post('/movies/create',(req,res)=>{
    Movies.create(req.body)
    .then(movies=>{
        res.status(200).json({movies})
    })
    .catch(error => res.status(500).json(error));
})

router.get('/movies',(req,res,next)=>{
    Movies.find()
    
    .then(movies=> res.status(201).json({movies}))
    .catch(error => res.status(500).json(error))
})

router.get("/movies/:id",(req,res,next)=>{
    const {id}=req.params
    Movies.findById(id)
    .populate("_cast")
    .then(movies =>{
        res.status(201).json({movies})
    })
    .catch(error => res.status(500).json(error))
} )

router.delete('/movies/:id/delete', (req, res, next) => {
    const {id} = req.params
    Movies.findByIdAndRemove(id)
    .then(() => res.status(200).json({msj: "Se ha eliminado correctamente"}))
    .catch(error => res.status(500).json(error))
})

router.patch("/movies/:id",(req,res,next)=>{
    const {id}=req.params
    findByIdAndUpdate(id,req.body,{new:true})
    .then(newMovie =>{
        res.status(201).json(newMovie)
    })
    .catch(error => res.status(400).json(error))
} )

module.exports = router;