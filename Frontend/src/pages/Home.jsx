import React from 'react';
import { Link } from 'react-router-dom';
import './pages-css/home.css';

function Home() {
  return (
    <div>
      <h1 className='title'>Sistema de Agendamento de Consultas</h1>
      <Link to="/specialty" className="links">
        Cadastrar Especialidade
      </Link>
      <Link to="/doctor" className="links">
        Cadastrar Médico
      </Link>
      <Link to="/patient" className="links">
        Cadastrar Paciente
      </Link>
      <Link to="/appointment" className="links">
        Cadastrar Consulta
      </Link>
      <Link to="/queries" className="links">
        Consultas Agendadas
      </Link>
    </div>
  );
}

export default Home;
