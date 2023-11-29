const express = require('express');

const adviceController = require('../controllers/adviceController');

const router = express.Router();

router
  .route('/')
  .get(adviceController.getAllAdvices)
  .post(adviceController.createAdvice);

router
  .route('/:id')
  .get(adviceController.getAdvice)
  .patch(adviceController.updateAdvice)
  .delete(adviceController.deleteAdvice);

module.exports = router;
