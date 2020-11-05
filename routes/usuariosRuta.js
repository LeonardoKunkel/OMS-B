const express = require('express'),
      usuariosModel = require('../models/usuariosModel'),
      router = express();

router.get('/', (req, res) => {
    usuariosModel.find((err, usuarios) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se obtuvieron los usuarios',
                err
            });
        }
        res.status(200).json({
            usuarios
        });
    });
});

router.post('/create', (req, res) => {
    var body = req.body;
    var nuevosUsuarios = {
        email: body.email,
        password: body.password,
        nombre: body.nombre,
        apellido: body.apellido,
        fecha: body.fecha,
    };
    
    usuariosModel.create(nuevosUsuarios, (err, usuarioCreado) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se pudo crear el usuario',
                err
            });
        }
        res.status(200).json({
            usuarioCreado
        });
    });
});

module.exports = router;
