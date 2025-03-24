import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ForgotPasswordModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Recuperar Contraseña</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su correo" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cerrar</Button>
        <Button variant="primary" onClick={onHide}>Resetear</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ForgotPasswordModal;