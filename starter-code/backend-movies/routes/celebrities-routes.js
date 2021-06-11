const express = require("express");
const router = express.Router();
const Celeb = require("../models/celebrity")

router.get("/", (req,res,next)=>{
    Celeb.find()
    .then(allCelebs => {
      res.status(200).json({allCelebs})
    })
    .catch(error => {
      res.status(400).json({msj:"Could not find Celebs",error})
    })
  })

router.post("/create", (req,res,next)=>{
  Celeb.create(req.body)
  .then(celeb => {
    res.status(200).json({msj:"Congrats, celeb was created", celeb})
  })
  .catch(error => {
    res.status(500).json({msj:"Try again",error})
  })
})

module.exports = router;
