const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  rating: { type: Number, required: true },
  comment: { type: String },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Review', reviewSchema);

const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Create a new review
router.post('/', async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a review
router.put('/:id', async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a review
router.delete('/:id', async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
