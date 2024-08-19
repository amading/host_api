const express = require('express');
const { createPool } = require('mysql');

const app = express();
const port = 3000;

// Create a MySQL connection pool
const pool = createPool({
    host: "192.168.1.99", // Replace with localhost if MySQL is on the same machine
    user: "root",
    password: "secret",
    database: "priority_numbers"
});

// Define a route to get all priority numbers
app.get('/api/priority-numbers', (req, res) => {
    pool.query('SELECT * FROM priority_numbers', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
