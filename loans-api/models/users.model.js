const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String
});

const userModel = mongoose.model('Users', userSchema);

module.exports = userModel;
