// usuarioRoutes.js
import express from 'express';
import { createUsuario } from '../controllers/usuarioController.js';

const router = express.Router();
router.post('/', createUsuario);
export default router;