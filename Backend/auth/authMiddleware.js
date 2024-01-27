// Import required modules
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../Models/user.js');

// Load environment variables from config.env file
dotenv.config({ path: './config.env' });

// Function to extract token from request headers
function extractToken(req) {
  if (!req.headers.authorization) {
    throw new Error('No token provided');
  }

  const token = req.headers.authorization.split(' ')[1];
  return token;
}

// Middleware function to check user role
exports.checkRole = function (role) {
  return function (req, res, next) {
    try {
      const token = extractToken(req);
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

      console.log(`Required role: ${role}`);
      console.log(`User's role: ${decodedToken.role}`);

      // Check if user's role matches the required role
      if (decodedToken.role !== role) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      next();
    } catch (err) {
      res.status(403).json({
        status: 'fail',
        message: err.message,
      });
    }
  };
};

// Middleware function to check if user is authenticated
exports.isAuthenticated = (req, res, next) => {
  try {
    const token = extractToken(req);
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Middleware function to fetch user by ID
exports.fetchUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Middleware function to check if user is the owner of the account or an admin
exports.checkUserOrAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    token = extractToken(req);

    // Verify the token and get the user data
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Check if the logged-in user is an admin or the owner of the account
    if (decoded.role !== 'admin' && decoded.id !== user.id.toString()) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};
