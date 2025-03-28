import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Card, ListGroup } from 'react-bootstrap';
import ForgotPasswordModal from './ForgotPasswordModal';

const RegistroMedico = () => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [paisNacimiento, setPaisNacimiento] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [sexo, setSexo] = useState('');
  const [anoFinalizacion, setAnoFinalizacion] = useState('');
  const [tituloPrincipal, setTituloPrincipal] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [especialidadAtencion, setEspecialidadAtencion] = useState('');
  const [fotoMedico, setFotoMedico] = useState(null);
  const [correo, setCorreo] = useState('');
  const [numeroEmergencia, setNumeroEmergencia] = useState('');
  
  // Estados para horarios
  const [diasSeleccionados, setDiasSeleccionados] = useState({
    lunes: { mañana: false, tarde: false },
    martes: { mañana: false, tarde: false },
    miércoles: { mañana: false, tarde: false },
    jueves: { mañana: false, tarde: false },
    viernes: { mañana: false, tarde: false },
    sábado: { mañana: false, tarde: false }
  });

  // Estado para el modal
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  // Manejar cambio en horarios
  const handleHorarioChange = (dia, turno) => {
    setDiasSeleccionados(prev => ({
      ...prev,
      [dia]: {
        ...prev[dia],
        [turno]: !prev[dia][turno]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nombre,
      apellido,
      cedula,
      fechaNacimiento,
      nacionalidad,
      paisNacimiento,
      estadoCivil,
      sexo,
      anoFinalizacion,
      tituloPrincipal,
      especialidad,
      especialidadAtencion,
      fotoMedico,
      diasSeleccionados,
      correo,
      numeroEmergencia
    });
  };

  // Opciones para especialidades
  const especialidades = [
    "Cardiología",
    "Dermatología",
    "Endocrinología",
    "Gastroenterología",
    "Neurología",
    "Oncología",
    "Pediatría",
    "Psiquiatría"
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Registro de Médico</h2>
      
      <Form onSubmit={handleSubmit}>
        {/* Sección 1: Datos Generales */}
        <Card className="mb-4 shadow-sm">
          <Card.Header className="bg-primary text-white">
            <h5>Datos Generales</h5>
          </Card.Header>
          <Card.Body>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="formNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formApellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formCedula">
                  <Form.Label>Cédula Profesional</Form.Label>
                  <Form.Control
                    type="text"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="formFechaNacimiento">
                  <Form.Label>Fecha de Nacimiento</Form.Label>
                  <Form.Control
                    type="date"
                    value={fechaNacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formNacionalidad">
                  <Form.Label>Nacionalidad</Form.Label>
                  <Form.Control
                    type="text"
                    value={nacionalidad}
                    onChange={(e) => setNacionalidad(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formPaisNacimiento">
                  <Form.Label>País de Nacimiento</Form.Label>
                  <Form.Control
                    type="text"
                    value={paisNacimiento}
                    onChange={(e) => setPaisNacimiento(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="formEstadoCivil">
                  <Form.Label>Estado Civil</Form.Label>
                  <Form.Control
                    as="select"
                    value={estadoCivil}
                    onChange={(e) => setEstadoCivil(e.target.value)}
                    required
                  >
                    <option value="">Seleccione...</option>
                    <option value="Soltero">Soltero</option>
                    <option value="Casado">Casado</option>
                    <option value="Divorciado">Divorciado</option>
                    <option value="Viudo">Viudo</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formSexo">
                  <Form.Label>Sexo</Form.Label>
                  <Form.Control
                    as="select"
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                    required
                  >
                    <option value="">Seleccione...</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                    <option value="Prefiero no decir">Prefiero no decir</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Sección 2: Información Profesional */}
        <Card className="mb-4 shadow-sm">
          <Card.Header className="bg-info text-white">
            <h5>Información Profesional</h5>
          </Card.Header>
          <Card.Body>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="formAnoFinalizacion">
                  <Form.Label>Año de Finalización</Form.Label>
                  <Form.Control
                    type="number"
                    min="1900"
                    max={new Date().getFullYear()}
                    value={anoFinalizacion}
                    onChange={(e) => setAnoFinalizacion(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formTituloPrincipal">
                  <Form.Label>Título Principal</Form.Label>
                  <Form.Control
                    type="text"
                    value={tituloPrincipal}
                    onChange={(e) => setTituloPrincipal(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formEspecialidad">
                  <Form.Label>Especialidad</Form.Label>
                  <Form.Control
                    as="select"
                    value={especialidad}
                    onChange={(e) => setEspecialidad(e.target.value)}
                    required
                  >
                    <option value="">Seleccione...</option>
                    {especialidades.map((esp) => (
                      <option key={esp} value={esp}>{esp}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formEspecialidadAtencion">
                  <Form.Label>Especialidad de Atención</Form.Label>
                  <Form.Control
                    as="select"
                    value={especialidadAtencion}
                    onChange={(e) => setEspecialidadAtencion(e.target.value)}
                    required
                  >
                    <option value="">Seleccione...</option>
                    {especialidades.map((esp) => (
                      <option key={esp} value={esp}>{esp}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formFotoMedico">
                  <Form.Label>Foto del Médico</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFotoMedico(e.target.files[0])}
                  />
                  <Form.Text muted>
                    Suba una foto profesional para su perfil
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <Form.Label>Horarios de Atención</Form.Label>
                <Card className="p-3">
                  <div className="d-flex flex-wrap">
                    {Object.entries(diasSeleccionados).map(([dia, turnos]) => (
                      <div key={dia} className="me-4 mb-3">
                        <h6 className="text-capitalize">{dia}</h6>
                        <div className="d-flex">
                          <Form.Check
                            type="checkbox"
                            id={`${dia}-mañana`}
                            label="Mañana"
                            checked={turnos.mañana}
                            onChange={() => handleHorarioChange(dia, 'mañana')}
                            className="me-2"
                          />
                          <Form.Check
                            type="checkbox"
                            id={`${dia}-tarde`}
                            label="Tarde"
                            checked={turnos.tarde}
                            onChange={() => handleHorarioChange(dia, 'tarde')}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Sección 3: Información de Contacto */}
        <Card className="mb-4 shadow-sm">
          <Card.Header className="bg-warning text-dark">
            <h5>Información de Contacto</h5>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formCorreo">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formNumeroEmergencia">
                  <Form.Label>Teléfono de Emergencias</Form.Label>
                  <Form.Control
                    type="tel"
                    value={numeroEmergencia}
                    onChange={(e) => setNumeroEmergencia(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={12} className="d-flex justify-content-end">
                <Button 
                  variant="outline-primary" 
                  onClick={() => setShowForgotPasswordModal(true)}
                >
                  Actualizar Contraseña
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Botón de Enviar */}
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" size="lg">
            Registrar Médico
          </Button>
        </div>
      </Form>

      {/* Modal de Olvidé Contraseña */}
      <ForgotPasswordModal
        show={showForgotPasswordModal}
        onHide={() => setShowForgotPasswordModal(false)}
      />
    </div>
  );
};

export default RegistroMedico;