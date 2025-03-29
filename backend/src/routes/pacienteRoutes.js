import express from 'express';
import { createPaciente, searchPacientes } from '../controllers/pacienteController.js';

const router = express.Router();

router.post('/', createPaciente);
router.get('/search', searchPacientes);

export default router;