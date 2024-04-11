const Advice = require('../Models/advice.js');

exports.getAllAdvices = async (req, res) => {
  try {
    const advices = await Advice.find();

    res.status(200).json({
      status: 'success',
      results: advices.length,
      data: {
        advices,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAdvice = async (req, res) => {
  try {
    const advice = await Advice.findById(req.params.id);
    if (!advice) {
      return res.status(404).json({
        status: 'fail',
        message: 'No advice found with that ID',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        advice,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createAdvice = async (req, res) => {
  try {
    const newAdvice = await Advice.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        advice: newAdvice,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateAdvice = async (req, res) => {
  try {
    const advice = await Advice.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!advice) {
      return res.status(404).json({
        status: 'fail',
        message: 'No advice found with that ID',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        advice,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteAdvice = async (req, res) => {
  try {
    const advice = await Advice.findByIdAndDelete(req.params.id);
    if (!advice) {
      return res.status(404).json({
        status: 'fail',
        message: 'No advice found with that ID',
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

exports.getAdviceByCropName=async(req,res)=>{
  try {
    const cropName = req.params.cropName
    const adviceForCrop = await Advice.find({ crop_name: cropName });
    if (!adviceForCrop) {
      return res.status(404).json({
        status: 'fail',
        message: 'No advice found with this crop',
      });
    }
    res.status(200).json({
      status: 'success',
      data: adviceForCrop,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
