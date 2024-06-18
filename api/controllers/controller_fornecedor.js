const mongoose = require('mongoose');
const Fornecedor = require('../models/model_fornecedor');

const validarDados = async (req, res, next) => {
    const fornecedor = new Fornecedor(req.body);
    try {
        await fornecedor.validate();
        next();
    } catch (error) {
        res.status(422).json({ msg: 'Dados invalidos' });
    };
};

const novoFornecedor = async (req, res) => {
    const fornecedor = await Fornecedor.create(req.body);
    res.status(201).json(fornecedor);
};

module.exports = { validarDados, novoFornecedor }