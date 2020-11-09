const express = require('express'),
      evidenciaModel = require('../Models/evidenciaSASISOPAmodel'),
      multer = require('multer'),
      path = require('path'),
      uuid = require('uuid-v4'),
      app = express();

      //Storage para leer el fichero ademas de agregarle la extencion
      const storage = multer.diskStorage({
        destination: path.join('public/uploads/SASISOPA'),
        filename: (req, file, cb) =>{
            cb(null, uuid() + path.extname(file.originalname));
        }
      });

      //Settings
      app.set('Views', path.join(__dirname, 'views'));
      app.set('View engine', 'ejs');

      //Middlewares
      app.use(multer({storage}).single('myfile'));

      app.post('/create', (req, res) =>{
          let body = req.body;
          let file = req.file;
          let id = req.id;

          let newDoc = {
            title: body.title,
            description: body.description,
            filename: file.filename,
            path: 'public/uploads/SASISOPA' + req.file.filename,
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size,
          }

          evidenciaModel.create(newDoc, (err, doc) =>{
            if (err) {
                res.status(404).json({
                    ok:false,
                    message: ' Error al subir la imagen'
                });
            }
            res.json({
                ok:true,
                doc
            });
          });
      });

      module.exports = app;