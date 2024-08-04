const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  amount: Number,
  dueDate: Date,
  status: String
});

const invoiceModel = mongoose.model('Invoices', invoiceSchema);

module.exports = invoiceModel;
