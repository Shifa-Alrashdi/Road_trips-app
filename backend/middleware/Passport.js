const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Configure the local strategy
passport.use(new LocalStrategy(
  function(username, password, done) {
    // Implement your authentication logic here
    // Example: Find user by username and check password
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

// Serialize and deserialize user functions (required for session support)
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});