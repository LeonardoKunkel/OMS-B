const mongoose = require('mongoose');

const politicaSchema = new mongoose.Schema({
    // politicaEscogida: String
    name: String,
    desc: String,
});

module.exports = mongoose.model('Política', politicaSchema);
