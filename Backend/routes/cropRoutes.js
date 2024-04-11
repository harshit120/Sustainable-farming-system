const express = require('express');

const cropController = require('../controllers/cropController');
const { checkRole } = require('../auth/authMiddleware');
const router = express.Router();

router
  .route('/')
  .get(cropController.getAllCrops)
  .post(checkRole('admin'), cropController.createCrop);

router
  .route('/:id')
  .get(cropController.getCrop)
  .patch(checkRole('admin'), cropController.updateCrop)
  .delete(checkRole('admin'), cropController.deleteCrop);

router
  .route('/getCropByRegion/:region')
  .get(cropController.getCropByRegion)

module.exports = router;
