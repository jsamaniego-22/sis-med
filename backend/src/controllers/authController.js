import User from '../models/UserModel.js';
import jwt from 'jsonwebtoken';

// Registro de usuario (paciente o médico)
export const register = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const user = await User.create({ email, password, role });
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Usuario no encontrado");
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// Recuperar contraseña
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Email no registrado");
    user.generateResetToken(); // Método del modelo User
    await user.save();
    res.json({ success: true, message: "Token generado" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};