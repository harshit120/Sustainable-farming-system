const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  crop_name: {
    type: String,
    required: true,
  },
  crop_quantity: {
    type: Number,
    required: true,
  },
  fertilizer_name: {
    type: String,
    required: true,
  },
  fertilizer_quantity: {
    type: Number,
    required: true,
  },
  purchase_date: {
    type: Date,
    default: Date.now,
  },
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
