const {Schema, model} = require ("mongoose");

const celebritieSchema = new Schema( 
        { 
            name:{
                type: String,
                required:[true,"Debes agregar un nombre"]
               },
        
               occupation:{
                   type:Number,
                   required:[true,"Debes agregar el año en que empezaron a ser nuestros clientes"]
                },
        
                catchPhrase:{
                type:Schema.Types.ObjectId,
                ref:"Pedido"
               }
            },
        {timestamps:true}
        
        );
        
        module.exports = model("Celebrity",celebritiesSchema)