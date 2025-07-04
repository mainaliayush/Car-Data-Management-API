import { getAllMakesFromDB } from '../models/makeModel.js';

// Controller: Handle GET /api/makes
export const getAllMakes = async (req, res) => {
  try {
    // Fetching all car makes from the database model
    const makes = await getAllMakesFromDB();
    res.json(makes);
  } catch (error) {
    console.error('Error fetching makes:', error);
    res.status(500).json({ message: 'Server error while fetching makes.' });
  }
};
