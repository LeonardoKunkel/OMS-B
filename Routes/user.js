'use strict'

const express = require('express'),
      userController = require('../Controllers/user'),
      md_auth = require('../middlewares/authenticated'),
      multipart = require('connect-multiparty'),
      fs = require('fs'),
      api = express.Router();

api.get('/probando-controlador', md_auth.ensureAuth, userController.pruebas);

module.exports = api;
      