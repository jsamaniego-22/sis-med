import express from 'express';
import cors from 'cors';
import { sequelize } from './src/models/index.js';
import authRoutes from './src/routes/authRoutes.js';
import medicoRoutes from './src/routes/medicoRoutes.js';
import pacienteRoutes from './src/routes/pacienteRoutes.js';
import citasRoutes from './src/routes/citasRoutes.js';
import 'dotenv/config';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/medicos', medicoRoutes);
app.use('/api/pacientes', pacienteRoutes);
app.use('/api/citas', citasRoutes);

// Sincronizar BD y arrancar servidor
const PORT = process.env.PORT || 3000;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
  });
});