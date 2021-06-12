const mongoose = require("mongoose")

const {Schema,model} = mongoose;
//iteracion 1
const celebSchema = new Schema({
  name:{
      type: String,
      requires: [true,"Nombre de la celebridad"],
        unique: [true,"La celebridad ya existe"]
  },
  occupation:{
    type: String,
    
  },
  catchPhrase:{
    type: String,
    requires: [true,"Agregar frase celebre"],
    unique: [true,"La frase ya existe"]

  }

},
{timestamps:true})

//importantisimo, siempre hay que exportar
module.exports = model("Celebrity", celebSchema)