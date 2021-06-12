
const express = require ("express");
const celebrity = require("../models/Celebrity");
const router = express.Router();

//C.R.U.D
//crate a celebrity
router.post("/celebrities/create",(req,res)=>{
    celebrity.create(req.body)
    .then(celeb => {
        res.status(200).json({ celeb, msj: "congratulations the celebrity was created" })
    })
    .catch(error =>{
        res.status(500).json({msj: "something wen wrong", error})
    })
})

//listing celebrities

router.get("/celebrities",(req,res,next)=>{
    celebrity.find()
    .then(allcelebs=>{
        res.status(200).json({allcelebs})
    })
    .catch (error => {
        res.status(500).json({msj:"something wen wrongl",error})
    })
})

module.exports = router;