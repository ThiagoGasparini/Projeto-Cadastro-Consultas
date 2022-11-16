import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './pages-css/specialty.css';
import * as yup from 'yup';

function Specialty() {
  const navigate = useNavigate();

  const handleClickEspeciality = (value) => {
    Axios.post('http://localhost:3002/specialty', {
      name: value.name,
    }).then((response) => {
      console.log(response);
      navigate('/doctor');
    });
  };

  const validationSpecialty = yup.object().shape({
    name: yup.string().required('Este campo é obrigatório para cadastrar'),
  });
  return (
    <div>
      <Link to="/" className="link">
        Voltar para Página Inicial
      </Link>
      <div className="container">
        <h1>Cadastrar Especialidade</h1>
        <Formik
          initialValues={{}}
          onSubmit={handleClickEspeciality}
          validationSchema={validationSpecialty}
        >
          <Form className="form-specialty">
            <Field
              className="specialty"
              name="name"
              placeholder="Especialidade"
            />
            <button className="specialty-btn" type="submit">
              Cadastrar
            </button>
            <ErrorMessage component="span" name="name" className="error" />
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Specialty;
