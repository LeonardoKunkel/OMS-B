var mongoose = require ('mongoose'),
    Schema = mongoose.Schema;
    
var aspectosSchema = new Schema({
    act: String,
    F: Number,
    N: Number,
    M: Number,
    VT: Number,
    AAS: String,
});

module.exports = mongoose.model('Aspectos', aspectosSchema);
