const mongoose = require("mongoose");
const { Schema } = mongoose;

const celbritySchema = new Schema({
  name: {
    type: String,
    required: true,
    validate: {
      message: "La celebridad ya existe",
      validator: async (name) => {
        const items = await mongoose.models["Celebrity"].count({ name });
        return items < 1;
      },
    },
  },
  occupation: {
    type: String,
  },
  catchPhrase: {
    type: String,
  },
});

module.exports = mongoose.model("Celebrity", celbritySchema);
