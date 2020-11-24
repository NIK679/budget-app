const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  type: {
    type: String,
    trim: true,
    required: [true, 'Please add some type'],
  },
  descn: {
    type: String,
    trim: true,
    required: [true, 'Please add some descn'],
  },
  amt: {
    type: Number,
    required: [true, 'Please add a positive or negative number'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
