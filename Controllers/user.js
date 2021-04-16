'use strict'

const user = require('../Models/user'),
      bcrypt = require('bcrypt-nodejs'),
      jwt = require('../Services/jwt');

function pruebas(req, res){
    res.status(200).send(
        {
            message: 'Probando el controlador'
        }
    );
}

module.exports = {
    pruebas
};