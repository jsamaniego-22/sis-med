import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

function RegisterModal({ show, onHide, onPatientRegister, onDoctorRegister }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>
          <i className="bi bi-person-plus me-2"></i>Crear Cuenta
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center mb-4">Seleccione el tipo de cuenta que desea crear:</p>
        
        <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
          <Card className="text-center border-primary" style={{ width: '18rem' }}>
            <Card.Body>
              <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                <i className="bi bi-person-heart text-primary" style={{ fontSize: '2rem' }}></i>
              </div>
              <Card.Title>Paciente</Card.Title>
              <Card.Text className="text-muted small">
                Regístrese para agendar citas y acceder a su historial médico
              </Card.Text>
              <Button 
                variant="outline-primary" 
                className="mt-2"
                onClick={() => {
                  onPatientRegister();
                  onHide();
                }}
              >
                Registrarse como Paciente
              </Button>
            </Card.Body>
          </Card>

          <Card className="text-center border-info" style={{ width: '18rem' }}>
            <Card.Body>
              <div className="bg-info bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                <i className="bi bi-file-earmark-medical text-info" style={{ fontSize: '2rem' }}></i>
              </div>
              <Card.Title>Médico</Card.Title>
              <Card.Text className="text-muted small">
                Regístrese para gestionar su agenda y acceder a sus pacientes
              </Card.Text>
              <Button 
                variant="outline-info" 
                className="mt-2"
                onClick={() => {
                  onDoctorRegister();
                  onHide();
                }}
              >
                Registrarse como Médico
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <p className="mb-0">
          ¿Ya tiene una cuenta?{' '}
          <Button 
            variant="link" 
            className="p-0 text-decoration-none"
            onClick={onHide}
          >
            Inicie sesión aquí
          </Button>
        </p>
      </Modal.Footer>
    </Modal>
  );
}

export default RegisterModal;