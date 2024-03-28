const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 5000; // Use port 5000 by default, or a port specified in the environment variable

// Allow requests from all origins
app.use(cors());

// Configure session middleware
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Define a route for creating a new road trip
app.post('./api/roadTrips', (req, res) => {
    // Process the data sent by the frontend (e.g., save it to a database)
    const roadTripData = req.body;
    // Example: save the road trip data to a database
    // Example: send a response back to the frontend
    res.status(201).json({ message: 'Road trip created successfully' });
});

// Middleware
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

app.use(logger);
app.use(auth);


// Error handling middleware (should be the last middleware)
app.use(errorHandler);

// Routes
const usersRoutes = require('./routes/users');
const roadTripsRoutes = require('./routes/roadTrips');
const reviewsRoutes = require('./routes/reviews');

app.use('./api/users', usersRoutes);
app.use('./api/roadTrips', roadTripsRoutes);
app.use('./api/reviews', reviewsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});