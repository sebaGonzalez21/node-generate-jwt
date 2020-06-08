const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'all';

router.post('/api/v1/jwt', (req, res) => {
    try {

        let emailCuentaServicio = String(req.body.email);
        let segundosVencimiento = Number(req.body.seconds);
        let privateKey = String(req.body.privateKey);
        let urlService = String(req.body.urlService);
        let algorithm = String(req.body.algorithm);

        const payload = {
            iat: new Date().getTime(),
            exp: new Date().getTime() + segundosVencimiento,
            iss: emailCuentaServicio,
            aud: urlService,
            sub: emailCuentaServicio,
            email: emailCuentaServicio
        };
        const token = 'Bearer ' + jwt.sign(payload, privateKey, { algorithm });
        logger.info("token generado exitosamente");
        res.status(200).json({ token: token });
    } catch (err) {
        logger.error(err);
        res.status(500).json("error en generacion de token");
    }
});
module.exports = router;