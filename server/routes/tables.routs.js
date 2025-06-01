import express from 'express'
import Table from '../models/table.models.js'

const router = express.Router()

// route to new table
router.post('/tables', async (req, res) => {
    try{
        console.log(req, body)
        const table = new Table(req, body)
        await table.save() // save to mongodb
    }
    catch (error) {
        console.error("Error in saving the table:", error)
        res.status(500).json({ message: 'Failed to create the table.', error })
    }
})