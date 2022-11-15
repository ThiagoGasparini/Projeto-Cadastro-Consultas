import { Route, Routes } from 'react-router-dom';
import Appointment from './pages/Appointment.jsx';
import Doctor from './pages/Doctor.jsx';
import Home from './pages/Home.jsx';
import Patient from './pages/Patient.jsx';
import Queries from './pages/Queries.jsx';
import Specialty from './pages/Specialty.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/specialty" element={<Specialty />} />
        <Route exact path="/doctor" element={<Doctor />} />
        <Route exact path="/patient" element={<Patient />} />
        <Route exact path="/appointment" element={<Appointment />} />
        <Route exact path="/queries" element={<Queries />} />
      </Routes>
    </div>
  );
}

export default App;
