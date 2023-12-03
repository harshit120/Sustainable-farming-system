const express = require('express');

const cropController = require('../controllers/cropController');

const router = express.Router();

router
  .route('/')
  .get(cropController.getAllCrops)
  .post(cropController.createCrop);

router
  .route('/:id')
  .get(cropController.getCrop)
  .patch(cropController.updateCrop)
  .delete(cropController.deleteCrop);

module.exports = router;
