import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import pool from './db/db.js';

import makeRoutes from './routes/makeRoutes.js';
import modelRoutes from './routes/modelRoutes.js';
import trimRoutes from './routes/trimRoutes.js';

dotenv.config(); 

const server = express();
const port = process.env.PORT || 3001;

server.use(cors());           // Enabling CORS for cross-origin requests
server.use(express.json());   // Parsing JSON request bodies

// Making connection to PostgresSQL database 
pool.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
  } else {
    console.log('✅ Connected to the database!!');
  }
});

// Base route for quick server check
server.get('/', (req, res) => {
  res.send('Connected to backend!!');
});

// Route handlers
server.use('/api/makes', makeRoutes);
server.use('/api/', modelRoutes);
server.use('/api/trims', trimRoutes);

// Starting server on specified port
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} !!`);
});
