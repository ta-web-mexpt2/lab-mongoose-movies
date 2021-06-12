var express = require('express');
const Celebrity = require('../models/Celebrity');
const router = express.Router();

//Crear el CRUD
//Post create
router.post("/",(req,res)=>{
    Celebrity.create(req.body)
    .then(celebrity=>{
      res.status(201).json({msj:"Congratulations the celebrity was created",Celebrity})
    })
    .catch(error=>{
      res.status(500).json({msj:"Algo salio mal",error})
    })
});

//get todos los celebrities
router.get("/",(req,res)=>{
    Celebrity.find()
    .then(allCelebrities=>{
        res.status(200).json({allCelebrities})
    })
    .catch(error=>{
        res.status(500).json({msj:"Algo salio mal",error})
    })
});

module.exports = router;