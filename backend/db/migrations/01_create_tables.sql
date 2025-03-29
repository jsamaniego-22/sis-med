-- Tabla 'usuarios' (para autenticación)
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('paciente', 'medico', 'admin')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabla 'pacientes' (relacionada con usuarios)
CREATE TABLE pacientes (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
  nombre VARCHAR(50) NOT NULL,
  cedula VARCHAR(20) UNIQUE NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla 'medicos' (relacionada con usuarios)
CREATE TABLE medicos (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
  nombre VARCHAR(50) NOT NULL,
  especialidad VARCHAR(50) NOT NULL,
  cedula_profesional VARCHAR(20) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla 'citas'
CREATE TABLE citas (
  id SERIAL PRIMARY KEY,
  paciente_id INTEGER REFERENCES pacientes(id) ON DELETE CASCADE,
  medico_id INTEGER REFERENCES medicos(id) ON DELETE CASCADE,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  estado VARCHAR(20) DEFAULT 'programada' CHECK (estado IN ('programada', 'completada', 'cancelada')),
  motivo TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla 'historial_citas' (relacionada con citas)
CREATE TABLE historial_citas (
  id SERIAL PRIMARY KEY,
  cita_id INTEGER REFERENCES citas(id) ON DELETE CASCADE,
  diagnostico TEXT,
  tratamiento TEXT,
  notas TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);