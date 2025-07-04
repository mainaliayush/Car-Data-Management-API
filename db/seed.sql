-- Clear all data and reset IDs in all tables
TRUNCATE trim_features, features, trims, models, makes RESTART IDENTITY CASCADE;

-- Insert sample car makes
INSERT INTO makes (name) VALUES 
  ('Toyota'), 
  ('Honda'), 
  ('Ford'), 
  ('Chevrolet'),
  ('BMW');

-- Insert sample models linked to makes by make_id
INSERT INTO models (name, make_id) VALUES
  ('Camry', 1),
  ('Civic', 2),
  ('F-150', 3),
  ('Malibu', 4),
  ('3 Series', 5);

-- Insert trims with model association and base price
INSERT INTO trims (name, model_id, base_price) VALUES
  ('XLE', 1, 28000),
  ('EX', 2, 25000),
  ('Lariat', 3, 40000),
  ('Premier', 4, 27000),
  ('M340i', 5, 54000);

-- Insert features with individual prices
INSERT INTO features (name, price) VALUES
  ('Navigation System', 1000),
  ('Sunroof', 1200),
  ('Leather Seats', 1500),
  ('Heated Seats', 800),
  ('Wireless Charging', 600);

-- Map trims to their available features (many-to-many)
INSERT INTO trim_features (trim_id, feature_id) VALUES
  (1, 1), -- Camry XLE: Navigation System
  (1, 2), -- Camry XLE: Sunroof
  (2, 3), -- Civic EX: Leather Seats
  (3, 1), -- F-150 Lariat: Navigation System
  (3, 4), -- F-150 Lariat: Heated Seats
  (4, 2), -- Malibu Premier: Sunroof
  (4, 5), -- Malibu Premier: Wireless Charging
  (5, 1), -- BMW M340i: Navigation System
  (5, 2), -- BMW M340i: Sunroof
  (5, 3); -- BMW M340i: Leather Seats
