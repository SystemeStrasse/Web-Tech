import express from 'express';
import User from '../models/user.models.js';

const router = express.Router();

// Route to ceate a new user
router.post('/users', async (req, res) => {
    try {
        const {email} = req.body
        const patternEmail = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
        if (!email || !patternEmail.test(email)) {
            return res.status(400).json({message: 'Invalid Email Format'})
        }

        console.log(req.body); //log the payload
        const user = new User(req.body);
        await user.save(); // save to MongoDB Atlas
        res.status(201).json({ message: 'User created successfully!', user });
    } catch (error) {
        console.error('Error saving user:', error); // Log the error
        req.status(500).json({ message: 'Failed to create the user.', error });
    }
})

router.get('/users', async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: "Error...", error });
    }
}
);

export default router;