var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const estacionSchema = new Schema({
    nombre: {type: String},
    telefono: {type: String},
    idAutoridad: {
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
    calleNumero: {type:String},
    filename: {type: String},
    path:{type: String},
    originalname:{type: String},
    mimetype:{type: String},
    size:{type: Number},
    elemeto1: [
        {
            type: Schema.ObjectId,
            ref: 'idPolitica'
        }
    ],
    elemento2: [
        {
            aspectos: [
                {
                    type: Schema.ObjectId,
                    ref: 'idAspectos'
                }
            ]
        },
        {
            riesgos: [
                {
                    type: Schema.ObjectId,
                    ref: 'idRiesgos'
                }
            ]
        }
    ]
});

module.exports = mongoose.model("EstacionServicio", estacionSchema);
