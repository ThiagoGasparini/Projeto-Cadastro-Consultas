import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './pages-css/patient.css';
import * as yup from 'yup';

function Patient() {
  const navigate = useNavigate();
  const [address, setAddress] = useState([]);
  const [log, setLog] = useState();

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const searchCep = async (cep) => {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    return await response.json();
  };

  const buttonClick = async (e) => {
    e.preventDefault();
    searchHandler(address);
  };

  const searchHandler = async (cep) => {
    const result = await searchCep(cep);
    setLog(result.logradouro);
  };

  const handleClickPeoples = (value) => {
    Axios.post('http://localhost:3002/patient', {
      name: value.name,
      cpf: value.cpf,
      phone: value.phone,
      email: value.email,
      cep: value.cep,
      address: document.getElementById('inputPac').value,
      number: value.number,
    }).then((response) => {
      console.log(response);
      alert(response.data.msg)
      navigate('/appointment');
    }).catch((err) => {
      console.log(err);
    });
  };

  const validationPatient = yup.object().shape({
    name: yup.string().required('Este campo é obrigatório para cadastrar'),
    cpf: yup
      .number()
      .integer()
      .positive()
      .required('Campo obrigatório e só aceita números'),
    phone: yup
      .number()
      .integer()
      .positive()
      .required('Campo obrigatório e só aceita números'),
    email: yup
      .string()
      .email()
      .required('Campo obrigatório do tipo email'),
    cep: yup
      .number()
      .integer()
      .positive()
      .required('Campo obrigatório e só aceita números'),
    number: yup
      .number()
      .integer()
      .positive()
      .required('Campo obrigatório e só aceita números'),
  });
  return (
    <div>
      <Link to="/" className="link">
        Voltar para Página Inicial
      </Link>
      <div className="container">
        <h1 className="title1">Cadastrar Paciente</h1>
        <Formik
          initialValues={{}}
          onSubmit={handleClickPeoples}
          validationSchema={validationPatient}
        >
          <Form className="form-specialty">
            <Field
              className="specialty-people"
              name="name"
              placeholder="Nome"
            />
            <ErrorMessage component="span" name="name" className="error" />
            <Field className="specialty-people" name="cpf" placeholder="CPF" />
            <ErrorMessage component="span" name="cpf" className="error" />
            <Field
              className="specialty-people"
              name="phone"
              placeholder="Telefone"
            />
            <ErrorMessage component="span" name="phone" className="error" />
            <Field
              className="specialty-people"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage component="span" name="email" className="error" />
            <Field
              onKeyUp={handleChange}
              name="cep"
              placeholder="CEP"
              className="specialty-people"
            />
            <ErrorMessage component="span" name="cep" className="error" />
            <button className="specialty-btn-people" onClick={buttonClick}>
              Buscar Endereço
            </button>
            <Field
              value={log}
              name="address"
              placeholder="Endereço"
              id="inputPac"
              className="specialty-people"
            />
            <ErrorMessage component="span" name="address" className="error" />
            <Field
              className="specialty-people"
              name="number"
              placeholder="Número"
              id="inputPac7"
            />
            <ErrorMessage component="span" name="number" className="error" />
            <button className="specialty-btn-people" type="submit">
              Cadastrar
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Patient;
