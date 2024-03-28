const express = require('express');
const router = express.Router();
const RoadTrip = require('../models/RoadTrip');

// Create a new road trip
router.post('/', async (req, res) => {
    try {
        const newRoadTrip = new RoadTrip(req.body);
        await newRoadTrip.save();
        res.status(201).json(newRoadTrip);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a specific road trip by ID
router.put('/:id', async (req, res) => {
    try {
        const roadTrip = await RoadTrip.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(roadTrip);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a specific road trip by ID
router.delete('/:id', async (req, res) => {
    try {
        await RoadTrip.findByIdAndDelete(req.params.id);
        res.json({ message: 'Road trip deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Search for road trips based on certain criteria (e.g., location, duration, cost)
router.get('/search', async (req, res) => {
    // Implement search logic
});

module.exports = router;