import { DataTypes } from 'sequelize';

const Paciente = (sequelize) => {
  const PacienteModel = sequelize.define('Paciente', {
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
  PacienteModel.associate = (models) => {
    PacienteModel.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id',
      as: 'usuario',
    });
    PacienteModel.hasMany(models.Cita, {
      foreignKey: 'paciente_id',
      as: 'citas',
    });
  };

  return PacienteModel;
};

export default Paciente;