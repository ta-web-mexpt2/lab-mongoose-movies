// 1. IMPORTACIONES
const mongoose = require("mongoose");
const {Schema} = mongoose;

//2. SCHEMA
const movieSchema = new Schema({
    title: String,
    genre: String, 
    plot: String, 
    cast:[{ type: Schema.Types.ObjectId, ref: "celebrities"}]
},{
    timeStamps:{
      createdAt: `createdAt`,
      updatedAt: `updatedAt`
    }
});

//3. MODELO
const Movie = mongoose.model(`Movie`, moovieSchema)

//4. EXPORTACIÓN 
module.exports = Movie;
