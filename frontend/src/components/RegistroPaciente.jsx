import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col, Card } from 'react-bootstrap';
import ForgotPasswordModal from './ForgotPasswordModal';

const RegistroPaciente = () => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [paisNacimiento, setPaisNacimiento] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [fechaUltimaVisita, setFechaUltimaVisita] = useState('');
  const [diagnostico, setDiagnostico] = useState('');
  const [medicoCabecera, setMedicoCabecera] = useState('');
  const [tienePadecimiento, setTienePadecimiento] = useState('');
  const [especialista, setEspecialista] = useState('');
  const [reseñaPadecimiento, setReseñaPadecimiento] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState(0);
  const [celular, setCelular] = useState('');
  const [numeroEmergencia,setNumeroEmergencia] = useState('');

  // Estado para el modal
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  // Calcular edad automáticamente
  useEffect(() => {
    if (fechaNacimiento) {
      const birthDate = new Date(fechaNacimiento);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setEdad(age);
    }
  }, [fechaNacimiento]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nombre,
      apellido,
      cedula,
      fechaNacimiento,
      nacionalidad,
      paisNacimiento,
      edad,
      peso,
      altura,
      fechaUltimaVisita,
      diagnostico,
      medicoCabecera,
      tienePadecimiento,
      especialista,
      reseñaPadecimiento,
      correo,
      celular,
      numeroEmergencia
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Registro de Paciente</h2>
      
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
                  <Form.Label>Cédula</Form.Label>
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
                <Form.Group controlId="formEdad">
                  <Form.Label>Edad</Form.Label>
                  <Form.Control
                    type="text"
                    value={`${edad} años`}
                    readOnly
                    plaintext
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
            </Row>

            <Row>
              <Col md={12}>
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
          </Card.Body>
        </Card>

        {/* Sección 2: Información Médica */}
        <Card className="mb-4 shadow-sm">
          <Card.Header className="bg-info text-white">
            <h5>Información Médica</h5>
          </Card.Header>
          <Card.Body>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Group controlId="formPeso">
                  <Form.Label>Peso (kg)</Form.Label>
                  <Form.Control
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formAltura">
                  <Form.Label>Altura (cm)</Form.Label>
                  <Form.Control
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formFechaUltimaVisita">
                  <Form.Label>Fecha Última Visita</Form.Label>
                  <Form.Control
                    type="date"
                    value={fechaUltimaVisita}
                    onChange={(e) => setFechaUltimaVisita(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formMedicoCabecera">
                  <Form.Label>Médico de Cabecera</Form.Label>
                  <Form.Control
                    type="text"
                    value={medicoCabecera}
                    onChange={(e) => setMedicoCabecera(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <Form.Group controlId="formDiagnostico">
                  <Form.Label>Diagnóstico Inicial</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={diagnostico}
                    onChange={(e) => setDiagnostico(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="formPadecimiento">
                  <Form.Label>¿Padecimiento Crónico?</Form.Label>
                  <Form.Control
                    as="select"
                    value={tienePadecimiento}
                    onChange={(e) => setTienePadecimiento(e.target.value)}
                    required
                  >
                    <option value="">Seleccione...</option>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              {tienePadecimiento === 'Si' && (
                <>
                  <Col md={4}>
                    <Form.Group controlId="formEspecialista">
                      <Form.Label>Especialista</Form.Label>
                      <Form.Control
                        as="select"
                        value={especialista}
                        onChange={(e) => setEspecialista(e.target.value)}
                        required
                      >
                        <option value="">Seleccione especialista...</option>
                        <option value="Cardiólogo">Cardiólogo</option>
                        <option value="Endocrinólogo">Endocrinólogo</option>
                        <option value="Neurólogo">Neurólogo</option>
                        <option value="Oncólogo">Oncólogo</option>
                        <option value="Reumatólogo">Reumatólogo</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formReseñaPadecimiento">
                      <Form.Label>Reseña del Padecimiento</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        value={reseñaPadecimiento}
                        onChange={(e) => setReseñaPadecimiento(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </>
              )}
            </Row>
          </Card.Body>
        </Card>

        {/* Sección 3: Información de Contacto */}
        <Card className="mb-4 shadow-sm">
          <Card.Header className="bg-warning text-dark">
            <h5>Información de Contacto</h5>
          </Card.Header>
          <Card.Body>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formCorreo">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ejemplo@dominio.com"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formCelular">
                  <Form.Label>Teléfono Celular</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="+1234567890"
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                    required
                  />
                  <Form.Text muted>
                    Incluya código de país
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formNumeroEmergencia">
                  <Form.Label>Teléfono de Emergencias</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="+1234567890"
                    value={numeroEmergencia}
                    onChange={(e) => setNumeroEmergencia(e.target.value)}
                    required
                  />
                  <Form.Text muted>
                    Número de contacto en caso de emergencia
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6} className="d-flex align-items-end">
                <Button 
                  variant="outline-primary" 
                  onClick={() => setShowForgotPasswordModal(true)}
                  className="w-100 py-2"
                >
                  <i className="bi bi-shield-lock me-2"></i>
                  Actualizar Contraseña
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* Botón de Enviar */}
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" size="lg">
            Registrar Paciente
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

export default RegistroPaciente;