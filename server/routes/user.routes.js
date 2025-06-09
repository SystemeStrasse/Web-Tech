import express from 'express';
import User from '../models/user.models.js';

const router = express.Router();

// Route to create a new user
router.post('/users', async (req, res) => {
  try {
    const { email, password, fname, lname } = req.body;

    // Validate required fields
    if (!email || !password || !fname || !lname) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate email format
    const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patternEmail.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Save user
    const user = new User({ email, password, fname, lname });
    await user.save();
    res.status(201).json({ message: 'User created successfully!', user });

  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Failed to create the user.', error });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users.", error });
  }
});

export default router;
