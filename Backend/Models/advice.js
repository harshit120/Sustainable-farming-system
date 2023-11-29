const mongoose = require('mongoose');

const adviceSchema = new mongoose.Schema({
  crop_name: {
    type: String,
    required: true,
  },
  general_advice: {
    type: String,
    required: true,
  },
  watering_advice: {
    type: String,
    required: true,
  },
  fertilization_advice: {
    type: String,
    required: true,
  },
  pest_management_advice: {
    type: String,
    required: true,
  },
  disease_management_advice: {
    type: String,
    required: true,
  },
  harvesting_advice: {
    type: String,
    required: true,
  },
});

const Advice = mongoose.model('Advice', adviceSchema);

module.exports = Advice;
