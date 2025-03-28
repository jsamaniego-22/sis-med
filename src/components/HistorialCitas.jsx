import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Table, Modal, Badge } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const HistorialCitas = () => {
  const [filtros, setFiltros] = useState({
    fechaInicio: '',
    fechaFin: '',
    nombreApellido: '',
    cedula: '',
    medico: '',
    estado: ''
  });

  const [resultados] = useState([
    {
      id: 1,
      nombreCompleto: 'Juan Pérez',
      fechaUltimaCita: '2023-10-15',
      nombreMedico: 'Dr. Carlos Gómez',
      especialidad: 'Cardiología',
      diagnostico: 'Hipertensión arterial',
      siguienteCita: '2023-11-01',
      estado: 'Completada',
      notas: 'Paciente respondiendo bien al tratamiento'
    },
    {
      id: 2,
      nombreCompleto: 'María López',
      fechaUltimaCita: '2023-10-10',
      nombreMedico: 'Dra. Ana Martínez',
      especialidad: 'Pediatría',
      diagnostico: 'Control de crecimiento',
      siguienteCita: '2023-11-05',
      estado: 'Programada',
      notas: 'Próximo control de peso y talla'
    },
  ]);

  const [citaSeleccionada, setCitaSeleccionada] = useState(null);
  const [showDetalleModal, setShowDetalleModal] = useState(false);

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros(prev => ({ ...prev, [name]: value }));
  };

  const handleBuscar = (e) => {
    e.preventDefault();
    // Lógica de filtrado aquí
  };

  const verDetalleCita = (cita) => {
    setCitaSeleccionada(cita);
    setShowDetalleModal(true);
  };

  const getEstadoBadge = (estado) => {
    switch(estado) {
      case 'Completada': return 'success';
      case 'Programada': return 'primary';
      case 'Cancelada': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">
        <i className="bi bi-clock-history me-2"></i>Historial de Citas
      </h2>
      
      {/* Filtros de Búsqueda */}
      <Card className="mb-4 shadow-sm border-0">
        <Card.Header className="bg-primary text-white">
          <h5><i className="bi bi-funnel me-2"></i>Filtros de Búsqueda</h5>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleBuscar}>
            <Row>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Rango de Fechas</Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Control
                      type="date"
                      name="fechaInicio"
                      value={filtros.fechaInicio}
                      onChange={handleFiltroChange}
                      className="me-2"
                    />
                    <span>a</span>
                    <Form.Control
                      type="date"
                      name="fechaFin"
                      value={filtros.fechaFin}
                      onChange={handleFiltroChange}
                      className="ms-2"
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group className="mb-3">
                  <Form.Label>Paciente</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombreApellido"
                    value={filtros.nombreApellido}
                    onChange={handleFiltroChange}
                    placeholder="Nombre completo"
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group className="mb-3">
                  <Form.Label>Cédula</Form.Label>
                  <Form.Control
                    type="text"
                    name="cedula"
                    value={filtros.cedula}
                    onChange={handleFiltroChange}
                    placeholder="Número de cédula"
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group className="mb-3">
                  <Form.Label>Médico</Form.Label>
                  <Form.Control
                    as="select"
                    name="medico"
                    value={filtros.medico}
                    onChange={handleFiltroChange}
                  >
                    <option value="">Todos</option>
                    <option value="Dr. Carlos Gómez">Dr. Carlos Gómez</option>
                    <option value="Dra. Ana Martínez">Dra. Ana Martínez</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group className="mb-3">
                  <Form.Label>Estado</Form.Label>
                  <Form.Control
                    as="select"
                    name="estado"
                    value={filtros.estado}
                    onChange={handleFiltroChange}
                  >
                    <option value="">Todos</option>
                    <option value="Completada">Completada</option>
                    <option value="Programada">Programada</option>
                    <option value="Cancelada">Cancelada</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={1} className="d-flex align-items-end">
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100"
                >
                  <i className="bi bi-search"></i>
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {/* Resultados */}
      <Card className="shadow-sm border-0">
        <Card.Header className="bg-light">
          <h5 className="mb-0">
            <i className="bi bi-list-check me-2"></i>Resultados ({resultados.length})
          </h5>
        </Card.Header>
        <Card.Body className="p-0">
          <Table hover responsive className="mb-0">
            <thead className="bg-light">
              <tr>
                <th>Paciente</th>
                <th>Fecha Cita</th>
                <th>Médico</th>
                <th>Especialidad</th>
                <th>Diagnóstico</th>
                <th>Próxima Cita</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((cita) => (
                <tr key={cita.id}>
                  <td className="align-middle">{cita.nombreCompleto}</td>
                  <td className="align-middle">{new Date(cita.fechaUltimaCita).toLocaleDateString()}</td>
                  <td className="align-middle">{cita.nombreMedico}</td>
                  <td className="align-middle">{cita.especialidad}</td>
                  <td className="align-middle text-truncate" style={{maxWidth: '150px'}}>{cita.diagnostico}</td>
                  <td className="align-middle">{cita.siguienteCita ? new Date(cita.siguienteCita).toLocaleDateString() : 'N/A'}</td>
                  <td className="align-middle">
                    <Badge bg={getEstadoBadge(cita.estado)}>{cita.estado}</Badge>
                  </td>
                  <td className="align-middle">
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      onClick={() => verDetalleCita(cita)}
                    >
                      <i className="bi bi-eye"></i> Ver
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal de Detalle */}
      <Modal show={showDetalleModal} onHide={() => setShowDetalleModal(false)} size="lg">
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Detalle de Cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {citaSeleccionada && (
            <div>
              <Row className="mb-3">
                <Col md={6}>
                  <h5>Información del Paciente</h5>
                  <p><strong>Nombre:</strong> {citaSeleccionada.nombreCompleto}</p>
                  <p><strong>Fecha de Cita:</strong> {new Date(citaSeleccionada.fechaUltimaCita).toLocaleDateString()}</p>
                  <p><strong>Estado:</strong> <Badge bg={getEstadoBadge(citaSeleccionada.estado)}>{citaSeleccionada.estado}</Badge></p>
                </Col>
                <Col md={6}>
                  <h5>Información Médica</h5>
                  <p><strong>Médico:</strong> {citaSeleccionada.nombreMedico}</p>
                  <p><strong>Especialidad:</strong> {citaSeleccionada.especialidad}</p>
                  <p><strong>Próxima Cita:</strong> {citaSeleccionada.siguienteCita ? new Date(citaSeleccionada.siguienteCita).toLocaleDateString() : 'N/A'}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Diagnóstico</h5>
                  <p>{citaSeleccionada.diagnostico}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Notas Médicas</h5>
                  <p>{citaSeleccionada.notas}</p>
                </Col>
              </Row>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDetalleModal(false)}>
            Cerrar
          </Button>
          <Button variant="primary">
            <i className="bi bi-printer me-2"></i> Imprimir
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default HistorialCitas;