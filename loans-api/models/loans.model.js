const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  // Define the fields for the loan schema
  // For example:
  loanName: String,
  loanType: String,
  amount: Number,
  loanIssueDate:Date,
  status: String,
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
