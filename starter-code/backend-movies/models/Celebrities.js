const mongoose = require("mongoose")

const {Schema,model} = mongoose;

const celebritiesSchema = new Schema({
    name: {
        type:String,
    required:[true, "es necesario un nombre"],
    unique: [true, "el nombre ya existe"]
    },
    ocuppation: {
       type:String,
       required:[true,"es necesario ingresar ocupacion"]
    },
    catchPhrase: {
        type:String,
        minlenght:20,
        maxlenght:100,
    }
},{timestamps:true});

module.exports = model("Celebrities",celebritiesSchema)