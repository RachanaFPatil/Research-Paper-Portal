const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema({
  title: { type: String, required: true },
  doi: { type: String, required: true },
  author: { type: String, required: true },  // Ensure that this field is being passed and saved properly
  publisher: { type: String, required: true },
  abstract: { type: String },
  department: { type: String, required: true },
});

module.exports = mongoose.model('Paper', paperSchema);
