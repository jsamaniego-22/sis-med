import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import ForgotPasswordModal from './ForgotPasswordModal';

function LoginModal({ show, onHide }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulación de autenticación
    setTimeout(() => {
      if (username && password) {
        onHide();
      } else {
        setError('Por favor complete todos los campos');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>
            <i className="bi bi-box-arrow-in-right me-2"></i>Iniciar Sesión
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Usuario o Correo Electrónico</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su usuario o correo"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-between mb-4">
              <Form.Check 
                type="checkbox"
                label="Recordarme"
                id="rememberMe"
              />
              <Button 
                variant="link" 
                className="p-0 text-decoration-none"
                onClick={() => {
                  onHide();
                  setShowForgotPasswordModal(true);
                }}
              >
                ¿Olvidó su contraseña?
              </Button>
            </div>
            <div className="d-grid gap-2">
              <Button 
                variant="primary" 
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <p className="mb-0">
            ¿No tiene una cuenta?{' '}
            <Button 
              variant="link" 
              className="p-0 text-decoration-none"
              onClick={onHide}
            >
              Regístrese aquí
            </Button>
          </p>
        </Modal.Footer>
      </Modal>

      <ForgotPasswordModal 
        show={showForgotPasswordModal} 
        onHide={() => setShowForgotPasswordModal(false)} 
      />
    </>
  );
}

export default LoginModal;