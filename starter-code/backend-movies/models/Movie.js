//Iteration #4: The movie model
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const movieSchema = new Schema ({
    title: {
        type: String,
        unique: [true, "This move is already on our Databa"],
        required: [true, "Make sure to add a title"]
    },
    genre: {
        type: String,
        required: [true, "Make sure to add a Genre"]
    },
    plot: String,
    //REFERENCE
    _cast: [{
        type: Schema.Types.ObjectId,
        ref: "Celebrity",
        required: [true, "You must add a casting"]
    }]
},{timestamps: true})

module.exports = model("Movie", movieSchema)