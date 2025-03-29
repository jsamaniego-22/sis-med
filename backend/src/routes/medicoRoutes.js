import express from 'express';
import { createMedico, getMedicos } from '../controllers/medicoController.js';

const router = express.Router();

router.post('/', createMedico);
router.get('/', getMedicos);

export default router;