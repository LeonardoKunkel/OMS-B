const mongoose = require('mongoose');

const database = () => {
    mongoose.connect("mongodb://localhost:27017/BDOMS",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }).then(() => console.log('Base de datos en \x1b[32m', 'linea'))
      .catch((err) => console.log('Error'));
}

module.exports = database;
