const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

// Get route

router.get("/", (req, res) => {
  Celebrity.find().then(celebrities => {
    res.status(200).json({ celebrities })
  })
  .catch((err) => res.status(500).json(err));
});

// Post route

router.post("/create", (req, res) => {
  Celebrity.create(req.body)
  .then(celebrity => {
    res.status(200).json({message: "Congratulations the celebrity was created."});
  })
  .catch((err) => res.status(500).json(err));
});


module.exports = router;