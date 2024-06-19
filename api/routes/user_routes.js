var express = require('express');
const controller = require('../controllers/user_controller');
var router = express.Router();

router.post('/', controller.criar);

router.post('/login', controller.entrar);

router.post('/renovar', controller.renovar);

module.exports = router;