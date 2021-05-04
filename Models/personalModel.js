const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    telefono: Number,
    puesto: String
});

module.exports = mongoose.model('Personal', personalSchema);
