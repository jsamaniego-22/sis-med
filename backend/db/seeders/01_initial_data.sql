-- Usuarios de prueba
INSERT INTO usuarios (email, password, role) VALUES
  ('admin@clinica.com', '$2a$10$EjemploHash', 'admin'),  -- Contraseña: admin123
  ('dr.gomez@clinica.com', '$2a$10$EjemploHash', 'medico'),
  ('paciente1@clinica.com', '$2a$10$EjemploHash', 'paciente');

-- Médicos
INSERT INTO medicos (usuario_id, nombre, especialidad, cedula_profesional) VALUES
  (2, 'Dr. Carlos Gómez', 'Cardiología', 'CARD-12345');

-- Pacientes
INSERT INTO pacientes (usuario_id, nombre, cedula, fecha_nacimiento) VALUES
  (3, 'Juan Pérez', '123456789', '1985-05-15');

-- Citas
INSERT INTO citas (paciente_id, medico_id, fecha, hora, motivo) VALUES
  (1, 1, '2023-11-20', '09:00:00', 'Control de presión arterial');

-- Historial de citas
INSERT INTO historial_citas (cita_id, diagnostico, tratamiento) VALUES
  (1, 'Hipertensión leve', 'Dieta baja en sodio y ejercicio aeróbico');