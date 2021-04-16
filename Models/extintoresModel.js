const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
      
const extintoresSchema = new Schema({
    ubicacion: { type: String },
    agente: { type: String },
    paro: { type: String },
    botiquin: { type: String }
});

module.exports = mongoose.model('Extintor', extintoresSchema);
