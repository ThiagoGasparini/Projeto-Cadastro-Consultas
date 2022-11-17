const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'azlkaz',
  database: 'desafio_tecnico',
});

module.exports = db;