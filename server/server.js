require('./config/config')

const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      usuariosRuta = require('../routes/usuariosRuta'),
      loginRuta = require('../routes/loginRuta'),
      authRuta = require('../routes/authRuta'); 
      app = express();
      cors = require('cors');

mongoose.connect("mongodb://localhost:27017/BDOMS", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
        .then(() => console.log('Base de datos en \x1b[32m', 'linea'))
        .catch((error) => console.log('Error'));

// Middlewares
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a las APIs del Oil Management System');
});
app.use('/user', usuariosRuta);
app.use('/user/login', loginRuta);
app.use('/user/auth', authRuta);

app.listen(3000, () => console.log('Diselo al Covenant'));
