import express from 'express';
import cors from 'cors';
import { sequelize, models } from './models/index.js';
import authRoutes from './routes/authRoutes.js';
import medicoRoutes from './routes/medicoRoutes.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import pacienteRoutes from './routes/pacienteRoutes.js';
import citasRoutes from './routes/citasRoutes.js';
import 'dotenv/config';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

console.log(sequelize.models)
// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/medicos', medicoRoutes);
app.use('/api/pacientes', pacienteRoutes);
app.use('/api/citas', citasRoutes);
app.use('/api/usuarios', usuarioRoutes);

// Sincronizar BD y arrancar servidor
const PORT = process.env.PORT || 5000;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
  });
});