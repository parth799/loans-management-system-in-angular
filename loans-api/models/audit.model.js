const mongoose = require('mongoose');

const auditSchema = mongoose.Schema({
  // Define the fields for the Audit schema
  // For example:
  action: String,
  user: String,
  date: Date,
});

const Audit = mongoose.model('Audit', auditSchema);

module.exports = Audit;
