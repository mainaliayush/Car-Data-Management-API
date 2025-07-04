import express from 'express';
import { getModelsByMakeId, getTrimsByModelId } from '../controllers/modelController.js';

const router = express.Router();

// GET /api/makes/:makeId/models
router.get('/makes/:makeId/models', getModelsByMakeId);         // List all models for a given make

// GET /api/models/:modelId/trims
router.get('/models/:modelId/trims', getTrimsByModelId);        // List all trims for a given model

export default router;
