const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

// Get
router.get('/', (req, res) => {
    Celebrity.find().then(celebrity => {
        res.status(200).json({ celebrity })
    })
})

// Create
router.post('/create', (req, res) => {
    Celebrity.create(req.body).then(celebrity => {
      res.status(201).json({ celebrity })
    })
    .catch(err => res.status(400).json({ err }))
});

  module.exports = router;