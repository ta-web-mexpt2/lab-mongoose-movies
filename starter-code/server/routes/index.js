const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.status(200).json({message:"estas listo para la accion"});
});

//Agregar Celebrity
router.get('/celebrity/create', (req, res, next) => {
  res.render("celebrity-create");
});
router.post('/celebrity/create', (req, res, next) => {
  //Generadas las variables
  const {name,occupation,catchPhrase} = req.body;
  //La instancia del nuevo libro
  const newBook = new Celebrity({name,occupation,catchPhrase});

module.exports = router;
