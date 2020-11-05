//////////////////////////////////////////
///// Verificar token
/////////////////////////////////////////
const   jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
    let token = req.get('authorization');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.json({
                err
            });
        }
        req.user = decoded
        next();
    });
}

module.exports = {verificarToken};
