const dotenv = require('dotenv');
dotenv.config(); // Ensure this is at the very beginning

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Add error handling for unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

// Add error handling for uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception thrown:', err);
  // Application specific logging, throwing an error, or other logic here
  process.exit(1); // Exit the process to avoid unknown state
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
