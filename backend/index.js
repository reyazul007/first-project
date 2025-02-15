const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const authRoutes = require('./routes/Auth');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for React frontend
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));