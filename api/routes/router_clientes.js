const express = require('express');

const controllerClientes = require('../controllers/controller_clientes');

const router = express.Router();

router.post('/', controllerClientes.validarDadosCliente, controllerClientes.novoCliente);

router.get('/', controllerClientes.obterTodosClientes );

router.get('/:id', controllerClientes.clientePeloId, controllerClientes.obterCliente);

module.exports = router;