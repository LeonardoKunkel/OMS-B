var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const gerenteSchema = new Schema({
    nombre: String,
    apellidos: String,
    correo: String,
    telefono: String
});

module.exports = mongoose.model('Gerente_Estacion', gerenteSchema);