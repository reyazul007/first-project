const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/Fetchuser");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Route to create a new user
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "User already exists with this email" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user._id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ user, authToken });
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  }
);

// Route to login a user
router.post(
  "/login",
  [body("email").isEmail(), body("password").isLength({ min: 8 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Please register your email first" });
      }
      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        return res.status(400).json({ error: "Password doesn't match" });
      }
      const data = {
        user: {
          id: user._id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ user, authToken });
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  }
);

// Route to get user data
router.get("/getuser", fetchUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

module.exports = router;