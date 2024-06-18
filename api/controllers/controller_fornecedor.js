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

const obterTodosFornecedor = async (req, res) => {
    const fornecedor = await Fornecedor.find({});
    res.json(fornecedor);
};

const obterFornecedor = async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const fornecedor = await Fornecedor.findOne({ _id: id });
    res.json(fornecedor);
};
const buscarFornecedorPeloId = async (req, res, next) => {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id)
        const fornecedor = await Fornecedor.findOne({ _id: id });
        if (fornecedor) {
            next();
        } else {
            res.status(404).json({ msg: 'não encontrado' })
        }
    } catch (error) {
        res.status(400).json({ msg: 'inválido' });
    };
};

module.exports = { validarDados, novoFornecedor, obterTodosFornecedor, obterFornecedor, buscarFornecedorPeloId }