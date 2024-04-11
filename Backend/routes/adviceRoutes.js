const express = require('express');

const adviceController = require('../controllers/adviceController');
const { checkRole } = require('../auth/authMiddleware');
const router = express.Router();

router
  .route('/')
  .get(adviceController.getAllAdvices)
  .post(checkRole('admin'), adviceController.createAdvice);

router
  .route('/:id')
  .get(adviceController.getAdvice)
  .patch(checkRole('admin'), adviceController.updateAdvice)
  .delete(checkRole('admin'), adviceController.deleteAdvice);

router
  .route('/getAdvice/:cropName')
  .get(adviceController.getAdviceByCropName);

module.exports = router;
