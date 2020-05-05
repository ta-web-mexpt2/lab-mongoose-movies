//Iteration #4: The movie model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
  },
  genre: {
    type: String,
  },
  plot: {
    type: String,
  },
  cast: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model("Movie", movieSchema);
