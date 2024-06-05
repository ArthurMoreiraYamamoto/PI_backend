const express = require('express');

const controllerClientes = require('../controllers/controller_clientes');

const router = express.Router();

router.post('/', controllerClientes.validarDadosCliente, controllerClientes.novoCliente);

module.exports = router;