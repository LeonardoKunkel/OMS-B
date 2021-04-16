const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
      
const comunicacionModel = new Schema({
    institucion: { type: String },
    direccion: { type: String },
    funcion: { type: String },
    telefono: { type: Number },
    tiempo: { type: Number }
});

module.exports = mongoose.model('comunicacion', comunicacionModel);
