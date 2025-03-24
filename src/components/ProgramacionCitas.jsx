import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';

const ProgramacionCitas = () => {
  const [medicos] = useState([
    {
      id: 1,
      nombre: 'Dr. Carlos Gómez',
      especialidad: 'Cardiología',
      foto: 'https://via.placeholder.com/150',
      disponibilidad: ['2023-11-01', '2023-11-02', '2023-11-03'],
    },
    {
      id: 2,
      nombre: 'Dra. Ana Martínez',
      especialidad: 'Pediatría',
      foto: 'https://via.placeholder.com/150',
      disponibilidad: ['2023-11-05', '2023-11-06'],
    },
  ]);

  const [medicoSeleccionado, setMedicoSeleccionado] = useState(null);
  const [fechaCita, setFechaCita] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleAgendar = (medico) => {
    setMedicoSeleccionado(medico);
    setShowModal(true);
  };

  const handleConfirmar = (e) => {
    e.preventDefault();
    if (medicoSeleccionado.disponibilidad.includes(fechaCita)) {
      alert(`Cita agendada con ${medicoSeleccionado.nombre} para el ${fechaCita}`);
      setShowModal(false);
    } else {
      alert('Fecha no disponible');
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Programación de Citas</h2>
      {/* Listado de Médicos */}
      <Row>
        {medicos.map((medico) => (
          <Col key={medico.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={medico.foto} alt={medico.nombre} />
              <Card.Body>
                <Card.Title>{medico.nombre}</Card.Title>
                <Card.Text>{medico.especialidad}</Card.Text>
                <Button variant="primary" onClick={() => handleAgendar(medico)}>
                  Agendar Cita
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal de Agendamiento */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agendar Cita con {medicoSeleccionado?.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleConfirmar}>
            <Form.Group controlId="fechaCita">
              <Form.Label>Fecha de la Cita</Form.Label>
              <Form.Control
                type="date"
                value={fechaCita}
                onChange={(e) => setFechaCita(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Confirmar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProgramacionCitas;