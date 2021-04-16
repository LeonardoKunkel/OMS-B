const mongoose = require('mongoose'),
      Sceham = mongoose.Schema;
      
const simulacroSchema = new Schema({
    mes: { type: String },
    aviso: { type: String },
    fecha: { type: String },
    descripcionEmergencia: { type: String },
    claseSimulacro: { type: String }
});

module.exports = mongoose.model('Simulacro', simulacroSchema);
