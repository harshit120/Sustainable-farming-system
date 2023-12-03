const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../Models/user.js');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

exports.signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
      region: req.body.region,
      landSize: req.body.landSize,
    });

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });

    await user.save();

    res.status(201).json({
      status: 'success',
      token,
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect email or password',
      });
    }

    const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY', {
      expiresIn: '1h',
    });

    res.status(200).json({
      status: 'success',
      token,
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
