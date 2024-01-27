// Import required modules
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../Models/user.js');
const dotenv = require('dotenv');

// Load environment variables from config file
dotenv.config({ path: './config.env' });

// User signup function
exports.signup = async (req, res) => {
  try {
    const { password } = req.body;
    if (password.length < 8) {
      // Return error response if password is less than 8 characters
      return res.status(400).json({
        status: 'fail',
        message: 'Password should be at least 8 characters',
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user object
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
      role: req.body.role || 'user',
      email: req.body.email,
      region: req.body.region,
      landSize: req.body.landSize,
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.SECRET_KEY,
      {
        expiresIn: '24h',
      },
    );

    // Save the user to the database
    await user.save();

    // Remove password from user object
    const userResponse = user.toObject();
    delete userResponse.password;

    // Return success response with token and user data
    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: userResponse,
      },
    });
  } catch (err) {
    // Return error response if any error occurs
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// User login function
exports.login = async (req, res) => {
  try {
    console.log(req.body);

    // Find user by email
    const user = await User.findOne({ email: req.body.email });

    // Check if user exists and password is correct
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      // Return error response if email or password is incorrect
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect email or password',
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.SECRET_KEY,
      {
        expiresIn: '24h',
      },
    );

    // Remove password from user object
    const userResponse = user.toObject();
    delete userResponse.password;

    // Return success response with token and user data
    res.status(200).json({
      status: 'success',
      token,
      data: {
        user: userResponse,
      },
    });
  } catch (err) {
    // Return error response if any error occurs
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
