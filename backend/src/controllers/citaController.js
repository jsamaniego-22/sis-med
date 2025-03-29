import Cita from '../models/CitaModel.js';

// Agendar cita
export const createCita = async (req, res) => {
  try {
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
    const filter = {};
    if (pacienteId) filter.paciente = pacienteId;
    if (medicoId) filter.medico = medicoId;
    const citas = await Cita.find(filter).populate('paciente medico');
    res.json(citas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};