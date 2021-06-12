const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const celebritySchema = new Schema({
    name:{
        type:String,
        require:[true,"Necesitas agregar un nombre"],
    },
    occupation:{
        type:String,
        default:"Unknown"
    },
    catchPhrase:{
        type:String,
        min:[50,"Minimo 50 caracteres"],
        min:[150,"Maximo 150 caracteres"],
        require:[true,"Necesitas agregar una catch phrase"]
    }
},{timestamps:true});

module.exports = model("Celebrity", celebritySchema);