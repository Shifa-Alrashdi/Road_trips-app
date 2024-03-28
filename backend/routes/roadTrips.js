const express = require('express');
const router = express.Router();

router.post('./api/roadTrips', (req, res) => {
    // Handle the POST request here
    // For example, you can access the data sent in the request body
    const roadTripData = req.body;

    // Process the road trip data (e.g., save to database)
    // Respond with a success message
    res.status(201).json({ message: 'Road trip created successfully' });
});

router.get('/', (req, res) => {
  res.send('Get all road trips');
});

router.post('/', (req, res) => {
  res.send('Create a new road trip');
});

module.exports = router;