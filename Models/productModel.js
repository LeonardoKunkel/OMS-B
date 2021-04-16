const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
      
const productModel = new Schema({
    dispensarios: { type: Number },
    producto: { type: String },
    siglas: { type: String},
    tanques: { type: Number },
});

module.exports = mongoose.model('Producto', productModel);
