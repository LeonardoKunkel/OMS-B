const mongoose = require('mongoose');

const politicaSchema = new mongoose.Schema({
    politicaSelected: String,
});

module.exports = mongoose.model('Política', politicaSchema);
