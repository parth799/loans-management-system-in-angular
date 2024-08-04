const mongoose = require('mongoose');

const settingsSchema = mongoose.Schema({
  companyName: String,
  address: String,
  phoneNumber: String,
  email: String,
  currency: String,
  taxRate: Number
});

const settingsModel = mongoose.model('Settings', settingsSchema);

module.exports = settingsModel;
