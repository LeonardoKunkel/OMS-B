const express = require('express'),
      app = express();
      
const usuarios = require('../Routes/usuariosRuta'),
      login = require('../Routes/loginRuta'),
      auth = require('../Routes/authRuta'),
      gerente = require('../Routes/gerenteRoute'),
      representante = require('../Routes/representanteRoute'),
      autoridad = require('../Routes/autoridadRoute'),
      estacionService = require('../Routes/estacionRoute'),
      evidenciaSasisopa = require('../Routes/evidenciaSASISOPAroute'),
      politica = require('../Routes/e1PoliticaRoute'),
      riesgos = require('../Routes/e2RiesgosRoute'),
      aspectos = require('../Routes/e2AspectosRoute'),
      lista = require('../Routes/e7ListaRoute'),
      equipoCritico = require('../Routes/e11EquipoCritRoute'),
      evaluacionRequisitos = require('../Routes/e14EvaluacionRoute'),
      simulacro = require('../Routes/e13SimulacroRoute'),
      simulacro1 = require('../Routes/e13Simulacros/simulacro1Route'),
      simulacro2 = require('../Routes/e13Simulacros/simulacro2Route'),
      simulacro3 = require('../Routes/e13Simulacros/simulacro3Route'),
      simulacro4 = require('../Routes/e13Simulacros/simulacro4Route'),
      simulacro5 = require('../Routes/e13Simulacros/simulacro5Route'),
      producto = require('../Routes/productRoute'),
      extintor = require('../Routes/extintoresRoute'),
      comunicacion = require('../Routes/comunicacionRoute'),
      personal = require('../Routes/personalRoute');
      
app.get('/',(req, res) => {
    res.send('Bienvenido al OMS');
}); 
app.use('/user', usuarios);
app.use('/user/login', login);
app.use('/user/auth', auth);
app.use('/gerente', gerente);
app.use('/representante', representante);
app.use('/autoridad', autoridad);
app.use('/estacion', estacionService);
app.use('/evidenciaSasisopa', evidenciaSasisopa);
app.use('/politica', politica);
app.use('/riesgos', riesgos);
app.use('/aspectos', aspectos);
app.use('/lista', lista);
app.use('/equipoCrit', equipoCritico);
app.use('/evaluacionReq', evaluacionRequisitos);
app.use('/simulacro', simulacro);
app.use('/simulacro1', simulacro1);
app.use('/simulacro2', simulacro2);
app.use('/simulacro3', simulacro3);
app.use('/simulacro4', simulacro4);
app.use('/simulacro5', simulacro5);
app.use('/producto', producto);
app.use('/extintor', extintor);
app.use('/comunicacion', comunicacion);
app.use('/personal', personal);
      
module.exports = app;
