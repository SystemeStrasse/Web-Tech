import express from 'express'
import Table from '../models/tables.models.js'

const router = express.Router()

// route for new table
router.post('/tables', async (req, res) => {
    try {
        console.log(req, body)
        const newTable = new Table(req.body)
        await newTable.save() // save to mongodb
    }
    catch (error) {
        console.error("Error in saving the table:", error)
        res.status(500).json({ message: 'Failed to create the table.', error })
    }
})

router.get('/tables', async (req, res) => {
    try {
        const table = await Table.find()
        res.status(200).json(table)
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching tables.", error })
    }
})

export default router