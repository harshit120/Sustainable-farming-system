const express = require('express');

const fertilizerController = require('../controllers/fertilizerController');

const router = express.Router();

router
  .route('/')
  .get(fertilizerController.getAllFertilizers)
  .post(fertilizerController.createFertilizer);

router
  .route('/:id')
  .get(fertilizerController.getFertilizer)
  .patch(fertilizerController.updateFertilizer)
  .delete(fertilizerController.deleteFertilizer);

module.exports = router;
