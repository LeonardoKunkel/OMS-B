const express = require('express'),
      simulacroModel = require('../../Models/e13Simulacros/e13SimulacroModel3'),
      app = express();
      
app.post('/create', (req, res) => {
    const body = req.body;
    console.log(body);
    let newDatos = {
        mes: body.mes,
        aviso: body.aviso,
        fecha: body.fehca,
        descripcionEmergencia: body.descripcionEmergencia,
        claseSimulacro: body.claseSimulacro,
    };
    
    simulacroModel.create(newDatos, (err, crearSimulacro) => {
        if (err) {
            res.status(400).json ({
                message: 'Error al guardar',
                err
            });
        }
        res.json({
            ok: true,
            crearSimulacro
        });
    });
});

app.get('/', (req, res) => {
    simulacroModel.find().exec((err, findSimulacro) => {
        if (err) {
            res.status(400).json({
                ok: true,
                findSimulacro
            });
        }
        res.status(200).json({
            ok: true,
            findSimulacro
        });
    });
});

module.exports = app;
