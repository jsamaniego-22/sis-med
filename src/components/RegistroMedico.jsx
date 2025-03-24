import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import ForgotPasswordModal from './ForgotPasswordModal'; // Importa el modal de olvidé contraseña

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
  const [padecimientos, setPadecimientos] = useState('');
  const [anoFinalizacion, setAnoFinalizacion] = useState('');
  const [tituloPrincipal, setTituloPrincipal] = useState('');
  const [especialidad1, setEspecialidad1] = useState('');
  const [especialidad2, setEspecialidad2] = useState('');
  const [fotoMedico, setFotoMedico] = useState(null);
  const [especialidadAtencion, setEspecialidadAtencion] = useState('');
  const [diasSemana, setDiasSemana] = useState([]);
  const [horariosAtencion, setHorariosAtencion] = useState('');
  const [numeroEmergencia, setNumeroEmergencia] = useState('');

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
      padecimientos,
      anoFinalizacion,
      tituloPrincipal,
      especialidad1,
      especialidad2,
      fotoMedico,
      especialidadAtencion,
      diasSemana,
      horariosAtencion,
      numeroEmergencia,
    });
  };

  return (
    <div className="container mt-4">
      <h2>Registro de Médico</h2>
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

        {/* Sección de Padecimientos y Año de Finalización */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formPadecimientos">
              <Form.Label>Padecimientos</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={padecimientos}
                onChange={(e) => setPadecimientos(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formAnoFinalizacion">
              <Form.Label>Año de Finalización de Estudios</Form.Label>
              <Form.Control
                type="number"
                value={anoFinalizacion}
                onChange={(e) => setAnoFinalizacion(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Sección de Títulos y Especialidades */}
        <Row className="mb-3">
          <Col md={6}>
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
          <Col md={6}>
            <Form.Group controlId="formEspecialidad1">
              <Form.Label>Especialidad 1</Form.Label>
              <Form.Control
                type="text"
                value={especialidad1}
                onChange={(e) => setEspecialidad1(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Sección de Foto y Especialidad de Atención */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formFotoMedico">
              <Form.Label>Foto del Médico</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setFotoMedico(e.target.files[0])}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEspecialidadAtencion">
              <Form.Label>Especialidad de Atención</Form.Label>
              <Form.Control
                type="text"
                value={especialidadAtencion}
                onChange={(e) => setEspecialidadAtencion(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Sección de Horarios y Número de Emergencia */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formHorariosAtencion">
              <Form.Label>Horarios de Atención</Form.Label>
              <Form.Control
                type="text"
                value={horariosAtencion}
                onChange={(e) => setHorariosAtencion(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formNumeroEmergencia">
              <Form.Label>Número de Emergencia</Form.Label>
              <Form.Control
                type="text"
                value={numeroEmergencia}
                onChange={(e) => setNumeroEmergencia(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Sección de Usuario y Actualizar Contraseña */}
        <Row className="mb-3">
          <Col md={12}>
            <h4>Usuario</h4>
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

export default RegistroMedico;