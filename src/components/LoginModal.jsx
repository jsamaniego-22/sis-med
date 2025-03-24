import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import ForgotPasswordModal from './ForgotPasswordModal';

function LoginModal({ show, onHide }) {
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su usuario" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su contraseña" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Cerrar</Button>
          <Button variant="primary" onClick={onHide}>Iniciar Sesión</Button>
          <Button variant="link" onClick={() => setShowForgotPasswordModal(true)}>Olvidé mi contraseña</Button>
        </Modal.Footer>
      </Modal>

      <ForgotPasswordModal show={showForgotPasswordModal} onHide={() => setShowForgotPasswordModal(false)} />
    </>
  );
}

export default LoginModal;