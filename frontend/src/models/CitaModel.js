// src/models/CitaModel.js

const CitaModel = {
  // Información del paciente (relación con el modelo Paciente)
  paciente: {
    type: String, // ID del paciente
    ref: 'Paciente',
    required: true
  },

  // Información del médico (relación con el modelo Medico)
  medico: {
    id: {
      type: String, // ID del médico
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
    },
    foto: {
      type: String // URL de la foto
    }
  },

  // Detalles de la cita
  fecha: {
    type: Date,
    required: true,
    validate: {
      validator: function(value) {
        // Validar que la fecha sea futura
        return value > new Date();
      },
      message: 'La fecha de la cita debe ser futura'
    }
  },
  hora: {
    type: String,
    required: true,
    match: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/ // Formato HH:MM
  },
  motivo: {
    type: String,
    required: true,
    maxLength: 500
  },

  // Estado de la cita
  estado: {
    type: String,
    enum: ['Pendiente', 'Confirmada', 'Completada', 'Cancelada'],
    default: 'Pendiente'
  },

  // Fecha de creación y última actualización
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now
  },

  // Notas adicionales (usadas por el médico)
  notasMedico: {
    type: String,
    maxLength: 1000
  }
};

// Métodos del modelo (si se usa con Mongoose)
CitaModel.methods = {
  confirmar: function() {
    this.estado = 'Confirmada';
    this.fechaActualizacion = new Date();
  },
  cancelar: function() {
    this.estado = 'Cancelada';
    this.fechaActualizacion = new Date();
  },
  completar: function() {
    this.estado = 'Completada';
    this.fechaActualizacion = new Date();
  }
};

export default CitaModel;