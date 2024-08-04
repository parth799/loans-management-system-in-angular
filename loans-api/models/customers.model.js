const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  // Define the fields for the customer schema
  // For example:
  firstName: String,
  lastName: String,
  emailAddress: String,
  phoneNumber: String,
  dob: Date,
  department: String
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
