const Crop = require('../Models/cropModel');

exports.getAllCrops = async (req, res) => {
  try {
    const crops = await Crop.find();
    res.status(200).json({
      status: 'success',
      results: crops.length,
      data: {
        crops,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getCrop = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.id);
    if (!crop) {
      return res.status(404).json({
        status: 'fail',
        message: 'No crop found with that ID',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        crop,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createCrop = async (req, res) => {
  try {
    const newCrop = await Crop.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        crop: newCrop,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateCrop = async (req, res) => {
  try {
    const crop = await Crop.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!crop) {
      return res.status(404).json({
        status: 'fail',
        message: 'No crop found with that ID',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        crop: crop,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteCrop = async (req, res) => {
  try {
    const crop = await Crop.findByIdAndDelete(req.params.id);
    if (!crop) {
      return res.status(404).json({
        status: 'fail',
        message: 'No crop found with that ID',
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
