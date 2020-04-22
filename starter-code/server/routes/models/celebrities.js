const mongoose = require("mongoose");
const {Schema} = mongoose;

const Celebrity = new Schema( {
    name: String,
    occupation: String,
    catchPhrase: String
}  )

module.exports = mongoose.model("celebrities", Celebrity) 