const mongoose = require('mongoose');

const fornecedorSchema = new mongoose.Schema({
    nome: { type: String, trim: true, required: true },
    cnpj: {
        type: String,
        match: /^(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})|(\d{3}\.\d{3}\.\d{3}-\d{2})$/,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model('fornecedor', fornecedorSchema);
