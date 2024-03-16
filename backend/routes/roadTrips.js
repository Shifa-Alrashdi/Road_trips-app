const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all road trips');
});

router.post('/', (req, res) => {
  res.send('Create a new road trip');
});

// Add more routes as needed

module.exports = router;