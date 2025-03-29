import createCitaModel from '../models/CitaModel.js';

// Inicializa el modelo (debes pasar sequelize)
// Ejemplo: const Cita = createCitaModel(sequelize);
// Asegúrate de que sequelize esté disponible en este archivo.

// Agendar cita
export const createCita = async (req, res) => {
  try {
    const Cita = createCitaModel(req.db); // Asume que req.db contiene sequelize
    const cita = await Cita.create(req.body);
    res.status(201).json(cita);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener citas por paciente o médico
export const getCitas = async (req, res) => {
  const { pacienteId, medicoId } = req.query;
  try {
    const Cita = createCitaModel(req.db); // Asume que req.db contiene sequelize
    const filter = {};
    if (pacienteId) filter.paciente_id = pacienteId;
    if (medicoId) filter.medico_id = medicoId;

    const citas = await Cita.findAll({ 
      where: filter,
      include: ['paciente', 'medico'], // Sequelize usa "include" en lugar de "populate"
    });
    res.json(citas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};