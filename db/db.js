import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Loading environment variables from .env

const { Pool } = pg;

// Creating a new PostgreSQL connection pool using environment variables
const pool = new Pool({
    user: process.env.DB_USER,       // DB username
    host: process.env.DB_HOST,       // DB host address
    database: process.env.DB_NAME,   // Database name
    password: process.env.DB_PASSWORD, // DB password
    port: process.env.DB_PORT,       // DB port number
});

export default pool; 
