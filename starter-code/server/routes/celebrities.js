const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity");


// Iteration #2: Adding New Celebrities
router.post("/create", (req, res) => {
    Celebrity.create(req.body)
        .then(celebrity => {
            res.status(200).json({ "Congratulations, the celebrity was created!": celebrity });
        })
        .catch((err) => res.status(500).json(err));
});


// Iteration #3: Listing Our Celebrities
router.get("/", (req, res) => {
    Celebrity.find()
        .then(celebrities => {
            res.status(200).json({ celebrities });
        })
        .catch((err) => res.status(500).json(err));
})


//BONUS: The Celebrity Details - Getting an specific movie by ID 
router.get("/:id", (req, res) => {
    const { id } = req.params;
    Celebrity.findById(id)
        .then(celebrity => {
            res.status(200).json({ celebrity });
        })
        .catch((err) => res.status(500).json(err));
})


//BONUS: Deleting Celebrities
router.delete("/:id/delete", (req, res) => {
    const { id } = req.params;
    Celebrity.findByIdAndRemove(id)
        .then(celebrity => {
            res.status(200).json({ "Celebrity was deleted": celebrity });
        })
        .catch(err => res.status(500).json(err));
})


//BONUS: Editing Celebrities
router.patch("/:id", (req, res) => {
    const { id } = req.params;
    Celebrity.findByIdAndUpdate(id, req.body, { new: true })
        .then(celebrity => {
            res.status(200).json({ "Celebrity has been updated": celebrity });
        })
        .catch(err => res.status(500).json(err));
})


module.exports = router;

