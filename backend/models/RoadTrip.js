const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roadTripSchema = new Schema({
  name: { type: String, required: true },
  locations: [String],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('RoadTrip', roadTripSchema);

const express = require('express');
const router = express.Router();
const RoadTrip = require('../models/RoadTrip');

// Create a new road trip
router.post('/', async (req, res) => {
  try {
    const newRoadTrip = await RoadTrip.create(req.body);
    res.status(201).json(newRoadTrip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all road trips
router.get('/', async (req, res) => {
  try {
    const roadTrips = await RoadTrip.find();
    res.status(200).json(roadTrips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a road trip
router.put('/:id', async (req, res) => {
  try {
    const updatedRoadTrip = await RoadTrip.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedRoadTrip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a road trip
router.delete('/:id', async (req, res) => {
  try {
    await RoadTrip.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;