import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// Middlewares
const app = express();
app.use(cors());
app.use(express.json());

// Rutas
import citasRoutes from './src/routes/citasRoutes.js';
app.use('/api/citas', citasRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));