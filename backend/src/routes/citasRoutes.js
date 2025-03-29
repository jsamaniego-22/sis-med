import express from 'express';
import { createCita, getCitas } from '../controllers/citaController.js';

const router = express.Router();

router.post('/', createCita);
router.get('/', getCitas);

export default router;