var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const estacionSchema = new Schema({
    nombre:{type:String},
    telefono:{type:String},
    idAutoridad:{
        type: mongoose.Schema.ObjectId,
        ref:'idAuroridad'
    },
    idGerente: {
        type: Schema.ObjectId,
        ref:'idGerente'
    },
    idRepresentante: {
        type: Schema.ObjectId,
        ref:'idRepresentante'
    },
    cp:{

    },
    calleNumero:{type:String}
});

module.exports = mongoose.model("EstacionServicio", estacionSchema);