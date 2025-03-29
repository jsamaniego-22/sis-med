const UserModel = {
  // Datos básicos de autenticación
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/, // Validación de email
    maxLength: 100,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  role: {
    type: String,
    enum: ["paciente", "medico", "admin"],
    required: true,
    default: "paciente",
  },

  // Relaciones con otros modelos (según el rol)
  pacienteId: {
    type: String,
    ref: "Paciente",
    required: function () {
      return this.role === "paciente";
    },
  },
  medicoId: {
    type: String,
    ref: "Medico",
    required: function () {
      return this.role === "medico";
    },
  },

  // Datos adicionales para autenticación
  isVerified: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: {
    type: String,
    required: false,
  },
  resetPasswordExpires: {
    type: Date,
    required: false,
  },
  lastLogin: {
    type: Date,
    required: false,
  },
};

// Métodos del modelo (ejemplo para Mongoose)
UserModel.methods = {
  generateResetToken: function () {
    // Lógica para generar token de recuperación
    this.resetPasswordToken = "generated-token";
    this.resetPasswordExpires = Date.now() + 3600000; // 1 hora de expiración
  },
};

export default UserModel;