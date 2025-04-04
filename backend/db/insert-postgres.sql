-- Usuarios para pacientes (10)
INSERT INTO public."Usuarios" (email, password, role, "createdAt", "updatedAt") VALUES
('paciente1@clinica.com', '$2a$10$EjemploHash1', 'paciente', NOW(), NOW()),
('paciente2@clinica.com', '$2a$10$EjemploHash2', 'paciente', NOW(), NOW()),
('paciente3@clinica.com', '$2a$10$EjemploHash3', 'paciente', NOW(), NOW()),
('paciente4@clinica.com', '$2a$10$EjemploHash4', 'paciente', NOW(), NOW()),
('paciente5@clinica.com', '$2a$10$EjemploHash5', 'paciente', NOW(), NOW()),
('paciente6@clinica.com', '$2a$10$EjemploHash6', 'paciente', NOW(), NOW()),
('paciente7@clinica.com', '$2a$10$EjemploHash7', 'paciente', NOW(), NOW()),
('paciente8@clinica.com', '$2a$10$EjemploHash8', 'paciente', NOW(), NOW()),
('paciente9@clinica.com', '$2a$10$EjemploHash9', 'paciente', NOW(), NOW()),
('paciente10@clinica.com', '$2a$10$EjemploHash10', 'paciente', NOW(), NOW());

-- Usuarios para médicos (5)
INSERT INTO public."Usuarios" (email, password, role, "createdAt", "updatedAt") VALUES
('dr.gomez@clinica.com', '$2a$10$EjemploHashM1', 'medico', NOW(), NOW()),
('dr.lopez@clinica.com', '$2a$10$EjemploHashM2', 'medico', NOW(), NOW()),
('dra.martinez@clinica.com', '$2a$10$EjemploHashM3', 'medico', NOW(), NOW()),
('dr.rodriguez@clinica.com', '$2a$10$EjemploHashM4', 'medico', NOW(), NOW()),
('dra.perez@clinica.com', '$2a$10$EjemploHashM5', 'medico', NOW(), NOW());

INSERT INTO public."Pacientes" (nombre, cedula, fecha_nacimiento, peso, altura, "createdAt", "updatedAt", usuario_id) VALUES
('Juan Pérez', 'V12345678', '1985-05-15', 70.5, 1.75, NOW(), NOW(), 1),
('María González', 'V23456789', '1990-08-22', 65.2, 1.68, NOW(), NOW(), 2),
('Carlos Rodríguez', 'V34567890', '1978-11-30', 80.0, 1.80, NOW(), NOW(), 3),
('Ana López', 'V45678901', '1995-03-10', 55.0, 1.60, NOW(), NOW(), 4),
('Pedro Martínez', 'V56789012', '1982-07-18', 90.5, 1.85, NOW(), NOW(), 5),
('Laura Sánchez', 'V67890123', '1992-09-05', 60.0, 1.70, NOW(), NOW(), 6),
('José Ramírez', 'V78901234', '1975-12-25', 75.0, 1.78, NOW(), NOW(), 7),
('Sofía Fernández', 'V89012345', '1988-04-12', 58.0, 1.65, NOW(), NOW(), 8),
('Miguel Torres', 'V90123456', '1998-01-20', 85.0, 1.82, NOW(), NOW(), 9),
('Isabel García', 'V01234567', '1970-06-08', 62.0, 1.63, NOW(), NOW(), 10);

INSERT INTO public."Medicos" (nombre, especialidad, cedula_profesional, horario, "createdAt", "updatedAt", usuario_id) VALUES
('Dr. Carlos Gómez', 'Cardiología', 'CARD-12345', 'Lunes a Viernes 8:00-14:00', NOW(), NOW(), 11),
('Dr. Javier López', 'Pediatría', 'PED-67890', 'Lunes a Viernes 9:00-15:00', NOW(), NOW(), 12),
('Dra. Ana Martínez', 'Neurología', 'NEURO-54321', 'Lunes a Viernes 10:00-16:00', NOW(), NOW(), 13),
('Dr. Luis Rodríguez', 'Medicina General', 'MG-98765', 'Lunes a Viernes 8:00-17:00', NOW(), NOW(), 14),
('Dra. Patricia Pérez', 'Medicina General', 'MG-13579', 'Lunes a Viernes 7:00-14:00', NOW(), NOW(), 15);

INSERT INTO public."Cita" (fecha, hora, motivo, estado, "createdAt", "updatedAt", paciente_id, medico_id) VALUES
('2024-03-15', '09:00:00', 'Control presión arterial', 'completada', NOW(), NOW(), 1, 1),
('2024-03-20', '10:30:00', 'Dolor de cabeza persistente', 'programada', NOW(), NOW(), 2, 3),
('2024-04-05', '11:00:00', 'Chequeo anual', 'programada', NOW(), NOW(), 3, 4),
('2024-04-10', '08:30:00', 'Seguimiento tratamiento', 'cancelada', NOW(), NOW(), 4, 1),
('2024-05-12', '14:00:00', 'Consulta general', 'programada', NOW(), NOW(), 5, 5),
('2024-05-18', '09:30:00', 'Examen de rutina', 'programada', NOW(), NOW(), 6, 2),
('2024-06-02', '10:00:00', 'Dolor en articulaciones', 'programada', NOW(), NOW(), 7, 3),
('2024-06-15', '11:30:00', 'Control diabetes', 'programada', NOW(), NOW(), 8, 1),
('2024-07-05', '08:00:00', 'Vacunación', 'programada', NOW(), NOW(), 9, 2),
('2024-07-20', '13:00:00', 'Consulta por alergias', 'programada', NOW(), NOW(), 10, 4);

INSERT INTO public."HistorialCita" (diagnostico, tratamiento, notas, "createdAt", "updatedAt", cita_id) VALUES
('Hipertensión leve', 'Dieta baja en sodio y ejercicio aeróbico', 'Paciente responde bien al tratamiento', NOW(), NOW(), 1),
('Migraña tensional', 'Analgésicos y terapia de relajación', 'Seguimiento en 1 mes', NOW(), NOW(), 2),
('Salud óptima', 'Continuar con hábitos saludables', 'Próximo chequeo en 1 año', NOW(), NOW(), 3),
('Arritmia controlada', 'Ajuste dosis medicación', 'Monitorizar presión semanal', NOW(), NOW(), 4),
('Resfriado común', 'Reposo y antihistamínicos', 'Síntomas leves', NOW(), NOW(), 5);