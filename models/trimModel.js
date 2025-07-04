import pool from '../db/db.js';

// Fetching detailed information about a specific trim, including make, model, base price, features, and total price calculation
export const getTrimDetailsFromDB = async (trimId) => {
  const query = `
    SELECT 
      trims.name AS trim,
      models.name AS model,
      makes.name AS make,
      trims.base_price,
      features.name AS feature_name,
      features.price AS feature_price
    FROM trims
    JOIN models ON trims.model_id = models.id
    JOIN makes ON models.make_id = makes.id
    LEFT JOIN trim_features ON trims.id = trim_features.trim_id
    LEFT JOIN features ON trim_features.feature_id = features.id
    WHERE trims.id = $1;
  `;

  try {
    const result = await pool.query(query, [trimId]);
    const rows = result.rows;

    if (rows.length === 0) return null; // If no trim is found for given ID

    const { trim, model, make, base_price } = rows[0];

    // Extracting features and their prices, filtering out null feature names
    const features = rows
      .filter(r => r.feature_name !== null)
      .map(r => ({
        name: r.feature_name,
        price: r.feature_price
      }));

    // Parsing base price to float for calculation
    const parsedBasePrice = parseFloat(base_price);

    // Totaling the feature prices (parsed as floats)
    const total_feature_cost = features.reduce(
      (sum, f) => sum + parseFloat(f.price),
      0
    );

    // Calculating total price (base + features)
    const total_price = parsedBasePrice + total_feature_cost;

    // Returning aggregated trim details
    return { trim, model, make, base_price, features, total_price };

  } catch (error) {
    console.error('Database query error (getTrimDetails):', error);
    throw new Error('Failed to fetch trim details');
  }
};
