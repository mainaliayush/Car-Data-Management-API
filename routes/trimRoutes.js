import express from 'express';
import { getTrimDetails } from '../controllers/trimController.js';

const router = express.Router();

// GET /api/trims/:trimId
router.get('/:trimId', getTrimDetails);         // Get detailed info for a specific trim, including features and pricing

export default router;
