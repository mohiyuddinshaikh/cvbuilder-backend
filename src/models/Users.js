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
      return this.provider == 1;
    },
  },
  contactNumber: {
    type: String,
  },
  provider: {
    type: Number,
    required: true,
    enum: [1,2,3], // 1 - email-password, 2- google, 3 - fb
  },
  socialId: {
    type: String,
    required: function () {
      return this.provider == 2 || this.provider == 3
    }
  },
});

const User = model("User", userSchema);

module.exports = User;
