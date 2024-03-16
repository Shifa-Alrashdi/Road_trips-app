const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 by default, or a port specified in the environment variable

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

app.use('/api/users', usersRoutes);
app.use('/api/roadTrips', roadTripsRoutes);
app.use('/api/reviews', reviewsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});