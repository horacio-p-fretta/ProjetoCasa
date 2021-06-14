const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile('cadastro.html', { root: './Web' });
});

router.post('/', (req, res, next) => {
    res.sendFile('cadastro.html', { root: './Web' });
    res.sendFile('login-cadastro.css', { root: './Web/CSS' });
    const jogador = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    };
    res.status(201).send({
        mensagem: 'inserindo um jogador',
        jogadorCriado: jogador
    })
});



module.exports = router;