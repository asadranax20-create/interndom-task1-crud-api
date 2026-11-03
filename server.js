require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware: JSON data ko parse karne ke liye
app.use(express.json());

// Basic Home Route (Check karne ke liye ke server live hai)
app.get('/', (req, res) => {
  res.send('Task 1: CRUD REST API is running!');
});

// Tasks Route connect kar rahe hain
app.use('/tasks', taskRoutes);

// Port setup
const PORT = process.env.PORT || 5000;

// MongoDB Atlas se Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Atlas Connected Successfully!');
    // Jab database connect ho jaye tab server start karein
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
  });