const express = require('express'),
      simulacroModel = require('../Models/e13SimulacroModel'),
      app = express();
      
// Get
app.get('/', (req, res) => {
    simulacroModel.find((err, simulacroFounded) => {
        if (err) {
            res.status(400).json({
                message: 'Bad Request',
                err
            });
        }
        res.status(200).json({
            ok: true,
            simulacroFounded
        });
    });
});

// Post
app.post('/create', (req, res) => {
    const body = req.body;
    const newData = {
        mes: body.mes,
        aviso: body.aviso,
        fecha: body.fecha,
        descripcionEmergencia: body.descripcionEmergencia,
        claseSimulacro: body.claseSimulacro
    };
    simulacroModel.create(newData, (err, simulacroCreated) => {
        if(err) {
            res.status(400).json({
                message: 'Bad Request',
                err
            });
        }
        res.status(201).json({
            message: 'Created',
            simulacroCreated
        });
    });
});

// Put
app.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    simulacroModel.findById(id, (err, dataUpdate) => {
        if(err) {
            res.status(500).json({
                message: 'Internal Server Error. Data not saved',
                err
            });
        }
        if(!dataUpdate) {
            res.status(404).json({
                message: 'Not Found. Data not updated'
            });
        }
        dataUpdate.mes = body.mes;
        dataUpdate.aviso = body.aviso;
        dataUpdate.claseSimulacro = body.claseSimulacro;
        dataUpdate.descripcionEmergencia = body.descripcionEmergencia;
        dataUpdate.fecha = body.fecha;
        
        dataUpdate.save((err, dataUpdated) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Error to update'
                });
            }
            return res.status(200).json({
                ok: true,
                dataUpdated
            });
        });
    });
});

module.exports = app;
