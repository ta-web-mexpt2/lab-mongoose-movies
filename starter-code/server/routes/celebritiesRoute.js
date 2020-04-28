const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

// Create
router.post('/', (req, res) => {
    Celebrity.create(req.body).then(celebrity => {
      res.status(201).json({ celebrity })
    })
    .catch(err => res.status(400).json({ err }))
});

  module.exports = router;