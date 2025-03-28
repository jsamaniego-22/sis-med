import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

function ForgotPasswordModal({ show, onHide }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulación de envío
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>
          <i className="bi bi-key me-2"></i>Recuperar Contraseña
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {submitted ? (
          <Alert variant="success" className="text-center">
            <i className="bi bi-check-circle-fill me-2"></i>
            Se ha enviado un enlace de recuperación a tu correo electrónico.
          </Alert>
        ) : (
          <>
            <p className="mb-4">Ingresa tu correo electrónico para recibir instrucciones de recuperación.</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="ejemplo@dominio.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button 
                  variant="primary" 
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Enviando...' : 'Enviar Instrucciones'}
                </Button>
              </div>
            </Form>
          </>
        )}
      </Modal.Body>
      {submitted && (
        <Modal.Footer className="justify-content-center">
          <Button variant="outline-primary" onClick={onHide}>
            Volver al inicio
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default ForgotPasswordModal;