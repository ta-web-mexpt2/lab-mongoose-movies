const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity")


router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(celebrities =>{
            res.status(200).json(celebrities);
        })
        .catch(e=>{
            console.log(e);
        });
});

router.post('/celebrities/create', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    const newCelebrity = new Celebrity({name, occupation, catchPhrase});
    newCelebrity.save()
        .then(()=>{
            res.status(200).json({message:"Congratulations the celebrity was created."});
            console.log("New celbrity added");
        })
        .catch(e=>{
            res.status(500);
            console.log(e);
        });

});

module.exports = router;
