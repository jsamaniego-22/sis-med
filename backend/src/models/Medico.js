const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Medico = sequelize.define('Medico', {
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    especialidad: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    cedula_profesional: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    horario: {
      type: DataTypes.TEXT,  // Ej: "Lunes a Viernes, 8:00 AM - 4:00 PM"
      allowNull: true,
    },
  }, {
    timestamps: true,
  });

  // Relaciones
  Medico.associate = (models) => {
    Medico.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id',
      as: 'usuario',
    });
    Medico.hasMany(models.Cita, {
      foreignKey: 'medico_id',
      as: 'citas',
    });
  };

  return Medico;
};