const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const papersRouter = require('./frontend/backend/routes/papers');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/research', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/papers', papersRouter);

// Default route (for testing)
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Start server
const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
