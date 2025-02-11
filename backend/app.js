const express = require('express');
const dbConnect = require('./db');
const authRoutes = require('./routes/Auth');
const userRoutes = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
dbConnect();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
