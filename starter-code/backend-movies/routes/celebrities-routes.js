const express = require ("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

//iteracion 2
router.post('/celebrities/create', (req,res)=>{
    Celebrity.create(req.body) //con el archivo abierto, al escribir la palabra imporat el arhivo
    //es una promesa, por lo tanto .then.catch
    .then(celebrity=>{
    res.status(200).json(`"Congratulations the celebrity was created ${celebrity}"`);
    })
    .catch(error=>{
        res.status(500).json({msj:"Algo salio mal, intente de nuevo",error})
    })
    })

    //iteracion 3
router.get('/', function(req, res, next)/* => */ {
    //res.json({ title: 'Express' });
    Celebrity.find()
    //el populate sirve para saber que contiene el id 
    .then(celebrity=> res.status(200).json({celebrity}))
    .catch(error=>{
        res.status(500).json({msj:"Algo salio mal",error})
    })
  
  })







module.exports= router;
