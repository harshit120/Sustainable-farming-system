const express = require('express');

const policyController = require('../controllers/policyController');
const { checkRole } = require('../auth/authMiddleware');
const router = express.Router();

router
  .route('/')
  .get(policyController.getAllPolicies)
  .post(checkRole('admin'), policyController.createPolicy);

router
  .route('/:id')
  .get(policyController.getPolicy)
  .patch(checkRole('admin'), policyController.updatePolicy)
  .delete(checkRole('admin'), policyController.deletePolicy);

module.exports = router;
