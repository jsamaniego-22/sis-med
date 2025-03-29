// src/models/PacienteModel.js

const PacienteModel = {
    // Datos personales
    nombre: {
      type: String,
      required: true,
      maxLength: 50
    },
    apellido: {
      type: String,
      required: true,
      maxLength: 50
    },
    cedula: {
      type: String,
      required: true,
      unique: true,
      maxLength: 20
    },
    fechaNacimiento: {
      type: Date,
      required: true
    },
    edad: {
      type: Number,
      required: true,
      min: 0,
      max: 120
    },
    nacionalidad: {
      type: String,
      required: true,
      maxLength: 50
    },
    paisNacimiento: {
      type: String,
      required: true,
      maxLength: 50
    },
  
    // Información médica
    peso: {
      type: Number,
      required: true,
      min: 0,
      max: 300 // kg
    },
    altura: {
      type: Number,
      required: true,
      min: 0,
      max: 250 // cm
    },
    fechaUltimaVisita: {
      type: Date,
      required: true
    },
    diagnostico: {
      type: String,
      required: false,
      maxLength: 1000
    },
    medicoCabecera: {
      type: String,
      required: true,
      maxLength: 100,
      ref: 'Medico' // Relación con el modelo de Médico
    },
  
    // Información de padecimientos
    tienePadecimiento: {
      type: String,
      required: true,
      enum: ['Si', 'No']
    },
    especialista: {
      type: String,
      required: function() { return this.tienePadecimiento === 'Si'; },
      enum: ['Cardiólogo', 'Endocrinólogo', 'Neurólogo', 'Oncólogo', 'Reumatólogo']
    },
    reseñaPadecimiento: {
      type: String,
      required: function() { return this.tienePadecimiento === 'Si'; },
      maxLength: 1000
    },
  
    // Información de contacto
    correo: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/ // Validación básica de email
    },
    celular: {
      type: String,
      required: true,
      maxLength: 20
    },
    numeroEmergencia: {
      type: String,
      required: true,
      maxLength: 20
    },
  
    // Campos adicionales
    historialMedico: [{
      fecha: Date,
      diagnostico: String,
      tratamiento: String,
      notas: String
    }],
  
    activo: {
      type: Boolean,
      default: true
    },
    fechaRegistro: {
      type: Date,
      default: Date.now
    }
  };
  
  export default PacienteModel;