const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
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
    timestamps: true,  // Crea created_at y updated_at automáticamente
  });

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