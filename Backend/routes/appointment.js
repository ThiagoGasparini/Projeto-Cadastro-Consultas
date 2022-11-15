const express = require('express');
const mysql = require('mysql2');

const router = express.Router();

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'azlkaz',
  database: 'desafio_tecnico',
});

router.post('/appointment', (req, res) => {
  const patient = req.body.patient;
  const doctor = req.body.doctor;
  const appointmentDate = req.body.appointmentDate;

  db.query(
    'SELECT * FROM desafio_tecnico.appointment WHERE patient = ?',
    [patient],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      db.query(
        'INSERT INTO desafio_tecnico.appointment (patient, doctor, appointmentDate) VALUES (?, ?, ?)',
        [patient, doctor, appointmentDate],
        (err, result) => {
          if (err) {
            res.send(err);
          }
          res.send({ msg: 'Consulta cadastrada com sucesso!!!' });
        }
      );
    }
  );
});

router.get('/appointment', (req, res) => {
  db.query('SELECT * FROM desafio_tecnico.appointment', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;