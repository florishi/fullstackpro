'use strict'

var Usuario = require('../modelo/usuarios.js');


function inicio(req, res) {
res.status(200).send({
    message: 'Hello World'
})};

function teste(req, res) {
    res.status(200).send({
        message: 'Testing node server!'
    })
};


app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello word!'
    });
});

app.get('/testing', (req, res) => {
    res.status(200).send({
        message: 'Testing node server!'
    });
});