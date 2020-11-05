const express = require('express'),
      usuariosModel = require('../models/usuariosModel'),
      jwt = require('jsonwebtoken'),
      router = express();

router.post('/', (req, res) => {
    let body = req.body;
    usuariosModel.findOne({email: body.email}, (err, usuarioEncontrado) => {
        if (err) {
            return res.status(400).json({
                err
            });
        }
        if (!usuarioEncontrado) {
            return res.status(400).json({
               message: 'El usuario es incorrecto' 
            });
        }
        if (usuarioEncontrado.password != body.password) {
            return res.status(400).json({
                message: 'La contraseña es incorrecta'
            });
        }
        let token = jwt.sign({
            user: usuarioEncontrado
        }, 'llaveSecreta', {expiresIn: '30s'});
        res.status(200).json({
            token
        });
    });
});

module.exports = router;
