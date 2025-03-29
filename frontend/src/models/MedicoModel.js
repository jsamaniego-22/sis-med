// src/models/MedicoModel.js

const MedicoModel = {
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
    estadoCivil: {
      type: String,
      required: true,
      enum: ['Soltero', 'Casado', 'Divorciado', 'Viudo']
    },
    sexo: {
      type: String,
      required: true,
      enum: ['Masculino', 'Femenino', 'Otro', 'Prefiero no decir']
    },
  
    // Información profesional
    anoFinalizacion: {
      type: Number,
      required: true,
      min: 1900,
      max: new Date().getFullYear()
    },
    tituloPrincipal: {
      type: String,
      required: true,
      maxLength: 100
    },
    especialidad: {
      type: String,
      required: true,
      enum: [
        "Cardiología",
        "Dermatología",
        "Endocrinología",
        "Gastroenterología",
        "Neurología",
        "Oncología",
        "Pediatría",
        "Psiquiatría"
      ]
    },
    especialidadAtencion: {
      type: String,
      required: true,
      enum: [
        "Cardiología",
        "Dermatología",
        "Endocrinología",
        "Gastroenterología",
        "Neurología",
        "Oncología",
        "Pediatría",
        "Psiquiatría"
      ]
    },
    fotoMedico: {
      type: String, // URL o path de la imagen
      required: false
    },
  
    // Horarios de atención
    horarios: {
      lunes: {
        mañana: Boolean,
        tarde: Boolean
      },
      martes: {
        mañana: Boolean,
        tarde: Boolean
      },
      miércoles: {
        mañana: Boolean,
        tarde: Boolean
      },
      jueves: {
        mañana: Boolean,
        tarde: Boolean
      },
      viernes: {
        mañana: Boolean,
        tarde: Boolean
      },
      sábado: {
        mañana: Boolean,
        tarde: Boolean
      }
    },
  
    // Información de contacto
    correo: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/ // Expresión regular simple para email
    },
    numeroEmergencia: {
      type: String,
      required: true,
      maxLength: 20
    },
  
    // Campos adicionales que podrían ser útiles
    activo: {
      type: Boolean,
      default: true
    },
    fechaRegistro: {
      type: Date,
      default: Date.now
    }
  };
  
  export default MedicoModel;