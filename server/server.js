const express = require('express'),
      morgan = require('morgan'),
      Routes = require('./routes'),
      app = express(),
      cors = require('cors');
      app.use(morgan('dev'));


// Realizamos la conexión a la base de datos
const db = require('./config/database');
db();

// Inicializamos los middlewares
app.use(cors({origin: true, credentials: true}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// RUTAS
app.use(Routes);

//Carpetas de imagenes
app.use('/logo', express.static('public/uploads/logosEstaciones'))

//Escucha el puerto
app.listen(3000, () => console.log('Estoy vivo'));
