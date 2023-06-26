const express = require('express');
const { Pool } = require('pg');

const app = express();
require('dotenv').config();
const port = process.env.PORT; // Replace with the appropriate port

// PostgreSQL database connection configuration
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'db_vidyverse',
//   password: 'lacoco',
//   port: 5432, // Replace with the appropriate port
// });

// const pool = new Pool({
//   // connectionString: process.env.POSTGRES_URL + '?sslmode=require',
//   user: process.env.POSTGRES_USER,
//   host: process.env.POSTGRES_HOST,
//   database: process.env.POSTGRES_DATABASE,
//   password: process.env.POSTGRES_PASSWORD,
//   port: process.env.PORT, // Replace with the appropriate port
// });

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + '?sslmode=require',
  // user: 'default',
  // host: 'ep-shiny-smoke-910148-pooler.us-east-1.postgres.vercel-storage.com',
  // database: 'verceldb',
  // password: 'ipz51yGgIVSB',
  // port: process.env.PORT, // Replace with the appropriate port
});

// Enable CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Endpoint to retrieve project data from the Projects table based on IDs
app.get('/projects', async (req, res) => {
  const { ids } = req.query;

  try {
    const client = await pool.connect();
    module.exports = pool;
    const result = await client.query(
      `SELECT * FROM Projects WHERE project_id IN (${ids})`
    );
    const projects = result.rows;
    client.release();

    res.json(projects);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
