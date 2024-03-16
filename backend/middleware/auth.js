const auth = (req, res, next) => {
  // Check if user is authenticated
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, proceed to next middleware
  } else {
    return res.status(401).json({ message: 'Unauthorized' }); // User is not authenticated
  }
};

module.exports = auth;