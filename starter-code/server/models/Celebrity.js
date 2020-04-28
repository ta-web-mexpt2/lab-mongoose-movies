const mongoose = require("mongoose");
const {Schema} = mongoose;

//Iteration #2: The celebrity model
const celebritySchema = new Schema ({
    name: {
        type: String,
        required: [true, "Name is mandatory!"], 
        unique: true,
    },
    occupation: {
        type: String,
        required: [true, "You must add occupation!"]
    }, 
    catchPhrase: {
        type: String,
        required: [true, "Missing catch phrase!"]
    }
})

module.exports = mongoose.model("Celebrity", celebritySchema);