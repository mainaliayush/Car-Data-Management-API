import pool from '../db/db.js';

// Fetching all models for a specific make from the database
export const getModelsByMakeIdFromDB = async (makeId) => {
  const query = 'SELECT * FROM models WHERE make_id = $1;';

  try {
    const result = await pool.query(query, [makeId]);
    return result.rows;  // Return array of models
  } catch (error) {
    console.error('Database query error (getModelsByMakeId):', error);
    throw new Error('Failed to fetch models');
  }
};

// Fetching all trims for a specific model from the database
export const getTrimsByModelIdFromDB = async (modelId) => {
  const query = 'SELECT * FROM trims WHERE model_id = $1;';

  try {
    const result = await pool.query(query, [modelId]);
    return result.rows;  // Return array of trims
  } catch (error) {
    console.error('Database query error (getTrimsByModelId):', error);
    throw new Error('Failed to fetch trims');
  }
};
