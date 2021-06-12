const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const movieSchema = new Schema({
    title:{
        type:String,
        require:[true,"Necesitas tener un titulo"],
        unique:[true,"La pelicula ya existe"]
    },
    genre:{
        type:String,
        require:[true,"La pelicula necesita tener un genero"]
    },
    plot:{
        type:String,
        min:[50,"Minimo 50 caracteres"],
        min:[150,"Maximo 150 caracteres"]
    },
    _cast:{
        type: [Schema.Types.ObjectId],
        ref:"Celebrity",
        required: [true,"Debes agregar un propietario"]
    }
},{timestamps:true});

module.exports = model("Movie", movieSchema);