````markdown
# Car Inventory API

A lightweight RESTful API for managing car dealership data — makes, models, trims, and features. 

## Project Overview

This API supports management of car data including:  
-  Makes: Car manufacturers (e.g., Toyota, Honda)  
-  Models: Specific car models linked to makes (e.g., Camry)  
-  Trims: Variants of models with pricing (e.g., XLE trim)  
-  Features: Optional features with individual costs (e.g., Navigation System)  
-  Relationships are implemented with proper SQL foreign keys and many-to-many join tables (e.g., trims to features).

````
## Setup Instructions

### Prerequisites

- Node.js (v16 or higher recommended)  
- PostgreSQL (v12 or higher) installed and running  
- `npm` package manager

---

### 1. Clone the repository and Install dependencies

```bash
git clone Car-Data-Management-API
npm install
```

### 2. Configure PostgreSQL connection

Create a `.env` file in the root directory with your PostgreSQL credentials:

```env
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=car_inventory
PORT=3001
```

Make sure your PostgreSQL user and database exist and have appropriate privileges.

---

### 3. Create database schema and seed sample data

Run the SQL scripts to create tables and insert sample data.

```bash
psql -U your_postgres_username -d car_inventory -f db/schema.sql
psql -U your_postgres_username -d car_inventory -f db/seed.sql
```

---

## Project Structure

* **db/**
  Contains SQL scripts: `schema.sql` (table creation) and `seed.sql` (sample data insertions).

* **models/**
  Contains database query functions that interact with PostgreSQL using `pg` and SQL queries.

* **controllers/**
  Contains request handler logic calling model functions and responding to client requests.

* **routes/**
  Defines Express routers mapping endpoints to controllers.

* **index.js**
  Entry point that configures Express, connects to DB, and mounts routes.

---

## Available API Endpoints

* `GET /api/makes`
  List all car makes.

* `GET /api/makes/:makeId/models`
  List all models for a specific make.

* `GET /api/models/:modelId/trims`
  List all trims for a specific model.

* `GET /api/trims/:trimId`
  Get detailed information about a specific trim, including features and pricing.

---

## Running the Application

### Development Mode (with automatic reload)

```bash
npm run dev
```

The server will start on `http://localhost:3001` (or the port set in your `.env`).

---

## Testing the API

Use `curl`, Postman, or any HTTP client to test endpoints. Using `curl` in your terminal:

```bash
curl http://localhost:3001/api/makes
curl http://localhost:3001/api/makes/1/models
curl http://localhost:3001/api/models/1/trims
curl http://localhost:3001/api/trims/1
```

---

## Notes

* This API uses PostgreSQL connection pooling with the `pg` package.
* Basic error handling is implemented for all endpoints.
* Designed to be lightweight and easily extensible for future integration with frontend applications.

---
