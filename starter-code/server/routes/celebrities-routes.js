const express = require('express');
const router  = express.Router();

const Celebrity = require("./models/celebrities")


// no afecta nada esta carpeta, es solo para ver
//como se hizo el .post y .get



  
  router.post("/celebrities", (req, res)=>{
    Celebrity.create(req.body)
    .then( ()=>{res.status(200).json("congratulations the celebrity was created"    )   })
    .catch(   ()=>{  res.status(500).json("error, try again")        }      )
  }    )

  router.get("/celebrities", (req, res) => {
    Celebrity.find()
    .then( (celebrities)=>{res.status(200).json(  {celebrities}  )   })
    .catch( ()=>{res.status(500).json("error, try again")})
  })

  module.exports = router
  