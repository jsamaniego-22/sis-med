import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
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
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar superior profesional */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
          <div className="container">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <i className="bi bi-heart-pulse me-2" style={{ fontSize: '1.8rem' }}></i>
              <span className="fw-bold">MediSchedule</span>
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/registro-paciente">
                    <i className="bi bi-person-plus me-1"></i> Pacientes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/registro-medico">
                    <i className="bi bi-file-earmark-medical me-1"></i> Médicos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/historial">
                    <i className="bi bi-clock-history me-1"></i> Historial
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/programacion">
                    <i className="bi bi-calendar-check me-1"></i> Citas
                  </Link>
                </li>
              </ul>
              <div className="d-flex">
                <button 
                  className="btn btn-light me-3 d-flex align-items-center"
                  onClick={() => setShowLoginModal(true)}
                >
                  <i className="bi bi-box-arrow-in-right me-2"></i> Ingresar
                </button>
                <button 
                  className="btn btn-outline-light d-flex align-items-center" 
                  onClick={() => setShowRegisterModal(true)}
                >
                  <i className="bi bi-person-plus me-2"></i> Registrarse
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Contenido principal */}
        <main className="flex-grow-1" style={{ paddingTop: '80px' }}>
          <Routes>
            <Route
              path="/"
              element={
                <div className="hero-banner position-relative" style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL + '/hero-banner.jpg'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '80vh'
                }}>
                  <div className="banner-content position-absolute top-50 start-50 translate-middle text-center text-white">
                    <h1 className="display-4 fw-bold mb-4">Sistema de Gestión Médica</h1>
                    <p className="lead mb-5">Agenda, gestiona y sigue el historial de tus pacientes de manera eficiente</p>
                    <div className="buttons">
                      <button 
                        className="btn btn-primary btn-lg me-3 px-4 py-2 rounded-pill shadow-sm"
                        onClick={() => setShowLoginModal(true)}
                      >
                        <i className="bi bi-box-arrow-in-right me-2"></i> Acceder al Sistema
                      </button>
                      <button 
                        className="btn btn-success btn-lg px-4 py-2 rounded-pill shadow-sm"
                        onClick={() => setShowRegisterModal(true)}
                      >
                        <i className="bi bi-person-plus me-2"></i> Crear Cuenta
                      </button>
                    </div>
                  </div>
                </div>
              }
            />
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

        {/* Footer centrado y profesional */}
        <footer className="bg-dark text-white py-4 mt-auto">
          <div className="container text-center">
            <div className="mb-3">
              <i className="bi bi-heart-pulse fs-1 text-primary"></i>
            </div>
            <div className="d-flex justify-content-center mb-3">
              <a href="#" className="text-white mx-3"><i className="bi bi-facebook fs-4"></i></a>
              <a href="#" className="text-white mx-3"><i className="bi bi-twitter fs-4"></i></a>
              <a href="#" className="text-white mx-3"><i className="bi bi-linkedin fs-4"></i></a>
              <a href="#" className="text-white mx-3"><i className="bi bi-instagram fs-4"></i></a>
            </div>
            <p className="mb-0">&copy; {new Date().getFullYear()} MediSchedule. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;