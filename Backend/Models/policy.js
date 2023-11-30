const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  policy_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  applicable_crops: {
    type: [String],
    required: true,
  },
  eligibility_criteria: {
    type: String,
    required: true,
  },
  benefits: {
    type: String,
    required: true,
  },
  application_process: {
    type: String,
    required: true,
  },
});

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;
