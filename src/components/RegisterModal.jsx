import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function RegisterModal({ show, onHide, onPatientRegister, onDoctorRegister }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Registrarse</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Seleccione su tipo de usuario:</p>
        <Button variant="primary" onClick={onPatientRegister}>Paciente</Button>
        <Button variant="primary" onClick={onDoctorRegister}>Médico</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RegisterModal;