var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var riesgosSchema = new Schema({
    consecuencia: Number,
    frecuencia: Number,
    magnitud: String,
});

module.exports = mongoose.model('Riesgos', riesgosSchema);
