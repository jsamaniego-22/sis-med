const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const HistorialCita = sequelize.define('HistorialCita', {
    diagnostico: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tratamiento: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    notas: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    timestamps: true,
  });

  // Relación 1:1 con Cita
  HistorialCita.associate = (models) => {
    HistorialCita.belongsTo(models.Cita, {
      foreignKey: 'cita_id',
      as: 'cita',
    });
  };

  return HistorialCita;
};