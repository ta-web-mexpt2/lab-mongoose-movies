const express = require('express');
const Celebrity = require('../models/Celebrity');
const router = express.Router();

//Iteration #2: Adding New Celebrities
router.post('/create', (req, res, next) => {
    Celebrity.create(req.body)
    .then(newCelebrity => res.status(200).json({msj: "Congratulations the celebrity was created!", newCelebrity}))
    .catch(error => res.status(204).json({msj: "There's an error:", error}))
})

//Iteration #3: Listing Our Celebrities
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(celebrities => res.status(200).json({celebrities}))
    .catch(error => res.status(204).json({msj: "There's an error:", error}))
})

//BONUS Update existing celebrities
router.patch('/update/:id', (req, res, next) => {
    const {id} = req.params
    Celebrity.findByIdAndUpdate(id, req.body, {new: true})
    .then(updated => res.status(200).json({updated}))
    .catch(error => res.status(500).json({msj: "Something Failed!", error}))
})

//BONUS Delete celebrities
router.delete('/delete/:id', (req, res, next) => {
    const {id} = req.params
    Celebrity.findByIdAndDelete(id)
    .then(() => res.status(200).json({msj: "Celebrity has been deleted successfully"}))
    .catch(error => res.status(400).json(error))
})

module.exports = router;