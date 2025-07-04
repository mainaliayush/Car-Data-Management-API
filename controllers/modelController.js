import { getModelsByMakeIdFromDB, getTrimsByModelIdFromDB } from '../models/modelModel.js';

// Controller: GET /api/makes/:makeId/models
// Fetching all models for a given make ID
export const getModelsByMakeId = async (req, res) => {
  try {
    const { makeId } = req.params;
    const models = await getModelsByMakeIdFromDB(makeId);
    res.json(models);
  } catch (error) {
    console.error('Error fetching models:', error);
    res.status(500).json({ message: 'Server error while fetching models.' });
  }
};

// Controller: GET /api/models/:modelId/trims
// Fetching all trims for a given model ID
export const getTrimsByModelId = async (req, res) => {
  try {
    const { modelId } = req.params;
    const trims = await getTrimsByModelIdFromDB(modelId);
    res.json(trims);
  } catch (error) {
    console.error('Error fetching trims:', error);
    res.status(500).json({ message: 'Server error while fetching trims.' });
  }
};
