const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    validate: {
      message: "La pelicula ya existe",
      validator: async (title) => {
        const items = await mongoose.models["Movie"].count({ title });
        return items < 1;
      },
    },
  },
  genre: {
    type: String,
  },
  plot: {
    type: String,
  },
  cast: [{ type: Schema.Types.ObjectId, ref: "Celebrity" }],
});

module.exports = mongoose.model("Movie", movieSchema);
