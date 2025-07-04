import { getTrimDetailsFromDB } from '../models/trimModel.js';

// Controller: GET /api/trims/:trimId
// Fetching detailed info about a specific trim, including features and pricing
export const getTrimDetails = async (req, res) => {
  try {
    const { trimId } = req.params;
    const trim = await getTrimDetailsFromDB(trimId);
    res.json(trim);
  } catch (error) {
    console.error('Error fetching trim details:', error);
    res.status(500).json({ message: 'Server error while fetching trim details.' });
  }
};
