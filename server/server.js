const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      usuariosRuta = require('../routes/usuariosRuta'),
      loginRuta = require('../routes/loginRuta'),
      authRuta = require('../routes/authRuta');
      gerente = require('../Routes/gerenteRoute'),
      representante = require('../Routes/representanteRoute'),
      autoridad = require('../Routes/autoridadRoute'),
      estacionService = require('../Routes/estacionRoute'),
      app = express(),
      cors = require('cors');
      


      //Realizamos la conexion a la base de datos
    mongoose.connect("mongodb://localhost:27017/BDOMS",
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }
    ) .then(() => console.log('Base de datos en \x1b[32m', 'linea')).catch((err) => console.log('Error'));

        //Inicializamos los middlewares
    app.use(cors({origin: true, credentials: true}));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

        //RUTAS
    app.get('/',(req, res) =>{
        res.send('Bienvenido al OMS')
        
    }) 
    app.use('/user', usuariosRuta);
    app.use('/user/login', loginRuta);
    app.use('/user/auth', authRuta);
    app.use('/gerente', gerente);
    app.use('/representante', representante);
    app.use('/autoridad', autoridad);
    app.use('/estacion', estacionService);

    //Escucha el puerto
    app.listen(3000, () => console.log('Vivio el back'))
