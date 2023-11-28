const express = require('express');

const policyController = require('../controllers/policyController');

const router = express.Router();

router
  .route('/')
  .get(policyController.getAllPolicies)
  .post(policyController.createPolicy);

router
  .route('/:id')
  .get(policyController.getPolicy)
  .patch(policyController.updatePolicy)
  .delete(policyController.deletePolicy);

module.exports = router;
