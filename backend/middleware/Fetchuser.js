const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

const fetchUser = async (req, res, next) => {
  // Get the JWT token from the request header
  const token = req.header('auth-token');
  
  // If no token exists, return an error
  if (!token) {
    return res.status(401).json({ error: 'Please authenticate using a valid token' });
  }

  try {
    // Verify the token using the JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Find the user in the database using the decoded `userId` from the token
    const user = await User.findById(decoded.userId).select('-password');
    
    // If user not found, return an error
    if (!user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Attach the user object to the request
    req.user = user;
    
    // Move to the next middleware/route handler
    next();
  } catch (error) {
    // Handle invalid tokens or server errors
    res.status(401).json({ error: 'Please authenticate using a valid token' });
  }
};

module.exports = fetchUser;