// usuarioController.js
import bcrypt from 'bcrypt';
import { models } from '../models/index.js';
const { Usuario } = models; // Obtén el modelo desde la exportación

export const createUsuario = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    
    // Validar si el email ya existe
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const usuario = await Usuario.create({ email, password: hashedPassword, role });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
