const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all reviews');
});

router.post('/', (req, res) => {
  res.send('Create a new review');
});

// Add more routes as needed

module.exports = router;