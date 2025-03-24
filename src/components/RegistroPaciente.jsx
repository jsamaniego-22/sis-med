import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import ForgotPasswordModal from './ForgotPasswordModal'; // Importa el modal de olvidé contraseña

const RegistroPaciente = () => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [paisNacimiento, setPaisNacimiento] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [sexo, setSexo] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [padecimiento, setPadecimiento] = useState('');
  const [fechaUltimaVisita, setFechaUltimaVisita] = useState('');
  const [diagnostico, setDiagnostico] = useState('');
  const [medicoCabecera, setMedicoCabecera] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [correo, setCorreo] = useState('');

  // Estado para el modal de olvidé contraseña
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario
    console.log({
      nombre,
      apellido,
      cedula,
      fechaNacimiento,
      nacionalidad,
      paisNacimiento,
      estadoCivil,
      sexo,
      peso,
      altura,
      padecimiento,
      fechaUltimaVisita,
      diagnostico,
      medicoCabecera,
      especialidad,
      correo,
    });
  };

  return (
    <div className="container mt-4">
      <h2>Registro de Paciente</h2>
      <Form onSubmit={handleSubmit}>
        {/* Sección de Información Personal */}
        <Row className="mb-3">
          <Col md={6}>
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
          <Col md={6}>
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
        </Row>

        {/* Sección de Cédula y Fecha de Nacimiento */}
        <Row className="mb-3">
          <Col md={6}>
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
          <Col md={6}>
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
        </Row>

        {/* Sección de Nacionalidad y País de Nacimiento */}
        <Row className="mb-3">
          <Col md={6}>
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
          <Col md={6}>
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

        {/* Sección de Estado Civil y Sexo */}
        <Row className="mb-3">
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
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* Sección de Peso y Altura */}
        <Row className="mb-3">
          <Col md={6}>
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
          <Col md={6}>
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
        </Row>

        {/* Sección de Padecimiento y Fecha de Última Visita */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formPadecimiento">
              <Form.Label>Padecimiento</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={padecimiento}
                onChange={(e) => setPadecimiento(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formFechaUltimaVisita">
              <Form.Label>Fecha de Última Visita</Form.Label>
              <Form.Control
                type="date"
                value={fechaUltimaVisita}
                onChange={(e) => setFechaUltimaVisita(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Sección de Diagnóstico y Médico de Cabecera */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formDiagnostico">
              <Form.Label>Diagnóstico</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={diagnostico}
                onChange={(e) => setDiagnostico(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
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

        {/* Sección de Especialidad */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formEspecialidad">
              <Form.Label>Especialidad</Form.Label>
              <Form.Control
                type="text"
                value={especialidad}
                onChange={(e) => setEspecialidad(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Sección de Cambio de Correo y Actualizar Contraseña */}
        <Row className="mb-3">
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
            <h4>Actualizar Contraseña</h4>
            <Button variant="link" onClick={() => setShowForgotPasswordModal(true)}>
              Actualizar Contraseña
            </Button>
          </Col>
        </Row>

        {/* Botón de Enviar */}
        <Button variant="primary" type="submit">
          Registrar
        </Button>
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