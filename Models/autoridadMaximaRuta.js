var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const autoridadSchema = new Schema({
    nombre: String,
    apellidos: String,
    correo: String,
    telefono: String
});

module.exports = mongoose.model('Autoridad_Maxima', autoridadSchema);