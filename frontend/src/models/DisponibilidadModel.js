// src/models/DisponibilidadModel.js

const DisponibilidadModel = {
    medico: {
      type: String, // ID del médico
      ref: 'Medico',
      required: true,
      unique: true
    },
    diasLaborales: {
      type: [String],
      enum: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      required: true
    },
    horario: {
      inicio: {
        type: String,
        required: true,
        match: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
      },
      fin: {
        type: String,
        required: true,
        match: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
      }
    },
    diasNoDisponibles: [Date], // Días específicos no disponibles
    citasProgramadas: [{
      type: String, // IDs de citas
      ref: 'Cita'
    }]
  };
  
  export default DisponibilidadModel;