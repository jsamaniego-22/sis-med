import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, Badge, Alert } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProgramacionCitas = () => {
  const [medicos] = useState([
    {
      id: 1,
      nombre: 'Dr. Carlos Gómez',
      especialidad: 'Cardiología',
      foto: 'https://randomuser.me/api/portraits/men/32.jpg',
      disponibilidad: ['2023-11-01', '2023-11-02', '2023-11-03'],
      calificacion: 4.8,
      experiencia: '15 años',
      horario: 'Lunes a Viernes, 8:00 AM - 4:00 PM'
    },
    {
      id: 2,
      nombre: 'Dra. Ana Martínez',
      especialidad: 'Pediatría',
      foto: 'https://randomuser.me/api/portraits/women/44.jpg',
      disponibilidad: ['2023-11-05', '2023-11-06'],
      calificacion: 4.9,
      experiencia: '12 años',
      horario: 'Lunes a Sábado, 9:00 AM - 5:00 PM'
    },
  ]);

  const [medicoSeleccionado, setMedicoSeleccionado] = useState(null);
  const [fechaCita, setFechaCita] = useState('');
  const [horaCita, setHoraCita] = useState('');
  const [motivo, setMotivo] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [especialidadFiltro, setEspecialidadFiltro] = useState('');

  const handleAgendar = (medico) => {
    setMedicoSeleccionado(medico);
    setShowModal(true);
  };

  const handleConfirmar = (e) => {
    e.preventDefault();
    if (medicoSeleccionado.disponibilidad.includes(fechaCita)) {
      alert(`Cita agendada con ${medicoSeleccionado.nombre} para el ${fechaCita} a las ${horaCita}`);
      setShowModal(false);
    } else {
      alert('Fecha no disponible');
    }
  };

  const medicosFiltrados = medicos.filter(medico => {
    const coincideNombre = medico.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideEspecialidad = especialidadFiltro ? medico.especialidad === especialidadFiltro : true;
    return coincideNombre && coincideEspecialidad;
  });

  const especialidades = [...new Set(medicos.map(m => m.especialidad))];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">
        <i className="bi bi-calendar-plus me-2"></i>Programación de Citas
      </h2>
      
      {/* Filtros de Búsqueda */}
      <Card className="mb-4 shadow-sm border-0">
        <Card.Header className="bg-primary text-white">
          <h5><i className="bi bi-search me-2"></i>Buscar Médico</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={5}>
              <Form.Group>
                <Form.Label>Nombre del Médico</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Buscar por nombre..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group>
                <Form.Label>Especialidad</Form.Label>
                <Form.Control
                  as="select"
                  value={especialidadFiltro}
                  onChange={(e) => setEspecialidadFiltro(e.target.value)}
                >
                  <option value="">Todas las especialidades</option>
                  {especialidades.map((esp, index) => (
                    <option key={index} value={esp}>{esp}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={2} className="d-flex align-items-end">
              <Button 
                variant="outline-secondary" 
                onClick={() => {
                  setBusqueda('');
                  setEspecialidadFiltro('');
                }}
                className="w-100"
              >
                <i className="bi bi-arrow-counterclockwise"></i> Limpiar
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Listado de Médicos */}
      {medicosFiltrados.length > 0 ? (
        <Row>
          {medicosFiltrados.map((medico) => (
            <Col key={medico.id} md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex">
                  <div className="me-4">
                    <img 
                      src={medico.foto} 
                      alt={medico.nombre} 
                      className="rounded-circle"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <Card.Title className="mb-1">{medico.nombre}</Card.Title>
                        <Badge bg="info" className="mb-2">{medico.especialidad}</Badge>
                      </div>
                      <div className="text-warning">
                        <i className="bi bi-star-fill"></i> {medico.calificacion}
                      </div>
                    </div>
                    <Card.Text className="text-muted small mb-2">
                      <i className="bi bi-briefcase me-1"></i> {medico.experiencia} de experiencia
                    </Card.Text>
                    <Card.Text className="text-muted small mb-3">
                      <i className="bi bi-clock me-1"></i> {medico.horario}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <Badge bg="light" text="dark" className="me-2">
                          <i className="bi bi-calendar-check me-1"></i> {medico.disponibilidad.length} fechas disponibles
                        </Badge>
                      </div>
                      <Button 
                        variant="primary" 
                        size="sm"
                        onClick={() => handleAgendar(medico)}
                      >
                        <i className="bi bi-calendar-plus me-1"></i> Agendar
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Alert variant="info" className="text-center">
          <i className="bi bi-exclamation-circle me-2"></i> No se encontraron médicos con los criterios de búsqueda
        </Alert>
      )}

      {/* Modal de Agendamiento */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>
            <i className="bi bi-calendar-plus me-2"></i>Agendar Cita
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {medicoSeleccionado && (
            <div>
              <Row className="mb-4">
                <Col md={3} className="text-center">
                  <img 
                    src={medicoSeleccionado.foto} 
                    alt={medicoSeleccionado.nombre} 
                    className="rounded-circle mb-2"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <h5>{medicoSeleccionado.nombre}</h5>
                  <Badge bg="info">{medicoSeleccionado.especialidad}</Badge>
                </Col>
                <Col md={9}>
                  <Form onSubmit={handleConfirmar}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Fecha de la Cita</Form.Label>
                          <Form.Control
                            type="date"
                            value={fechaCita}
                            onChange={(e) => setFechaCita(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                          <Form.Text className="text-muted">
                            Fechas disponibles: {medicoSeleccionado.disponibilidad.join(', ')}
                          </Form.Text>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Hora de la Cita</Form.Label>
                          <Form.Control
                            type="time"
                            value={horaCita}
                            onChange={(e) => setHoraCita(e.target.value)}
                            min="08:00"
                            max="17:00"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Motivo de la Consulta</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={motivo}
                        onChange={(e) => setMotivo(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                      <Button variant="secondary" onClick={() => setShowModal(false)} className="me-2">
                        Cancelar
                      </Button>
                      <Button variant="primary" type="submit">
                        Confirmar Cita
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProgramacionCitas;