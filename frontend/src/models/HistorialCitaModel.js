// src/models/HistorialCitaModel.js

const HistorialCitaModel = {
  // Relación con el paciente
  paciente: {
    id: {
      type: String,
      required: true,
      ref: 'Paciente'
    },
    nombreCompleto: {
      type: String,
      required: true
    },
    cedula: {
      type: String,
      required: true
    }
  },

  // Relación con el médico
  medico: {
    id: {
      type: String,
      required: true,
      ref: 'Medico'
    },
    nombre: {
      type: String,
      required: true
    },
    especialidad: {
      type: String,
      required: true
    }
  },

  // Detalles de la cita
  fechaCita: {
    type: Date,
    required: true
  },
  horaCita: {
    type: String,
    required: true,
    match: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/ // Formato HH:MM
  },
  motivoConsulta: {
    type: String,
    required: true,
    maxLength: 500
  },
  diagnostico: {
    type: String,
    required: false,
    maxLength: 1000
  },
  tratamiento: {
    type: String,
    required: false,
    maxLength: 1000
  },
  notasMedicas: {
    type: String,
    required: false,
    maxLength: 2000
  },

  // Estado y seguimiento
  estado: {
    type: String,
    enum: ['Programada', 'Completada', 'Cancelada', 'No asistió'],
    default: 'Programada',
    required: true
  },
  siguienteCita: {
    type: Date,
    required: false
  },

  // Auditoría
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now
  },
  creadoPor: {
    type: String,
    ref: 'Usuario',
    required: true
  }
};

// Métodos del modelo (si se usa con Mongoose)
HistorialCitaModel.methods = {
  completarCita: function(diagnostico, tratamiento, notas) {
    this.estado = 'Completada';
    this.diagnostico = diagnostico;
    this.tratamiento = tratamiento;
    this.notasMedicas = notas;
    this.fechaActualizacion = new Date();
  },
  cancelarCita: function(motivo) {
    this.estado = 'Cancelada';
    this.notasMedicas = motivo ? `Cancelación: ${motivo}` : 'Cita cancelada';
    this.fechaActualizacion = new Date();
  },
  reprogramarCita: function(nuevaFecha, nuevaHora) {
    this.siguienteCita = nuevaFecha;
    this.notasMedicas = `Reprogramada para ${nuevaFecha} a las ${nuevaHora}`;
    this.fechaActualizacion = new Date();
  }
};

export default HistorialCitaModel;