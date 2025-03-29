import { DataTypes } from 'sequelize';

const HistorialCita = (sequelize) => {
  const HistorialCitaModel = sequelize.define('HistorialCita', {
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
  HistorialCitaModel.associate = (models) => {
    HistorialCitaModel.belongsTo(models.Cita, {
      foreignKey: 'cita_id',
      as: 'cita',
    });
  };

  return HistorialCitaModel;
};

export default HistorialCita;