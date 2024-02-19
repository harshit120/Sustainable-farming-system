const Purchase = require('../Models/purchase.js');

exports.getAllPurchases = async (req, res) => {
  try {
    let purchases;
    if (req.user.role === 'admin') {
      purchases = await Purchase.find();
    } else {
      purchases = await Purchase.find({ user: req.user._id });
    }

    res.status(200).json({
      status: 'success',
      results: purchases.length,
      data: {
        purchases,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getPurchase = async (req, res) => {
  try {
    let purchase;
    if (req.user.role === 'admin') {
      purchase = await Purchase.findById(req.params.id);
    } else {
      purchase = await Purchase.findOne({
        _id: req.params.id,
        user: req.user._id,
      });
    }

    if (!purchase) {
      return res.status(404).json({
        status: 'fail',
        message: 'No purchase found with that ID',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        purchase,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createPurchase = async (req, res) => {
  try {
    // Calculate the total amount
    // let totalAmount = 0;
    // req.body.items.forEach((item) => {
    //   totalAmount += item.price * item.quantity;
    // });

    const newPurchase = await Purchase.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({
      status: 'success',
      data: {
        purchase: newPurchase,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updatePurchase = async (req, res) => {
  try {
    const purchase = await Purchase.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!purchase) {
      return res.status(404).json({
        status: 'fail',
        message: 'No purchase found with that ID',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        purchase,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deletePurchase = async (req, res) => {
  try {
    const purchase = await Purchase.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!purchase) {
      return res.status(404).json({
        status: 'fail',
        message: 'No purchase found with that ID',
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
