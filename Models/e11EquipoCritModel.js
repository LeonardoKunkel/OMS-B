var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var equipoCritSchema = new Schema({
    C1: {type: Boolean},
    C2: {type: Boolean},
    C3: {type: Boolean},
    C4: {type: Boolean},
    C5: {type: Boolean},
    C6: {type: Boolean},
    C7: {type: Boolean},
    C8: {type: Boolean},
    C9: {type: Boolean},
    C10: {type: Boolean},
    C11: {type: Boolean},
    C12: {type: Boolean},
    C13: {type: Boolean},
    C14: {type: Boolean},
    C15: {type: Boolean},
    C16: {type: Boolean},
    C17: {type: Boolean},
    C18: {type: Boolean},
    C19: {type: Boolean},
    C20: {type: Boolean},
    C21: {type: Boolean},
    C22: {type: Boolean},
    C23: {type: Boolean},
    C24: {type: Boolean},
    C25: {type: Boolean},
    C26: {type: Boolean},
    C27: {type: Boolean},
    C28: {type: Boolean},
    num1: {type: Number},
    num2: {type: Number},
    num3: {type: Number},
    num4: {type: Number},
    num5: {type: Number},
    num6: {type: Number},
    num7: {type: Number},
    num8: {type: Number},
    num9: {type: Number},
    num10: {type: Number},
    num11: {type: Number},
    num12: {type: Number},
    num13: {type: Number},
    num14: {type: Number},
    num15: {type: Number},
    num16: {type: Number},
    num17: {type: Number},
    num18: {type: Number}
});

module.exports = mongoose.model('Equipo Crítico', equipoCritSchema);
