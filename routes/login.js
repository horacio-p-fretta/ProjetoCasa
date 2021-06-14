const express = require('express');
const router = express.Router();

router.get('/', (req , res, next) => {
    res.sendFile('login.html', { root: './Web' });
 });

    router.post('/', (req, res, next) => {
        res.status(201).send({
        })
    });

    

        module.exports = router;