const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js')


router.get("/celebrities/create", (req, res, next) => {
    res.render("celebrity-create");
})

router.post('/celebrities/create', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body
    const newCelebrity = new Celebrity({name, occupation, catchPhrase})

    newCelebrity.save()
    .then((Celebrity) => {
      res.redirect('/celebrities')
    })
    .catch((error) => {
      console.log(error)
    })      
})

router.get('/routes/celebrities', (req, res, next) => {
    Celebrity.findOne({_id: req.query.celebrity_id})
      .then((celebrity) => {
        res.render("Celebrity", {celebrity})
      })
      .catch((error) => {
        console.log(error)
      })
  })
