const express = require('express'),
      estacionModel = require('../Models/estacionModel'),
      representanteModel= require('../Models/representanteModel'),
      gerenteModel= require('../Models/gerenteModelo'),
      autoridadModel= require('../Models/autoridadModel'),
      multer = require('multer'),
      path = require('path'),
      app = express();

const bodyParser = require('body-parser');
const uuidV4 = require('uuid-v4');
const uuid = require('uuid-v4');
const storage = multer.diskStorage({
    destination: path.join('public/uploads/logosEstaciones'),
    filename: (req, file, cb) => {
        //console.log(uuid.v4());
        cb(null, uuidV4() + path.extname(file.originalname));
    }
});

//Settings 
app.set('Views', path.join(__dirname,'views'));
app.set('View engine', 'ejs');
      
//Middlewares
app.use(multer({storage}).single('myfile'));

// Get
app.get('/', (req, res) => {
    estacionModel.find((err, estacionFound) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Estacion not found',
                err
            });
        } else {
            res.status(200).json({
                ok: true,
                estacionFound
            });
        }
    });
});

// Post
app.post('/create', (req, res) => { 
    let body = req.body;
    // let file = req.file;   
    // console.log(bodys, 'este es tu bodys');
    // console.log(body, 'es el body');
    let newData = {
        nombre:body.nombre,
        correo: body.correo,
        telefono:body.telefono,
        calleNumero: body.calleNumero,
        estado: body.estado,
        municipio: body.municipio,
        codigoP: body.codigoP,
        
        // filename: file.filename,
        // path: 'public/uploads/logosEstaciones' + req.file.filename,
        // originalname: file.originalname,
        // mimetype: file.mimetype,
        // size: file.size
        
        // idAutoridad: body.idAutoridad,
        // idGerente: body.idGerente,
        // idRepresentante: body.idRepresentante,
        // cp: {
        //     cp:body.cp,
        //     estado:body.estado,
        //     asentamiento:body.asentamiento,
        //     ciudad:body.ciudad,
        //     estado:body.estado,
        //     municipio: body.municipio
        // },
    };

    console.log(newData,'Esta es tu data');

    estacionModel.create(newData, (err, estacionCreated) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message:'No se pudo registrar el autor',
                err,
            });
        }
        res.status(200).json({
            estacionCreated
        });
    });

});

// GET
// app.get('/',(req, res) => {
//     //res.send('sirvce')
//     estacionModel.find({}, (err, estaciones) => {
//         representanteModel.populate(estaciones, {path: "idRepresentante"}, (err, estaciones) => {
//             gerenteModel.populate(estaciones, {path:"idGerente"}, (err, estaciones) => {
//                 autoridadModel.populate(estaciones, {path:"idAutoridad"}, (err, estaciones) => {
//                     res.status(200).send(estaciones);
//                 });
//             });
//         });
//     });
// });


//GET ID
// app.get('/:id', (req, res) => {
//     let id = req.params.id;

//     estacionModel.findById(id, (err, estaciones) =>{
//         if (err) {
//             res.status(404).json({
//                 ok: false,
//                 message: `No se encontro con el ${id}`,
//                 err
//             });
//         }
//         representanteModel.populate(estaciones, {path: "idRepresentante"}, (err, estaciones) =>{
//             gerenteModel.populate(estaciones, {path:"idGerente"}, (err, estaciones) => {
//                 autoridadModel.populate(estaciones, {path:"idAutoridad"}, (err, estaciones) =>{
//                     res.status(200).send(estaciones); 
//                 });
//             });
//         });
//     });
// });

// Update
app.put('/:id', (req, res) => {
    let id = req.params.id;
    let newEstacion = req.body;
    
    estacionModel.findByIdAndUpdate(id, newEstacion, (err, estacionUpdated) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Estación not saved',
                err
            });
        } else {
            if (!estacionUpdated) {
                res.status(404).json({
                    ok: false,
                    message: 'Estación not updated'
                });
            } else {
                res.status(200).json({
                    ok: true,
                    estacionUpdated
                });
            }
        }
    });
});

// Delete
app.delete('/:id', (req, res) => {
    let id = req.params.id;
    estacionModel.findByIdAndDelete(id, (err, deleteEstacion) => {
        if (err) {
            return res.status(400).json({
                ok:false,
                message:'No se elmino',
                err
            });
        }

        if (!deleteEstacion) {
            return res.status(400).json({
                ok:false,
                message: 'No se pudo borrar',
                err
            });
        }
        res.status(200).json({
           deleteEstacion
        });
    });
});

module.exports = app;
