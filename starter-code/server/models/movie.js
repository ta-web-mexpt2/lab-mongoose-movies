const mongoose = require("mongoose");
const { model } = require("./movie");
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title: String,
    genre: String,
    plot: String,
    cast: String, enum: []
})

const Movie = mongoose.model("Movie", movieSchema)

model.exports = Movie;