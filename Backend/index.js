const express = require('express');
const app = express();
const cors = require('cors');
const specialty = require('./routes/specialty');
const doctor = require('./routes/doctor');
const patient = require('./routes/patient');
const appointment = require('./routes/appointment');

app.use(express.json());
app.use(cors());

app.use('/', specialty);
app.use('/', doctor);
app.use('/', patient);
app.use('/', appointment);

app.listen(3002, () => {
  console.log('rodando na porta 3002');
});