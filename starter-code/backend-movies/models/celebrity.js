const mongoose = require("mongoose")
const {Schema, model} = mongoose;

const celebritySchema = new Schema({
  name:{
    type: String,
    unique:[true, "This celebrity already exist"]
  },
  occupation:String,
  catchPhrase:String
}, {timestamps: true});

const Celeb = mongoose.model('Celeb', celebritySchema);
module.exports = Celeb;
