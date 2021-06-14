const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req , res, next) => {
    res.sendFile('login.html', { root: './Web' });
 });

    router.post('/', (req, res, next) => {
        exports.Login =  (re, res, next) => {
            mysql.getConnection((error, conn ) => {
                if(erro) { return res.status(500).send({ error: erro}) }
                const query = 'SELECT * FROM jogadores WHERE email = ?';
                conn.query(query,[], (error, results, fields) => {
                    conn.release();
                    if(error) {return res.status(500).send({ error: error}) }
                    if(results.length < 1) {
                        return res.status(401).send({ mensagem: 'Falha na autenticação' })
                    }
                    bcrypt.compare(req.body.senha, results[0].senha, (err, result) => {
                        if(err) {
                            return res.status(401).send({ mensagem: 'Falha na autenticação' })
                        }
                        if (result) {
                            const token = jwt.sign({
                             id: results[0].id,
                             email: results[0].email
                            }, 
                            process.env.JWT_KEY,
                            {
                                expiresIn: "1h"
                            })
                            return res.status(200).send({
                                 mensagem: 'Autenticado com sucesso',
                                 token: token
                        });
        
                        } 
                        return  res.status(401).send({ mensagem: 'Falha na autenticação' })
                    });
                });
            });
         }
    });

    

        module.exports = router;