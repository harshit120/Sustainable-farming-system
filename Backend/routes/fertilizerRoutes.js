const express = require('express');

const fertilizerController = require('../controllers/fertilizerController');
const { checkRole } = require('../auth/authMiddleware');
const router = express.Router();

router
  .route('/')
  .get(fertilizerController.getAllFertilizers)
  .post(checkRole('admin'), fertilizerController.createFertilizer);

router
  .route('/:id')
  .get(fertilizerController.getFertilizer)
  .patch(checkRole('admin'), fertilizerController.updateFertilizer)
  .delete(checkRole('admin'), fertilizerController.deleteFertilizer);

module.exports = router;
