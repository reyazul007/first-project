const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/Fetchuser');
const User = require('../models/User');

// Protected route: Get logged-in user details
router.get('/getuser', fetchUser, async (req, res) => {
  try {
    // The user is already attached to `req` by the middleware
    const user = req.user;
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;