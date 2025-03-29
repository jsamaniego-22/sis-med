const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Paciente = sequelize.define('Paciente', {
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    cedula: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    timestamps: true,
  });

  // Relaciones
  Paciente.associate = (models) => {
    Paciente.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id',
      as: 'usuario',
    });
    Paciente.hasMany(models.Cita, {
      foreignKey: 'paciente_id',
      as: 'citas',
    });
  };

  return Paciente;
};