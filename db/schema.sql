-- Drop tables if they exist to reset schema
DROP TABLE IF EXISTS trim_features, features, trims, models, makes;

-- Car manufacturers table
CREATE TABLE makes (
  id SERIAL PRIMARY KEY,     -- Unique make ID
  name TEXT NOT NULL         -- Make name (e.g., Toyota)
);

-- Car models table linked to makes
CREATE TABLE models (
  id SERIAL PRIMARY KEY,     -- Unique model ID
  name TEXT NOT NULL,        -- Model name (e.g., Camry)
  make_id INTEGER REFERENCES makes(id) ON DELETE CASCADE  -- Foreign key to makes, deletes models if make deleted
);

-- Trims table linked to models
CREATE TABLE trims (
  id SERIAL PRIMARY KEY,     -- Unique trim ID
  name TEXT NOT NULL,        -- Trim name (e.g., XLE)
  model_id INTEGER REFERENCES models(id) ON DELETE CASCADE,  -- Foreign key to models, cascades deletes
  base_price NUMERIC NOT NULL -- Base price of the trim
);

-- Features table with price for each feature
CREATE TABLE features (
  id SERIAL PRIMARY KEY,     -- Unique feature ID
  name TEXT NOT NULL,        -- Feature name (e.g., Navigation System)
  price NUMERIC NOT NULL     -- Price of the feature
);

-- Join table for many-to-many relation between trims and features
CREATE TABLE trim_features (
  id SERIAL PRIMARY KEY,     -- Unique ID for join entry
  trim_id INTEGER REFERENCES trims(id) ON DELETE CASCADE,      -- Foreign key to trims
  feature_id INTEGER REFERENCES features(id) ON DELETE CASCADE  -- Foreign key to features
);
