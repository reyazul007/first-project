const mongoose = require('mongoose');
const MONGO_URI = "mongodb://localhost:27017/codepen";

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};

module.exports = dbConnect;