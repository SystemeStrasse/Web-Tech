import express from 'express';
import Table from '../models/tables.models.js';

const router = express.Router();

// Create a new table booking
router.post('/tables', async (req, res) => {
  try {
    console.log('Received booking:', req.body);
    const table = new Table(req.body);
    await table.save();
    res.status(201).json({ message: 'Table booking created successfully!', table });
  } catch (error) {
    console.error('Error saving table booking:', error);
    res.status(500).json({ message: 'Failed to create the table booking.', error });
  }
});

// Get all table bookings
router.get('/tables', async (req, res) => {
  try {
    const bookings = await Table.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching table bookings.", error });
  }
});

export default router;
