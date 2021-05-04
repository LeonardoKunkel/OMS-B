const express = require('express'),
      personalModel = require('../Models/personalModel'),
      app = express();
      
// Get
app.get('/', (req, res) => {
    personalModel.find((err, personalFound) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Personal not found',
                err
            });
        } else {
            res.status(200).json({
                ok: true,
                personalFound
            });
        }
    });
});

// Get Id
app.get('/:id', (req, res) => {
    let id = req.params.id;
    personalModel.findById(id, (err, registerFound) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Register no found',
                err
            });
        } else {
            res.status(200).json({
                ok: true,
                registerFound
            });
        }
    });
});

// Post
app.post('/create', (req, res) => {
    const body = req. body;
    const newPersonal = {
        nombre: body.nombre,
        apellido: body.apellido,
        correo: body.correo,
        telefono: body.telefono,
        puesto: body.puesto
    };
    personalModel.create(newPersonal, (err, personCreated) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Person not created',
                err
            });
        } else {
            res.status(200).json({
                ok: true,
                personCreated
            });
        }
    });
});

// Delete
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    personalModel.findByIdAndRemove(id, (err, personRemoved) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Person not removed',
                err
            });
        } else {
            if (!personRemoved) {
                res.status(404).json({
                    ok: false,
                    message: 'Person not Removed'
                });
            } else {
                res.status(200).json({
                    ok: true,
                    personRemoved
                });
            }
        }
    });
});

// Update
app.put('/:id', (req, res) => {
    const id = req.params.id;
    const newRegister = req.body;
    
    personalModel.findByIdAndUpdate(id, newRegister, (err, registerUpdated) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Register no found',
                err
            });
        } else {
            if (!registerUpdated) {
                res.status(404).json({
                    ok: false,
                    message: 'Register not found'
                });
            } else {
                res.status(200).json({
                    ok: true,
                    registerUpdated
                });
            }
        }
    });
});

module.exports = app;
