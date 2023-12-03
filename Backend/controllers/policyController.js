const Policy = require('../Models/policy.js');

exports.getAllPolicies = async (req, res) => {
  try {
    const policies = await Policy.find();

    res.status(200).json({
      status: 'success',
      results: policies.length,
      data: {
        policies,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getPolicy = async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);
    if (!policy) {
      return res.status(404).json({
        status: 'fail',
        message: 'No policy found with that ID',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        policy,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createPolicy = async (req, res) => {
  try {
    const newPolicy = await Policy.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        policy: newPolicy,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updatePolicy = async (req, res) => {
  try {
    const policy = await Policy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!policy) {
      return res.status(404).json({
        status: 'fail',
        message: 'No policy found with that ID',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        policy,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deletePolicy = async (req, res) => {
  try {
    const policy = await Policy.findByIdAndDelete(req.params.id);
    if (!policy) {
      return res.status(404).json({
        status: 'fail',
        message: 'No policy found with that ID',
      });
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
