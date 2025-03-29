import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Usuario = sequelize.define('Usuario', {
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('paciente', 'medico', 'admin'),
      allowNull: false,
      defaultValue: 'paciente',
    },
    resetPasswordToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resetPasswordExpires: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    timestamps: true,
  });

  // Métodos de instancia
  Usuario.prototype.generateResetToken = function() {
    this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordExpires = Date.now() + 3600000; // 1 hora de expiración
  };

  // Relaciones
  Usuario.associate = (models) => {
    Usuario.hasOne(models.Paciente, {
      foreignKey: 'usuario_id',
      as: 'paciente',
      onDelete: 'CASCADE',
    });
    Usuario.hasOne(models.Medico, {
      foreignKey: 'usuario_id',
      as: 'medico',
      onDelete: 'CASCADE',
    });
  };

  return Usuario;
};