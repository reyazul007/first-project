const express = require("express");
const dbConnect = require("./db");
const userRoutes = require("./routes/user");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
dbConnect();

// Middleware
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
