//Iteration #2: The celebrity model
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const celebritySchema = new Schema({
    name: {
        type: String,
        required: [true, "Make sure to add a name"],
        unique: [true, "The name already exists"]
    },
    occupation: {
        type: String,
        required: [true, "Make sure this field is entered"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Make sure this field is entered"],
        min: 1,
        max: 100,
        unique: [true, "This phrase already exists"]
    }
},{timestamps:true})

module.exports = model("Celebrity", celebritySchema)