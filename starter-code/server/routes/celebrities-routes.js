const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.post('/celebrities/create', (req,res,next) => {
    // Obteniendo las variables a ingresa a la BBDD
    const {name, occupation, catchPhrase} = req.body;
    //uso las variables para generar el nuevo data entry
    const createdCelebrity = new Celebrity({name,occupation,catchPhrase })

    // Una vez creado... lo guardo
    createdCelebrity.save()
        .then(() => {
            res.status(200).json({message: 'congratulations, we entered the new celebrity'});
        })
        .catch((err) => {
            res.status(204).json({error: "try again, there was an error"});
            console.log(err)
        })
});

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            res.status(200).json({celebrities})
        })
        .catch(err => {
            res.status(204);
            console.log(err)
        })
})

module.exports = router;