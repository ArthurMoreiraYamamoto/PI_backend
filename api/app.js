require('dotenv').config();
const mongoose = require('mongoose');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const routerClientes = require('./routes/router_clientes')
var usersRouter = require('./routes/user_routes');
const routerApiDocs = require('./routes/router_apidocs');
const routerProdutos = require('./routes/router_produtos');
const routerFornecedor = require('./routes/router_fornecedor');

const app = express();

mongoose.connect(process.env.MONGODB_URL);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-docs', routerApiDocs);
app.use('/clientes', routerClientes);
app.use('/users', usersRouter);
app.use('/produtos', routerProdutos);
app.use('/fornecedor', routerFornecedor);

module.exports = app;