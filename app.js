const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const rotaLogin = require('./routes/login');
const rotaCadastro = require('./routes/cadastro');


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

app.use('/login' , rotaLogin);
app.use('/cadastro' , rotaCadastro);



//quando não encontra rota ele aparecece esse erro
app.use((req, res, next) =>{
    const erro = new Error('Não encontrado')
    erro.status = 404;
    next(erro);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send ({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;