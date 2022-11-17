const express = require('express');
const db = require('../database/connection');

const router = express.Router();

router.post('/doctor', (req, res) => {
  const name = req.body.name;
  const specialty = req.body.specialty;
  const crm = req.body.crm;

  db.query(
    'SELECT * FROM desafio_tecnico.doctor WHERE crm = ?',
    [crm],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length === 0) {
        db.query(
          'INSERT INTO desafio_tecnico.doctor (name, specialty, crm) VALUES (?, ?, ?)',
          [name, specialty, crm],
          (err, result) => {
            if (err) {
              res.send(err);
            }
            res.send({ msg: 'Cadastrado com sucesso!!!' });
          }
        );
      } else {
        res.send({ msg: 'Médico ja cadastrado!!!' });
      }
    }
  );
});

router.get('/doctor', (req, res) => {
  db.query('SELECT * FROM desafio_tecnico.doctor', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;