const express = require('express'),
      comunicacionModel = require('../Models/comunicacionModel'),
      app = express();
      
// Get
app.get('/', (req, res) => {
    comunicacionModel.find((err, comsFound) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Coms not Found',
                err
            });
        }
        res.status(200).json({
            ok: true,
            comsFound
        });
    });
});

// Post
app.post('/create', (req, res) => {
    const body = req.body;
    const newData = {
        institucion: body.institucion,
        direccion: body.direccion,
        funcion: body.funcion,
        telefono: body.telefono,
        tiempo: body.tiempo
    };
    comunicacionModel.create(newData, (err, comsCreated) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Coms not created',
                err
            });
        }
        res.status(200).json({
            ok: true,
            comsCreated
        });
    });
});

// Delete Id
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    comunicacionModel.findByIdAndRemove(id, (err, comsRemoved) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Coms not removed',
                err
            });
        }
        if (!comsRemoved) {
            res.status(400).json({
                ok: false,
                message: 'Coms not removed',
                err
            });
        }
        res.status(200).json({
            ok: true,
            comsRemoved
        });
    });
});

module.exports = app;
