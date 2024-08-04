const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
  // Define your payment schema fields here
  // For example:
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  // Add other fields as needed
});

const paymentModel = mongoose.model('Payment', paymentSchema);

module.exports = paymentModel;
