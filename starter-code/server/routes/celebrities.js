const express = require('express');
const celebrity = require('../models/celebrity');
const router = express.Router();
// importar lo importante
const celebritiesSchema = require ('../models/celebrity');





//Editar (Update)
//post  quiere todas las llaves
//patch solo quiere una para poder trabajar
router.patch('/:id',veriToken,checkRole(['celebrity']), (req,res,next)=>{
 const {id} = req.params;

 celebrity.findByIdAndUpdate(id, req.body,{new:true})
    .then((celebrity)=>{
        res.status(200).json({result:cliente})
    })
    .catch((error)=> {
        res.status(400).json({msg:"Algo salio mal", error})
    })
});

router.get('/:id',veriToken,checkRole(['celebrity']), (req,res,next)=>{
    const {id} = req.params;
   
    Cliente.findById(id)
       .then((celebrity)=>{
           res.status(200).json({result:cliente})
       })
       .catch((error)=> {
           res.status(400).json({msg:"Algo salio mal", error})
       })
   });
module.exports = router;
