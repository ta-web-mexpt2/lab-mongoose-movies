const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.get("/celebrities", (req, res) => {
  Celebrity.find().then((celebrities) => {
    res.status(200).json({ celebrities });
  });
});

//Iteration #2: Adding New Celebrities

router.post("/celebrities/create", (req, res) => {
  //   Celebrity.create(req.body)
  //     .then((celebrity) => {
  //       res
  //         .status(200)
  //         .json({ "congratulations, the celebrity was created": celebrity });
  //     })
  //     .catch((err) => res.status(500).json(err));
  res.json(req.body);
});

module.exports = router;
