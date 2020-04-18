const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema ( {
  title: {
    type: String,
  },
  genre: {
    type: String,
  },
  plot: {
    type: String,
  },
  cast: {
      // type: String,
      type:
      [Schema.Types.ObjectId],
  }
})

module.exports = mongoose.model("Movie", movieSchema);