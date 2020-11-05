var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const representanteSchema = new Schema({
    nombre: String,
    apellidos: String,
    correo: String,
    telefono: String
});

module.exports = mongoose.model('Representante_Tecnico', representanteSchema);