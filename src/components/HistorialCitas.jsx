import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Table, Modal } from 'react-bootstrap';

const HistorialCitas = () => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [nombreApellido, setNombreApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [medico, setMedico] = useState('');
  const [resultados] = useState([
    {
      nombreCompleto: 'Juan Pérez',
      fechaUltimaCita: '2023-10-15',
      nombreMedico: 'Dr. Carlos Gómez',
      especialidad: 'Cardiología',
      diagnostico: 'Hipertensión arterial',
      siguienteCita: '2023-11-01',
    },
    {
      nombreCompleto: 'María López',
      fechaUltimaCita: '2023-10-10',
      nombreMedico: 'Dra. Ana Martínez',
      especialidad: 'Pediatría',
      diagnostico: 'Control de crecimiento',
      siguienteCita: '2023-11-05',
    },
  ]);

  const handleBuscar = (e) => {
    e.preventDefault();
    alert('Búsqueda realizada');
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Historial de Citas</h2>
      {/* Filtros de Búsqueda */}
      <Card className="mb-4">
        <Card.Body>
          <Form onSubmit={handleBuscar}>
            <Row>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Rango de Fecha</Form.Label>
                  <Form.Control
                    type="date"
                    value={fechaInicio}
                    onChange={(e) => setFechaInicio(e.target.value)}
                  />
                  <Form.Control
                    type="date"
                    value={fechaFin}
                    onChange={(e) => setFechaFin(e.target.value)}
                    className="mt-2"
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Nombre y Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    value={nombreApellido}
                    onChange={(e) => setNombreApellido(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Cédula</Form.Label>
                  <Form.Control
                    type="text"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Médico</Form.Label>
                  <Form.Control
                    as="select"
                    value={medico}
                    onChange={(e) => setMedico(e.target.value)}
                  >
                    <option value="">Seleccione</option>
                    <option value="Dr. Carlos Gómez">Dr. Carlos Gómez</option>
                    <option value="Dra. Ana Martínez">Dra. Ana Martínez</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" className="mt-3">
              Buscar
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {/* Resultados en Tabla */}
      <Card>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre Completo</th>
                <th>Fecha Última Cita</th>
                <th>Nombre del Médico</th>
                <th>Especialidad</th>
                <th>Diagnóstico</th>
                <th>Siguiente Cita</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((cita, index) => (
                <tr key={index}>
                  <td>{cita.nombreCompleto}</td>
                  <td>{cita.fechaUltimaCita}</td>
                  <td>{cita.nombreMedico}</td>
                  <td>{cita.especialidad}</td>
                  <td>{cita.diagnostico}</td>
                  <td>{cita.siguienteCita}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HistorialCitas;