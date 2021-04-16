var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const estacionSchema = new Schema({
    nombre: {type: String},
    correo: { type: String },
    telefono: {type: String},
    calleNumero: {type: String},
    estado: { type: String },
    municipio: { type: String },
    codigoP: { type: Number },
    
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: {type: Number},
    
    // idAutoridad: {
    //     type: mongoose.Schema.ObjectId,
    //     ref:'idAuroridad'
    // },
    // idGerente: {
    //     type: Schema.ObjectId,
    //     ref:'idGerente'
    // },
    // idRepresentante: {
    //     type: Schema.ObjectId,
    //     ref:'idRepresentante'
    // },
    // cp:{

    // },
});

module.exports = mongoose.model("EstacionServicio", estacionSchema);
