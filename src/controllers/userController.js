const User = require("../models/Users");
const { MongoServerError } = require('mongodb');

// Add user
exports.addUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const newUser = new User({
      userName,
      email,
      password,
      // contactNumber,
      // socialId,
      // provider,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    if (error instanceof MongoServerError && error.code === 11000) {
      res.status(400).json({ error: 'Email address is already registered.' });
    } else {
      res.status(500).json({ error: 'An error occurred while adding the user.' });
    }
  }
};
