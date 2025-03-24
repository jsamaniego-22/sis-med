import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HistorialCitas from './components/HistorialCitas';
import ProgramacionCitas from './components/ProgramacionCitas';
import RegistroPaciente from './components/RegistroPaciente';
import RegistroMedico from './components/RegistroMedico';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import './styles.css';

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <Router>
      <div>
        {/* Menú fijo en la parte superior */}
        <nav className="fixed-menu">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/registro-paciente">Registro de Paciente</Link>
            </li>
            <li>
              <Link to="/registro-medico">Registro de Médico</Link>
            </li>
            <li>
              <Link to="/historial">Historial de Citas</Link>
            </li>
            <li>
              <Link to="/programacion">Programación de Citas</Link>
            </li>
          </ul>
        </nav>

        {/* Contenido principal */}
        <main>
          <Routes>
            {/* Ruta de inicio con el banner y los botones */}
            <Route
              path="/"
              element={
                <div className="hero-banner" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/hero-banner.jpg'})` }}>
                  <div className="banner-content">
                    <h2>Bienvenido al Sistema de Citas Médicas</h2>
                    <div className="buttons">
                      <button className="btn btn-primary" onClick={() => setShowLoginModal(true)}>Iniciar Sesión</button>
                      <button className="btn btn-success" onClick={() => setShowRegisterModal(true)}>Registrarse</button>
                    </div>
                  </div>
                </div>
              }
            />
            {/* Otras rutas */}
            <Route path="/historial" element={<HistorialCitas />} />
            <Route path="/programacion" element={<ProgramacionCitas />} />
            <Route path="/registro-paciente" element={<RegistroPaciente />} />
            <Route path="/registro-medico" element={<RegistroMedico />} />
          </Routes>
        </main>

        {/* Modales */}
        <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} />
        <RegisterModal
          show={showRegisterModal}
          onHide={() => setShowRegisterModal(false)}
          onPatientRegister={() => window.location.href = '/registro-paciente'}
          onDoctorRegister={() => window.location.href = '/registro-medico'}
        />

        <Footer />
      </div>
    </Router>
  );
};

export default App;