// Fertilizer data model
const mongoose = require('mongoose');

const fertilizerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  recommended_crops: {
    type: [String],
    required: true,
  },
  application_rate: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    required: true,
  },
});

const Fertilizer = mongoose.model('Fertilizer', fertilizerSchema);

module.exports = Fertilizer;
