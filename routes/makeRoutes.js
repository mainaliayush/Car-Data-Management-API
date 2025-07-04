import express from 'express';
import { getAllMakes } from '../controllers/makeController.js';

const router = express.Router();

// GET /api/makes
router.get('/', getAllMakes);           // Fetches all car makes from the database

export default router;
