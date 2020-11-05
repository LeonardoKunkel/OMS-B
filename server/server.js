const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      gerente = require('../Routes/gerenteRoute'),
      representante = require('../Routes/representanteRoute'),
      autoridad = require('../Routes/autoridadRoute'),
      estacionService = require('../Routes/estacionRoute'),
      app = express(),
      cors = require('cors');
      


      //Realizamos la conexion a la base de datos
    mongoose.connect("mongodb://localhost:27017/OILMAGNAMENTSYSTEM",
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }
    ) .then(()=>{console.log('Base de datos en linea')}).catch((err)=>console.log('Error'));

        //Inicializamos los middlewares
    app.use(cors({origin: true, credentials: true}));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

        //RUTAS
    app.get('/',(req, res) =>{
        res.send('Bienvenido al OMS')
        
    }) 

    app.use('/gerente', gerente);
    app.use('/representante', representante);
    app.use('/autoridad', autoridad);
    app.use('/estacion', estacionService);

    //Escucha el puerto
    app.listen(process.env.PORT || 3000, ()=>{console.log('Vivio el back')})
