const mongoose = require("mongoose")

const {Schema,model} = mongoose;

const moviesSchema = new Schema({
    title: {
        type:String,
    required:[true, "es necesario un nombre de la pelicula"],
    unique: [true, "el nombre ya existe"]
    },
    genre: {
       type:String,
       required:[true,"es necesario ingresar un genero"]
    },
    plot: {
        type:String,
        minlenght:50,
        maxlenght:150,
    },
    _cast:{
        type: Schema.Types.ObjectId,
        ref: "Celebrity",
        required: [true,"Agrega una celebridad"]
    }
},{timestamps:true});

module.exports = model("Celebrities",moviesSchema)