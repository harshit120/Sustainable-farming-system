const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  suitable_regions: {
    type: [String],
    required: true,
  },
  best_season: {
    type: String,
    required: true,
  },
  soil_requirements: {
    type: String,
    required: true,
  },
  watering_needs: {
    type: String,
    required: true,
  },
  pest_management: {
    type: String,
    required: true,
  },
  disease_management: {
    type: String,
    required: true,
  },
  yield_expectation: {
    type: String,
    required: true,
  },
  harvesting_period: {
    type: String,
    required: true,
  },
});

const Crop = mongoose.model('Crop', cropSchema);

module.exports = Crop;
