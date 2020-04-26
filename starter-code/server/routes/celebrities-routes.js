const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity");

router.get("/", (req, res) => {
  Celebrity.find()
    .then((celebrities) => {
      res.status(200).json({ celebrities });
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/create", (req, res) => {
  Celebrity.create(req.body)
    .then((celebrity) => {
      res.status(200).json({ celebrity });
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
