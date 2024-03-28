const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Add a review for a specific road trip
router.post('/:id/reviews', async (req, res) => {
    try {
        const newReview = new Review({
            roadTripId: req.params.id,
            userId: req.body.userId,
            rating: req.body.rating,
            comment: req.body.comment
        });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all reviews for a specific road trip
router.get('/:id/reviews', async (req, res) => {
    try {
        const reviews = await Review.find({ roadTripId: req.params.id });
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;