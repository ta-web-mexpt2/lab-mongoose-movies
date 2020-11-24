const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js')

router.post('/celebrities/create', (req, res, next) => {
    //Genero las variables
    const { name, occupation, catchPhrase } = req.body;

    //La instancia del nuevo libro
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase });

    //Guardado en base de datos
    newCelebrity.save()
        .then((celebrity) => {
            res.json({ error: 200, msg: 'congratulations, the celebrity was created' });
        })
        .catch((error) => {
            res.json({ error: 500 });
        })
});

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            res.json({ error: 200, allCelebrities: celebrities });
        })
        .catch(error => {
            res.json({ error: 500 });
        })
});