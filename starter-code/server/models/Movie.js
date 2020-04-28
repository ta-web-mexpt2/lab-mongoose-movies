const mongoose = require("mongoose");
const { Schema } = mongoose;

//Iteration #4: The movie model
const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, "Add movie title"],
        validate: {
            message: "the movie already exists",
            validator: async (title) => {
                const items = await mongoose.models["Movie"].count({ title });
                return items < 1;
            },
        },
    },
    genre: {
        type: String,
        required: [true, "Add movie genre"]
    },
    plot: {
        type: String,
        required: [true, "Add movie plot"]
    },
    cast: [{
        type: Schema.Types.ObjectId,
        ref: "Celebrity",
    }],

});

module.exports = mongoose.model("Movie", movieSchema);
