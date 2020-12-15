var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var evaluacionSchema = new Schema({
    fecha1: {type: Number},
    fecha2: {type: Number},
    fecha3: {type: Number},
    check1: {type: Boolean},
    check2: {type: Boolean},
    check3: {type: Boolean},
    check4: {type: Boolean},
    check5: {type: Boolean},
    check6: {type: Boolean},
    check7: {type: Boolean},
    check8: {type: Boolean},
    check9: {type: Boolean},
    check10: {type: Boolean},
    check11: {type: Boolean},
    check12: {type: Boolean},
    check13: {type: Boolean},
    check14: {type: Boolean},
    check15: {type: Boolean},
    check16: {type: Boolean},
    check17: {type: Boolean},
    check18: {type: Boolean},
    check19: {type: Boolean},
    check20: {type: Boolean},
    check21: {type: Boolean},
    check22: {type: Boolean},
    trimestre: {type: String}
});

module.exports = mongoose.model('Evaluacion', evaluacionSchema);
