const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const celebSchema =  new Schema({
    name:{
      type: String,
      unique:[true,"The name must be unique"]
    },
    ocupation:{
        type:String,
        default:"Select One",
        enum:["Singer","Artist","Actor","Comedian", "Unknown"]
    },
    catchPhrase: {
        type: String,
        minlength: [5],
        maxlength: [140]
    }
  },
  {timestamps:true})

  module.exports = model ("celebrity",celebSchema);