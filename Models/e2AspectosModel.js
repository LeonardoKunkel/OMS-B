var mongoose = require ('mongoose'),
    Schema = mongoose.Schema;
    
var aspectosSchema = new Schema({
    area: String,
    conjunto: Array,
    act: String,
    eql: String,
    element: String,
    imAmb: String,
    realPot: String,
    condOp: String,
    F: Number,
    N: Number,
    M: Number,
    VT: Number,
    AAS: String,
    reqLegal: String,
    eliminacion: String,
    sustitucion: String,
    control: String,
    senalizacion: String,
    controlAmbo: String,
    epp: String,
    objMeta: String,
    proc: Array
});

module.exports = mongoose.model('Aspectos', aspectosSchema);
