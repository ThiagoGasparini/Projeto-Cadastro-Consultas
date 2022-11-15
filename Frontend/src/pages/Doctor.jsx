import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './pages-css/doctor.css';
import * as yup from 'yup';

function Doctor() {
  const navigate = useNavigate();
  const [specialtys, setSpecialtys] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3002/specialty').then((response) => {
      setSpecialtys(response.data);
    });
  }, []);

  const handleClickDoctor = (value) => {
    Axios.post('http://localhost:3002/doctor', {
      name: value.name,
      specialty: value.specialty,
      crm: value.crm,
    }).then((response) => {
      console.log(response);
    });
    navigate('/patient');
  };

  const validationDoctor = yup.object().shape({
    name: yup.string().required('Este campo é obrigatório para cadastrar'),
    crm: yup.string().required('Este campo é obrigatório para cadastrar'),
  });
  return (
    <div>
      <Link to="/" className="link">
        Voltar para Página Inicial
      </Link>
      <div className="container">
        <h1>Cadastrar Médico</h1>
        <Formik
          initialValues={{}}
          onSubmit={handleClickDoctor}
          validationSchema={validationDoctor}
        >
          <Form className="form-specialty">
            <Field
              className="specialty"
              name="name"
              placeholder="Nome"
              id="nameDoc"
            />
            <ErrorMessage component="span" name="name" className="error" />
            <label className="label" htmlFor="nameEs">
              Especialidade:
            </label>
            <Field
              as="select"
              name="specialty"
              placeholder="Especialidade"
              id="nameEs"
              className="specialty"
            >
              <option value="">--------</option>
              {specialtys?.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))}
            </Field>
            <Field
              className="specialty"
              name="crm"
              placeholder="CRM"
              id="nameCrm"
            />
            <ErrorMessage component="span" name="crm" className="error" />
            <button className="specialty-btn" type="submit">
              Cadastrar
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Doctor;
