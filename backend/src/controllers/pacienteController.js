import Paciente from '../models/PacienteModel.js';

// Crear paciente
export const createPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.create(req.body);
    res.status(201).json(paciente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Buscar pacientes por cédula
export const searchPacientes = async (req, res) => {
  const { cedula } = req.query;
  try {
    const pacientes = await Paciente.find({ cedula: { $regex: cedula, $options: 'i' } });
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};