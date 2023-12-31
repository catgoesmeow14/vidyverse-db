const express = require('express');
const { Pool } = require('pg');

const app = express();
require('dotenv').config();
const port = process.env.PORT; // Port for the web server, set via environment variables

// PostgreSQL database connection configuration
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + '?sslmode=require',
});

// CORS middleware setup for handling cross-origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Basic endpoint to check API connectivity
app.get('/', async (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

// GET endpoint to retrieve project data based on ID
app.get('/project', async (req, res) => {
  const { id } = req.query;

  try {
    const client = await pool.connect();
    const result = await client.query(
      `SELECT * FROM project WHERE project_id IN (${id})`
    );
    const project = result.rows;
    client.release();

    res.json(project);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Placeholder for POST endpoint
// TODO: Implement POST endpoint to create new project entries
// This will allow users to add new projects to the database.
// app.post('/project', async (req, res) => {
//   // Implementation goes here
// });

// Placeholder for PUT endpoint
// TODO: Implement PUT endpoint to update existing project entries
// This will enable users to modify details of existing projects.
// app.put('/project/:id', async (req, res) => {
//   // Implementation goes here
// });

// Placeholder for DELETE endpoint
// TODO: Implement DELETE endpoint to remove project entries
// This will allow users to delete projects from the database.
// app.delete('/project/:id', async (req, res) => {
//   // Implementation goes here
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the Express API
module.exports = app;
