const mongoose = require('mongoose');

const simulacroSchema = new mongoose.Schema({
    mes: {type: String},
    aviso: {type: String},
    fecha: {type: String},
    descripcionEmergencia: {type: String},
    claseSimulacro: {type: String},
});

module.exports = mongoose.model('Simulacro por incendio', simulacroSchema);
