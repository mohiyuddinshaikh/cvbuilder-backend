const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: function () {
      return !this.socialId;
    },
  },
  contactNumber: {
    type: String,
  },
  socialId: {
    type: String,
  },
  provider: {
    type: Number,
    required: function () {
      return !!this.socialId;
    },
    enum: [0, 1],
  },
});

const User = model("User", userSchema);

module.exports = User;
