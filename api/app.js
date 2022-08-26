'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importando rotas
const rotasIndex = require('./rotas/index');

// Carregar rotas
app.use(rotasIndex);

// Exportações
module.exports = app;
