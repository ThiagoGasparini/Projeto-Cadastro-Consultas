const express = require('express');
const mysql = require('mysql2');

const router = express.Router();

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'azlkaz',
  database: 'desafio_tecnico',
});

router.post('/patient', (req, res) => {
  const name = req.body.name;
  const cpf = req.body.cpf;
  const phone = req.body.phone;
  const email = req.body.email;
  const cep = req.body.cep;
  const address = req.body.address;
  const number = req.body.number;

  db.query(
    'SELECT * FROM desafio_tecnico.patient WHERE cpf = ?',
    [cpf],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length === 0) {
        db.query(
          'INSERT INTO desafio_tecnico.patient (name, cpf, phone, email, cep, address, number) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [name, cpf, phone, email, cep, address, number],
          (err, result) => {
            if (err) {
              res.send(err);
            }
            res.send({ msg: 'Cadastrado com sucesso!!!' });
          }
        );
      } else {
        res.send({ msg: 'Paciente já cadastrado!!!' });
      }
    }
  );
});

router.get('/patient', (req, res) => {
  db.query('SELECT * FROM desafio_tecnico.patient', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;