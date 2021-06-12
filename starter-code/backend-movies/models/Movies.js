const mongoose = require("mongoose")

const {Schema,model} = mongoose;

//Iteracion 4
const movieSchema = new Schema({
  title:{
      type: String,
      requires: [true,"Nombre de la pelicula"],
        unique: [true,"La pelicula ya existe"]
  },
  genre:{
    type: String,
    
  },
  plot:{
    type: String,
    minlength:50,
    maxlength:140,
    
  },
  catchPhrase:{
    type: String,
    requires: [true,"Agregar frase celebre"],
    unique: [true,"La frase ya existe"]

  },

  _cast:{
    type: Schema.Types.ObjectId, //es propio de mongoose
    ref: "Celebrity",//colocamos el primer valor del export del arhivo User.js
    Required: [true, "Debes agregar una celebridad"],
}
},{timestamps:true});

//importantisimo, siempre hay que exportar
module.exports = model("Movie", movieSchema)