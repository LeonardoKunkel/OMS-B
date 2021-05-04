'use strict'

const jwt = require('jwt-simple'),
      moment = require('moment'),
      secret = 'clave_secreta_oms';

exports.createToken = (user) =>{
  const payLoad = {
    sub:user._id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    password: user.password,
    role: user.role,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix
  };

  return jwt.encode(payLoad, secret);
};
