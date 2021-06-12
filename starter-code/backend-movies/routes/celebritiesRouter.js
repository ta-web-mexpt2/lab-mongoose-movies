const express = require ("express");
const router = express.Router();
const Celebrities = require("../models/Celebrities");


router.get("/",(req,res,next)=>{
    Celebrities.find()
    .then(allCelebrities=>{
        res.status(201).json({allCelebrities})
    })
    .catch(error=>{
        res.status(500).json({msj:"no se pudo conectar!",error})
    })
})


router.post('/celebrities/create',(req,res)=>{
    Celebrities.create(req.body)
    .then(celebrities =>{
        res.status(201).json({celebrities})
    })
    .catch(error => res.status(500).json(error))
});


router.get('/celebrities',function(req,res,next){
    Celebrities.find()
    .then(celebrities => res.status(201).json({celebrities}))
    .catch(error => res.status(500).json(error))
});


module.exports = router;