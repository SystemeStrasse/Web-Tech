
import express from 'express';
import Table from '../models/tables.models.js';

const router = express.Router();

// Create a new table booking
router.post('/tables', async (req, res) => {
  try {
    const { date, time, tableNumber } = req.body;

    const existingBooking = await Table.findOne({ date, time, tableNumber });

    if (existingBooking) {
      return res.status(409).json({
        message: 'This table is already booked for the selected date and time.',
      });
    }

    // If not booked, proceed to save
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

