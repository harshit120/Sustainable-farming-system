const Fertilizer = require('../Models/fertilizerModel');

exports.getAllFertilizers = async (req, res) => {
  try {
    const fertilizers = await Fertilizer.find();

    res.status(200).json({
      status: 'success',
      results: fertilizers.length,
      data: {
        fertilizers,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getFertilizer = async (req, res) => {
  try {
    const fertilizer = await Fertilizer.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        fertilizer,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createFertilizer = async (req, res) => {
  try {
    const newFertilizer = await Fertilizer.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        fertilizer: newFertilizer,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateFertilizer = async (req, res) => {
  try {
    const fertilizer = await Fertilizer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    res.status(200).json({
      status: 'success',
      data: {
        fertilizer: fertilizer,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteFertilizer = async (req, res) => {
  try {
    await Fertilizer.findByIdAndDelete(req.params.id);
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
