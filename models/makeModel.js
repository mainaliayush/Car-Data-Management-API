import pool from '../db/db.js';

// Fetching all car makes from the database
export const getAllMakesFromDB = async () => {
  const query = 'SELECT * FROM makes;';

  try {
    const result = await pool.query(query);
    return result.rows;  // Returning array of makes
  } catch (error) {
    console.error('Database query error (getAllMakes):', error);
    throw new Error('Failed to fetch makes');
  }
};
