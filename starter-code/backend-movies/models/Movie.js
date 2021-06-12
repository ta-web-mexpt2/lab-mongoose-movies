const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const movieSchema =  new Schema({
    title:{
      type: String,
      required : true
    },
    genre:{
        type: String,
        required : true
    },
    plot: {
        type: String,
        required : true
    },
    _cast:[{
        type: Schema.Types.ObjectId,
        ref: "Celeb"}]
  },
  {timestamps:true})

  module.exports = model ("movie", movieSchema);