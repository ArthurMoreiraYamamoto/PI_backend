const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: { type: String, trim: true, required: true, unique: true },
    preco: { type: Number, min: 0, default: 0 },
});

module.exports = mongoose.model('Produto', produtoSchema);