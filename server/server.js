const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Task Routes
app.use('/api/tasks', require('./routes/taskRoutes'));

// Test Route
app.get('/', (req, res) => {
  res.send('API is running without DB...');
});

// Server Startup (Without Mongoose for now)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (No DB connected yet)`);
});