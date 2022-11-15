import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './pages-css/queries.css';

function Queries() {
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3002/appointment').then((response) => {
      setAppointment(response.data);
    });
  }, []);

  const handleDelete = async (id) => {
    Axios.delete(`http://localhost:3002/appointment/${id}`)
    .then(({data}) => {
      const newArray = appointment.filter((user) => user.id !== id);
      setAppointment(newArray);
      console.log(data);
    })
    window.location.reload(true)
  }
  return (
    <div>
      <Link to="/" className="link">
        Voltar para Página Inicial
      </Link>
      <h1 className="title1">Consultas Agendadas</h1>
      <div className="container1">
        {appointment?.map((el) => (
          <div className="card">
            <p key={el.id}>Paciente: {el.patient}</p>
            <p key={el.id}>Médico(a): {el.doctor}</p>
            <p key={el.id}>
              Data da Consulta:{' '}
              {el.appointmentDate.replace('T', ' às ').replace(/\.\d{3}Z/, '')}{' '}
              UTC
            </p>
            <button className='btn-del' onClick={() => handleDelete(el.id)}>Deletar Consulta</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Queries;
