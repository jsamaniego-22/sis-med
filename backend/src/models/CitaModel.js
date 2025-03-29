import { DataTypes } from 'sequelize';

const CitaModel = (sequelize) => {
  const Cita = sequelize.define('Cita', {
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    motivo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM('programada', 'completada', 'cancelada'),
      defaultValue: 'programada',
    },
  }, {
    timestamps: true,
  });

  // Relaciones
  Cita.associate = (models) => {
    Cita.belongsTo(models.Paciente, {
      foreignKey: 'paciente_id',
      as: 'paciente',
    });
    Cita.belongsTo(models.Medico, {
      foreignKey: 'medico_id',
      as: 'medico',
    });
    Cita.hasOne(models.HistorialCita, {
      foreignKey: 'cita_id',
      as: 'historial',
    });
  };

  return Cita;
};

export default CitaModel;  // Exportación por defecto