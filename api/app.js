'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Carregar Rotas

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors



// Exportações
module.exports = app;