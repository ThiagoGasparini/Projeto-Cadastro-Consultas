const express = require('express');
const db = require('../database/connection');

const router = express.Router();

router.post(
  '/specialty', (req, res) => {
    const name = req.body.name;
  
    db.query(
      'SELECT * FROM desafio_tecnico.specialty WHERE name = ?',
      [name],
      (err, result) => {
        if (err) {
          res.send(err);
        }
        if (result.length === 0) {
          db.query(
            'INSERT INTO desafio_tecnico.specialty (name) VALUES (?)',
            [name],
            (err, result) => {
              if (err) {
                res.send(err);
              }
              res.send({ msg: 'Cadastrado com sucesso!!!' });
            }
          );
        } else {
          res.send({ msg: 'Especialidade ja cadastrada!!!' });
        }
      }
    );
  });

  router.get('/specialty', (req, res) => {
    db.query('SELECT * FROM desafio_tecnico.specialty', (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

  module.exports = router;