import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './pages-css/appointment.css';

function Appointment() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3002/patient').then((response) => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get('http://localhost:3002/doctor').then((response) => {
      setDoctor(response.data);
    });
  }, []);

  const parseDateTime = (value) => {
    const re = /\.\d{3}Z/;
    return value.toISOString().replace('T', ' ').replace(re, '');
  };

  const handleClickConsult = (value) => {
    Axios.post('http://localhost:3002/appointment', {
      patient: value.patient,
      doctor: value.doctor,
      appointmentDate: parseDateTime(startDate),
    }).then((response) => {
      console.log(response);
      navigate('/queries');
    });
  };

  return (
    <div>
      <Link to="/" className="link">
        Voltar para Página Inicial
      </Link>
      <div className="container">
        <h1>Cadastrar Consulta</h1>
        <Formik initialValues={{}} onSubmit={handleClickConsult}>
          <Form className="form-specialty">
            <label className="label" htmlFor="consult1">
              Paciente:
            </label>
            <Field
              className="specialty"
              as="select"
              name="patient"
              id="consult1"
            >
              <option value="">--------</option>
              {data?.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))}
            </Field>
            <label className="label" htmlFor="consult2">
              Médico:
            </label>
            <Field
              className="specialty"
              as="select"
              name="doctor"
              id="consult2"
            >
              <option value="">--------</option>
              {doctor?.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))}
            </Field>
            <label className="label" htmlFor="consult3">
              Click para alterar a data
            </label>
            <DatePicker
              className="specialty"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              placeholderText="Data"
              dateFormat="dd/MM/yyyy"
              id="consult3"
              name="appointmentDate"
            />
            <button className="specialty-btn" type="submit">
              Cadastrar Consulta
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Appointment;
