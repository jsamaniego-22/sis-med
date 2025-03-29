import Medico from '../models/Medico.js';

// Crear médico (relacionado con UserModel)
export const createMedico = async (req, res) => {
  try {
    const medico = await Medico.create(req.body);
    res.status(201).json(medico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los médicos
export const getMedicos = async (req, res) => {
  try {
    const medicos = await Medico.find();
    res.json(medicos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};