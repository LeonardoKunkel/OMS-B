const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      usuariosRuta = require('../routes/usuariosRuta'),
      loginRuta = require('../routes/loginRuta'),
      morgan = require('morgan'),
      authRuta = require('../routes/authRuta');
var app = require('../Routes/e2RiesgosRoute');
      gerente = require('../Routes/gerenteRoute'),
      representante = require('../Routes/representanteRoute'),
      autoridad = require('../Routes/autoridadRoute'),
      estacionService = require('../Routes/estacionRoute'),
      evidenciaSasisopa = require('../Routes/evidenciaSASISOPAroute'),
      riesgos = require('../Routes/e2RiesgosRoute'),
      aspectos = require('../Routes/e2AspectosRoute'),
      lista = require('../Routes/e7ListaRoute'),
      equipoCritico = require('../Routes/e11EquipoCritRoute'),
      evaluacionRequisitos = require('../Routes/e14EvaluacionRoute'),
      app = express(),
      cors = require('cors');
      app.use(morgan('dev'));


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
    app.get('/',(req, res) => {
        res.send('Bienvenido al OMS');
    }); 
    app.use('/user', usuariosRuta);
    app.use('/user/login', loginRuta);
    app.use('/user/auth', authRuta);
    app.use('/gerente', gerente);
    app.use('/representante', representante);
    app.use('/autoridad', autoridad);
    app.use('/estacion', estacionService);
    app.use('/evidenciaSasisopa', evidenciaSasisopa);
    app.use('/riesgos', riesgos);
    app.use('/aspectos', aspectos);
    app.use('/lista', lista);
    app.use('/equipoCrit', equipoCritico);
    app.use('/evaluacionReq', evaluacionRequisitos);

    //Carpetas de imagenes
    app.use('/logo', express.static('public/uploads/logosEstaciones'))

    //Escucha el puerto
    app.listen(3000, () => console.log('Estoy vivo'));
