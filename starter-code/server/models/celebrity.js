const mongoose = require("mongoose");
const { model } = require("./celebrity");
const Schema = mongoose.Schema;

const celebritySchema = new Schema ({
    name: String,
    occupation: String,
    catchPhrase: String
})

const Celebrity = mongoose.model("Celebrity", celebritySchema)

model.exports = Celebrity;