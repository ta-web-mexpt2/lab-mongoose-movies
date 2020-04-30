const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.status(200).json({message:"estas listo para la accion"});
});

module.exports = router;
