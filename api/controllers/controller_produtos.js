const mongoose = require('mongoose');
const Produto = require('../models/model_produtos');

const validarDados = async (req, res, next) => {
    const produto = new Produto(req.body);
    try {
        await produto.validate();
        next();
    } catch (error) {
        res.status(422).json({ msg: 'Dados invalidos' });
    };
};

const novoProduto = async (req, res) => {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
};

module.exports = { validarDados, novoProduto };