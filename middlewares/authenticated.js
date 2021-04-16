'use strict'

const jwt = require('jwt-simple'),
      moment = require('moment'),
      secret = 'clave_secreta_oms';

exports.ensureAuth = (req, res, next) =>{
    if (!req.headers.authorization) {
        return res.status(403).send({
            message:'La peticion no tiene la cabecera de autenticacion'
        })
    }

    var token = req.headers.authorization.replace(/["']+/g,'');

    try {
        let payLoad = jwt.decode(token, secret);
        if (payLoad.exp <= moment().unix()) {
            return res.status(401).send({
                message:'El token expiro'
            })
        }
    } catch (ex) {
        console.log(ex);
        return res.status(404).send(
            {
                message: 'Token no valido'
            }
        );
    }
    req.user = payLoad;
    next();
}
